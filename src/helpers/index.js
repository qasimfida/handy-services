export function filterCategoriesAndServices(data, searchQuery) {
  const query = searchQuery.toLowerCase();

  // Filter categories that match the search query or have services that match the search query
  const filteredData = data
    .filter(
      (category) =>
        category.category.toLowerCase().includes(query) ||
        category.services.some((service) =>
          service.toLowerCase().includes(query)
        )
    )
    .map((category) => {
      // If the category matches, return the whole category
      if (category.category.toLowerCase().includes(query)) {
        return category;
      } else {
        // Otherwise, filter services to only those that match the search query
        return {
          ...category,
          services: category.services.filter((service) =>
            service.toLowerCase().includes(query)
          ),
        };
      }
    });

  return filteredData;
}

export const stringToSlug = (str) => {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');;
};

export const slugToString = (slug) => {
    const stringWithSpaces = slug.replace(/-/g, ' ');
    const stringWithSlash = stringWithSpaces.replace(/\//g, ' / ');
    return stringWithSlash;
  };