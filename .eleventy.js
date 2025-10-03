module.exports = function(eleventyConfig) {
  // Copy assets to output
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/shared");

  // Watch CSS and JS files for changes
  eleventyConfig.addWatchTarget("src/shared/styles/");
  eleventyConfig.addWatchTarget("src/shared/scripts/");
  eleventyConfig.addWatchTarget("src/pages/**/*.css");
  eleventyConfig.addWatchTarget("src/pages/**/*.js");

  // BrowserSync settings
  eleventyConfig.setBrowserSyncConfig({
    files: ['_site/**/*'],
    open: true,
    browser: "default",
    notify: false,
    ui: false,
    ghostMode: false,
    port: 8080
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["html", "md", "njk"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};