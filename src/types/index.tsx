export interface SearchResult {
  category: string;
  services: string[];
}

export interface ChangeEvent {
  value: string;
}

export interface SearchResultProps {
  result: SearchResult;
  id?: number | string;
}
export interface TagsProps {
  icon: React.FC;
  tagName: string;
}
export interface ServiceCardProps {
  icon: React.ReactNode;
  description: string;
}
export interface SearchContextProps {
  results: string[];
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  fetchData: (value: string) => void;
}
export interface SearchProviderProps {
  children: React.ReactNode;
}
export interface SearchResultsListProps {
  results: any;
  search: any;
}
interface Service {
  [key: string]: string;
}

export interface Category {
  category: string;
  services: Service[];
}
