// Centralized anime data store
export interface AnimeTitle {
  romaji: string;
  english: string;
  japanese: string;
}

export interface AnimeEntry {
  title: AnimeTitle;
  cover: string;
  status: 'watching' | 'completed' | 'planned' | 'on_hold' | 'dropped';
  progress: number;
  totalEpisodes: number;
  rating?: number;
  tags?: string[];
  reviewDate?: string;
  excerpt?: string;
  stats?: {
    story: number;
    animation: number;
    sound: number;
    characters: number;
    enjoyment: number;
  };
}

export const animeData: AnimeEntry[] = [
  {
    title: {
      romaji: "Steins;Gate",
      english: "Steins;Gate",
      japanese: "シュタインズ・ゲート"
    },
    cover: "https://cdn.myanimelist.net/images/anime/5/73199.jpg",
    status: "watching",
    progress: 12,
    totalEpisodes: 24,
    rating: 10,
    tags: ["sci-fi", "thriller", "time-travel"],
    reviewDate: "2024-01-05",
    excerpt: "A masterclass in time travel narrative and character development.",
    stats: {
      story: 10,
      animation: 9,
      sound: 9,
      characters: 10,
      enjoyment: 10
    }
  },
  {
    title: {
      romaji: "Mahoutsukai no Yome",
      english: "The Ancient Magus' Bride",
      japanese: "魔法使いの嫁"
    },
    cover: "https://cdn.myanimelist.net/images/anime/1140/124500.jpg",
    status: "completed",
    progress: 24,
    totalEpisodes: 24,
    rating: 10,
    tags: ["fantasy", "romance", "magic"],
    reviewDate: "2024-01-12",
    excerpt: "A masterful blend of British folklore and modern magical storytelling.",
    stats: {
      story: 10,
      animation: 9,
      sound: 10,
      characters: 10,
      enjoyment: 10
    }
  },
  {
    title: {
      romaji: "Ookami to Koushinryou",
      english: "Spice and Wolf",
      japanese: "狼と香辛料"
    },
    cover: "https://cdn.myanimelist.net/images/anime/1787/134760.jpg",
    status: "completed",
    progress: 13,
    totalEpisodes: 13,
    rating: 10,
    tags: ["romance", "fantasy", "economics"],
    reviewDate: "2024-01-10",
    excerpt: "A unique blend of medieval economics and romance.",
    stats: {
      story: 10,
      animation: 8,
      sound: 9,
      characters: 10,
      enjoyment: 10
    }
  }
];