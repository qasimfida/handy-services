import { Category } from "../types";


export function filterCategoriesAndServices(data: Category[] | undefined, searchQuery: string): Category[] {
  if (!data) {
    return [];
  }

  const query = searchQuery.toLowerCase();

  const filteredData = data
    .filter((category) => {
      const categoryLower = category.category.toLowerCase();
      return categoryLower.includes(query) ||
        category.services.some((service) => {
          const serviceNameLower = service?.name?.toLowerCase();
          return serviceNameLower?.includes(query);
        });
    })
    .map((category) => {
      if (category.category.toLowerCase().includes(query)) {
        return category;
      } else {
        return {
          ...category,
          services: category.services.filter((service) => {
            const serviceNameLower = service?.name?.toLowerCase();
            return serviceNameLower?.includes(query);
          }),
        };
      }
    });

  return filteredData;
}

export const stringToSlug = (str: string): string => {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
};

export const slugToString = (slug: string): string => {
  const stringWithSpaces = slug.replace(/-/g, ' ');
  const stringWithSlash = stringWithSpaces.replace(/\//g, ' / ');
  return stringWithSlash;
};
