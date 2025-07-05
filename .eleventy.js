module.exports = function(eleventyConfig) {
  // Tell Eleventy to watch for changes in the css directory
  eleventyConfig.addWatchTarget("src/assets/css/");

  // Copy assets to the output directory
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("admin"); // for Netlify CMS

  return {
    // Set the input and output directories
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts"
    },
    // Set Nunjucks as the templating engine for Markdown files
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}; 