const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

// Get all projects and sort them(active first, then by date)
function getSortedProjects(collectionApi) {
    return collectionApi.getFilteredByTag("project").sort((a, b) => {
        const isActiveA = a.data.finished === "Actief";
        const isActiveB = b.data.finished === "Actief";

        // Active projects first
        if (isActiveA && !isActiveB) return -1;
        if (!isActiveA && isActiveB) return 1;

        // Then sort by date
        return (b.date || 0) - (a.date || 0);
    });
}

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

    // All projects
    eleventyConfig.addCollection("allProjects", (collectionApi) => {
        return getSortedProjects(collectionApi);
    });

    // Most recent projects, total of 4
    eleventyConfig.addCollection("recentProjects", (collectionApi) => {
        return getSortedProjects(collectionApi).slice(0, 4);
    });

    // Generate a list of all unique tags
    eleventyConfig.addCollection("allTags", (collection) => {
        const tagCount = {};
    
        // Iterate over all items in the collection
        collection.getAll().forEach((item) => {
            (item.data.tags || []).forEach((tag) => {
                if (tag !== "project") { // Exclude the "project" tag
                    if (!tagCount[tag]) {
                        tagCount[tag] = 0;
                    }
                    tagCount[tag]++;
                }
            });
        });
    
        // Convert the tagCount object into an array of { tag, count } objects, sorted by tag
        return Object.entries(tagCount)
            .map(([tag, count]) => ({ tag, count }))
            .sort((a, b) => a.tag.localeCompare(b.tag)); // Sort alphabetically
    });    
};