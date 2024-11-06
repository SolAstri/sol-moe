// data/anime.ts
export interface AnimeTitle {
  romaji: string;
  english: string;
  japanese: string;
}

export interface WatchHistoryEntry {
  date: string;
  progress: number;
  note?: string;
}

export interface AnimeStats {
  story?: number;
  animation?: number;
  sound?: number;
  characters?: number;
  enjoyment?: number;
}

export interface AnimeEntry {
  title: AnimeTitle;
  cover: string;
  status: 'watching' | 'completed' | 'planned' | 'on_hold' | 'dropped';
  progress: number;
  totalEpisodes: number;
  rating?: number;
  tags?: string[];
  startDate?: string;
  completedDate?: string;
  synopsis?: string;
  watchHistory?: WatchHistoryEntry[];
  stats?: AnimeStats;
  notes?: string;
  // For tracking rewatches
  timesRewatched?: number;
  // For seasonal tracking
  season?: {
    year: number;
    season: 'winter' | 'spring' | 'summer' | 'fall';
  };
}

// Example of enhanced anime data
export const animeData: AnimeEntry[] = [
  {
    title: {
      romaji: "Steins;Gate",
      english: "Steins;Gate",
      japanese: "シュタインズ・ゲート"
    },
    cover: "https://cdn.myanimelist.net/images/anime/5/73199.jpg",
    status: "completed",
    progress: 24,
    totalEpisodes: 24,
    rating: 10,
    tags: ["sci-fi", "thriller", "time-travel"],
    startDate: "2024-01-01",
    completedDate: "2024-01-15",
    synopsis: "A self-proclaimed mad scientist discovers a way to send messages to the past...",
    watchHistory: [
      { date: "2024-01-01", progress: 1, note: "Started watching" },
      { date: "2024-01-07", progress: 12, note: "Reached the turning point" },
      { date: "2024-01-15", progress: 24, note: "Completed. Masterpiece." }
    ],
    stats: {
      story: 10,
      animation: 9,
      sound: 10,
      characters: 10,
      enjoyment: 10
    },
    notes: "One of the best time travel stories ever written.",
    timesRewatched: 2,
    season: {
      year: 2011,
      season: "spring"
    }
  },
  // ... other anime entries
];