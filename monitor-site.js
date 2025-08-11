#!/usr/bin/env node

/**
 * JP Consultancy - Website Monitoring Script
 * Monitors website uptime and sends alerts for downtime
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
    // Replace with your actual domain when deployed
    SITE_URL: 'https://your-domain.com', // Update this after deployment
    CHECK_INTERVAL: 5 * 60 * 1000, // 5 minutes
    TIMEOUT: 30000, // 30 seconds
    LOG_FILE: 'monitoring.log',
    
    // Email notifications (configure with your email service)
    EMAIL_ALERTS: {
        enabled: false, // Set to true when you configure email
        from: 'monitoring@your-domain.com',
        to: ['admin@your-domain.com'],
        smtp: {
            host: 'smtp.hostinger.com', // Hostinger SMTP
            port: 587,
            secure: false,
            auth: {
                user: 'your-email@your-domain.com',
                pass: 'your-password'
            }
        }
    }
};

class WebsiteMonitor {
    constructor() {
        this.isDown = false;
        this.downSince = null;
        this.lastCheck = null;
        this.consecutiveFailures = 0;
    }

    log(message, level = 'INFO') {
        const timestamp = new Date().toISOString();
        const logEntry = `[${timestamp}] [${level}] ${message}\n`;
        
        console.log(logEntry.trim());
        
        // Write to log file
        fs.appendFileSync(CONFIG.LOG_FILE, logEntry);
    }

    async checkSite() {
        return new Promise((resolve) => {
            const url = new URL(CONFIG.SITE_URL);
            const client = url.protocol === 'https:' ? https : http;
            
            const startTime = Date.now();
            
            const req = client.get(CONFIG.SITE_URL, {
                timeout: CONFIG.TIMEOUT,
                headers: {
                    'User-Agent': 'JP-Consultancy-Monitor/1.0'
                }
            }, (res) => {
                const responseTime = Date.now() - startTime;
                
                if (res.statusCode >= 200 && res.statusCode < 400) {
                    resolve({
                        success: true,
                        statusCode: res.statusCode,
                        responseTime: responseTime
                    });
                } else {
                    resolve({
                        success: false,
                        statusCode: res.statusCode,
                        responseTime: responseTime,
                        error: `HTTP ${res.statusCode}`
                    });
                }
            });

            req.on('timeout', () => {
                req.destroy();
                resolve({
                    success: false,
                    error: 'Request timeout',
                    responseTime: CONFIG.TIMEOUT
                });
            });

            req.on('error', (error) => {
                resolve({
                    success: false,
                    error: error.message,
                    responseTime: Date.now() - startTime
                });
            });
        });
    }

    async sendAlert(subject, message) {
        if (!CONFIG.EMAIL_ALERTS.enabled) {
            this.log(`Alert would be sent: ${subject}`, 'ALERT');
            return;
        }

        // Email sending logic would go here
        // You can integrate with services like SendGrid, Mailgun, or use Hostinger's SMTP
        this.log(`Email alert sent: ${subject}`, 'ALERT');
    }

    async monitor() {
        this.log('🚀 JP Consultancy Website Monitor Started');
        this.log(`Monitoring: ${CONFIG.SITE_URL}`);
        this.log(`Check interval: ${CONFIG.CHECK_INTERVAL / 1000}s`);
        
        const check = async () => {
            this.lastCheck = new Date();
            
            try {
                const result = await this.checkSite();
                
                if (result.success) {
                    // Site is up
                    if (this.isDown) {
                        // Site recovered
                        const downDuration = Math.round((Date.now() - this.downSince) / 1000);
                        this.log(`✅ SITE RECOVERED - Was down for ${downDuration}s`, 'RECOVERY');
                        
                        await this.sendAlert(
                            'JP Consultancy - Site Recovered',
                            `Website is back online after being down for ${downDuration} seconds.`
                        );
                        
                        this.isDown = false;
                        this.downSince = null;
                        this.consecutiveFailures = 0;
                    }
                    
                    this.log(`✅ Site OK - ${result.statusCode} (${result.responseTime}ms)`);
                    
                } else {
                    // Site is down
                    this.consecutiveFailures++;
                    
                    if (!this.isDown) {
                        this.isDown = true;
                        this.downSince = Date.now();
                        
                        this.log(`❌ SITE DOWN - ${result.error}`, 'ERROR');
                        
                        await this.sendAlert(
                            'JP Consultancy - Site Down Alert',
                            `Website is not responding: ${result.error}`
                        );
                    } else {
                        this.log(`❌ Site still down - ${result.error} (${this.consecutiveFailures} failures)`, 'ERROR');
                    }
                }
                
            } catch (error) {
                this.log(`❌ Monitor error: ${error.message}`, 'ERROR');
            }
        };

        // Initial check
        await check();
        
        // Set up interval
        setInterval(check, CONFIG.CHECK_INTERVAL);
    }

    getStatus() {
        return {
            isDown: this.isDown,
            downSince: this.downSince,
            lastCheck: this.lastCheck,
            consecutiveFailures: this.consecutiveFailures
        };
    }
}

// Handle process signals
process.on('SIGINT', () => {
    console.log('\n🛑 Monitor stopped by user');
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log('\n🛑 Monitor terminated');
    process.exit(0);
});

// Start monitoring
if (require.main === module) {
    const monitor = new WebsiteMonitor();
    monitor.monitor().catch(console.error);
}

module.exports = WebsiteMonitor;
