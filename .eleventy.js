module.exports = function(eleventyConfig) {
  // Copy assets to output
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/shared");
  eleventyConfig.addPassthroughCopy("src/pages/**/*.css");
  eleventyConfig.addPassthroughCopy("src/pages/**/*.js");

  // Watch CSS and JS files for changes
  eleventyConfig.addWatchTarget("src/shared/styles/");
  eleventyConfig.addWatchTarget("src/shared/scripts/");
  eleventyConfig.addWatchTarget("src/pages/**/*.css");
  eleventyConfig.addWatchTarget("src/pages/**/*.js");
  
  // Add current year filter
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Set template formats
  eleventyConfig.setTemplateFormats([
    "md",
    "njk",
    "html"
  ]);

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
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};