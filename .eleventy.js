const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
    // Add the navigation plugin
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // Add passthrough copy for any necessary assets, such as CSS or images
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("assets");

    // Specify a collection to get only index and pages in /pages directory
    eleventyConfig.addCollection("navPages", (collection) => {
        return collection.getAll().filter((item) => {
            // Only include items with eleventyNavigation in the front matter
            return item.data.eleventyNavigation && (
                item.inputPath.includes("/pages/")
            );
        });
    });

    // Custom collection for projects sorted by date, newest first
    eleventyConfig.addCollection("project", (collectionApi) => {
        return collectionApi.getFilteredByTag("project").sort((a, b) => {
            return b.date - a.date; // Sort by date descending
        });
    });

    // Generate a list of all unique tags
    eleventyConfig.addCollection("allTags", collection => {
        const tagSet = new Set();
        collection.getAll().forEach(item => {
            (item.data.tags || []).forEach(tag => {
                if (tag !== "project") {
                    tagSet.add(tag);
                }
            });
        });
        return [...tagSet].sort();
    });
};