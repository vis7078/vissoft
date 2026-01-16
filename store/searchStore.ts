import { create } from 'zustand';

interface App {
  uaid: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  category: string;
  externalLink: string;
}

interface SearchStore {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  apps: App[];
  setApps: (apps: App[]) => void;
  filteredApps: App[];
}

export const useSearchStore = create<SearchStore>((set) => ({
  searchQuery: '',
  setSearchQuery: (query) => set((state) => ({
    searchQuery: query,
    filteredApps: state.apps.filter((app) =>
      app.title.toLowerCase().includes(query.toLowerCase()) ||
      app.uaid.toLowerCase().includes(query.toLowerCase())
    ),
  })),
  apps: [],
  setApps: (apps) => set({ apps, filteredApps: apps }),
  filteredApps: [],
}));
