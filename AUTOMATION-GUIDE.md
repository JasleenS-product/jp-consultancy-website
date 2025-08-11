# JP Consultancy - Automation Guide

## 🚀 Automated Deployment Process

### Quick Commands
```bash
# Deploy changes automatically
npm run deploy
# OR
./deploy.sh

# Start monitoring
npm run monitor
# OR
node monitor-site.js
```

### What the Deployment Script Does:
1. ✅ Switches to `JP-CONSULTANCY-DEPLOYMENT-READY` branch
2. ✅ Rebuilds site with Eleventy (`_site` folder updated)
3. ✅ Copies latest CSS files
4. ✅ Commits all changes with timestamp
5. ✅ Pushes to remote repository
6. ✅ Ready for Hostinger upload

### Deployment Workflow:
```bash
# Make your changes to source files
# Then run:
npm run deploy

# Output will show:
# 🚀 JP Consultancy - Automated Deployment Started
# 📋 Switching to deployment branch...
# 🔨 Building site with Eleventy...
# 📄 Copying latest CSS...
# 📦 Adding changes to git...
# 💾 Committing changes...
# ⬆️  Pushing to remote repository...
# ✅ Deployment completed successfully!
```

## 📊 Website Monitoring System

### Features:
- ✅ **Uptime Monitoring**: Checks every 5 minutes
- ✅ **Downtime Alerts**: Immediate notifications
- ✅ **Response Time Tracking**: Performance monitoring
- ✅ **Recovery Notifications**: When site comes back online
- ✅ **Detailed Logging**: All events logged to `monitoring.log`

### Setup Monitoring:

#### 1. Update Configuration
Edit `monitor-site.js` and update:
```javascript
SITE_URL: 'https://your-actual-domain.com', // Your Hostinger domain
```

#### 2. Start Monitoring
```bash
npm run monitor
```

#### 3. Background Monitoring (Linux/Mac)
```bash
# Run in background
nohup npm run monitor > monitor-output.log 2>&1 &

# Check if running
ps aux | grep monitor-site
```

#### 4. Stop Monitoring
```bash
# Find process ID
ps aux | grep monitor-site

# Kill process
kill [PID]
```

### Email Alerts Setup (Optional)
1. Configure email settings in `monitor-site.js`
2. Set `EMAIL_ALERTS.enabled: true`
3. Add your SMTP credentials (Hostinger provides SMTP)

## 🔄 Continuous Integration Workflow

### Development Workflow:
1. **Make Changes** → Edit source files
2. **Test Locally** → `npm run serve` (http://localhost:8080)
3. **Deploy** → `npm run deploy`
4. **Upload to Hostinger** → Copy `_site/` contents to `public_html/`

### Automated Monitoring:
1. **Deploy Site** → Upload to Hostinger
2. **Update Domain** → Set correct URL in monitor-site.js
3. **Start Monitoring** → `npm run monitor`
4. **Get Alerts** → Receive notifications if site goes down

## 📁 File Structure After Automation

```
Jpconsultation/
├── deploy.sh              # Automated deployment script
├── monitor-site.js         # Site monitoring system
├── monitoring.log          # Monitor log file (auto-created)
├── AUTOMATION-GUIDE.md     # This guide
├── DEPLOYMENT-GUIDE.md     # Hostinger deployment guide
├── _site/                  # Auto-updated production files
├── src/                    # Source files
└── package.json           # Updated with automation scripts
```

## 🚨 Monitoring Alerts

### What You'll See:
```
✅ Site OK - 200 (245ms)           # Normal operation
❌ SITE DOWN - Connection timeout  # Site down alert
✅ SITE RECOVERED - Was down for 120s  # Recovery notification
```

### Log File (`monitoring.log`):
```
[2024-08-08T14:30:15.123Z] [INFO] 🚀 JP Consultancy Website Monitor Started
[2024-08-08T14:30:15.456Z] [INFO] ✅ Site OK - 200 (234ms)
[2024-08-08T14:35:15.789Z] [ERROR] ❌ SITE DOWN - Connection timeout
[2024-08-08T14:37:45.012Z] [RECOVERY] ✅ SITE RECOVERED - Was down for 149s
```

## 🛠️ Troubleshooting

### Deployment Issues:
```bash
# Check if on correct branch
git branch

# Manual deployment
git checkout JP-CONSULTANCY-DEPLOYMENT-READY
npx @11ty/eleventy
git add .
git commit -m "Manual deployment"
git push
```

### Monitoring Issues:
```bash
# Test site manually
curl -I https://your-domain.com

# Check monitor logs
tail -f monitoring.log

# Restart monitor
npm run monitor
```

## 📞 Support & Maintenance

- **Logs Location**: `monitoring.log`
- **Deploy Logs**: Console output from `npm run deploy`
- **Site Files**: Always in `_site/` folder
- **Branch**: All changes go to `JP-CONSULTANCY-DEPLOYMENT-READY`

**Remember**: After any changes, run `npm run deploy` to update everything automatically! 🚀
