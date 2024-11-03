import type { AnimeEntry } from './anime';

export interface Post {
  slug: string;
  title: string;
  date: string;
  type: 'analysis' | 'review';
  tags: string[];
  excerpt: string;
  content: string;
  readingTime?: string;
  heroImage?: string;
  anime?: AnimeEntry;
  stats?: {
    story: number;
    animation: number;
    sound: number;
    characters: number;
    enjoyment: number;
  };
  pros?: string[];
  cons?: string[];
  characters?: {
    name: string;
    role: string;
    image: string;
    description: string;
    traits?: string[];
  }[];
  quotes?: {
    text: string;
    character: string;
    episode?: number;
    context?: string;
  }[];
}

export const posts: Post[] = [
  {
    slug: 'ancient-magus-bride',
    title: "The Ancient Magus' Bride: A Masterful Blend of Magic and Humanity",
    date: "2024-01-12",
    type: 'review',
    tags: ["fantasy", "romance", "magic"],
    excerpt: "A masterful blend of British folklore and modern magical storytelling that creates a uniquely enchanting atmosphere.",
    heroImage: "https://cdn.myanimelist.net/images/anime/1140/124500.jpg",
    content: `# The Ancient Magus' Bride Review

The Ancient Magus' Bride represents a masterful fusion of British folklore and contemporary magical storytelling. Set against the backdrop of rural England, the series weaves together elements of traditional fairy tales with modern narrative sensibilities, creating something both timeless and fresh.

## Visual Excellence

The animation quality consistently impresses, particularly in its representation of magical elements. The way magic manifests - through intricate glowing sigils and flowing natural phenomena - creates a sense of wonder while maintaining internal consistency. The attention to detail in both character animation and background art brings the mystical England setting to vivid life.

## Thematic Depth

At its core, the series explores themes of belonging, growth, and the nature of humanity. Through Chise's journey from a lost soul to a confident apprentice, we see a nuanced examination of healing from trauma and finding one's place in the world. The relationship between Chise and Elias, while unconventional, serves as a fascinating lens through which to explore these themes.`,
    anime: {
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
      tags: ["fantasy", "romance", "magic"]
    },
    stats: {
      story: 10,
      animation: 9,
      sound: 10,
      characters: 10,
      enjoyment: 10
    },
    pros: [
      "Exceptional world-building",
      "Beautiful animation",
      "Deep thematic exploration",
      "Strong character development"
    ],
    cons: [
      "Pacing can be slow at times",
      "Some folklore references may be obscure"
    ],
    characters: [
      {
        name: "Chise Hatori",
        role: "Protagonist",
        image: "https://cdn.myanimelist.net/images/characters/14/349591.jpg",
        description: "A young mage in training with a unique connection to magic.",
        traits: ["determined", "kind", "resilient"]
      },
      {
        name: "Elias Ainsworth",
        role: "Deuteragonist",
        image: "https://cdn.myanimelist.net/images/characters/8/349590.jpg",
        description: "A powerful and mysterious mage who takes Chise as his apprentice.",
        traits: ["mysterious", "protective", "learning humanity"]
      }
    ],
    quotes: [
      {
        text: "You can't save everyone. But that doesn't mean you stop trying.",
        character: "Chise Hatori",
        episode: 8,
        context: "Speaking about her growing understanding of magic and its limits"
      }
    ]
  },
  {
    slug: 'time-travel-in-anime',
    title: "The Evolution of Time Travel in Anime",
    date: "2024-01-15",
    type: 'analysis',
    tags: ["analysis", "sci-fi", "steins-gate"],
    excerpt: "From Steins;Gate to The Girl Who Leapt Through Time, exploring how anime handles temporal mechanics and their narrative implications.",
    heroImage: "https://cdn.myanimelist.net/images/anime/1935/127974.jpg",
    content: `# The Evolution of Time Travel in Anime

Time travel has been a fascinating narrative device in anime, evolving from simple plot mechanics to complex explorations of causality and human nature. This evolution is particularly evident when examining works like Steins;Gate, which revolutionized how anime approaches temporal mechanics.

## The Science of Storytelling

What sets Steins;Gate apart is its meticulous attention to the rules of its time travel mechanics. Unlike earlier works that often used time travel as a convenient plot device, Steins;Gate builds its entire narrative around the consequences and implications of changing the past.

### Key Elements that Define Modern Time Travel Narratives

1. **Butterfly Effect Exploration**
   - Detailed cause-and-effect chains
   - Emotional weight of changes
   - Ripple effects across timelines

2. **Character-Driven Consequences**
   - Personal stakes in temporal changes
   - Psychological impact of time travel
   - Memory retention and divergence

## Technical Implementation

The way anime visualizes time travel has also evolved significantly:

\`\`\`
Timeline Visualization Techniques:
- Visual distortion effects
- Color grading shifts
- Sound design changes
- Memory overlay effects
\`\`\`

## Impact on the Medium

This evolution has influenced how other series approach complex narrative devices, leading to more sophisticated storytelling across the medium.

### Notable Examples:

- The Girl Who Leapt Through Time (2006)
- Steins;Gate (2011)
- Re:Zero (2016)
- Vivy: Fluorite Eye's Song (2021)

## Looking Forward

As anime continues to evolve, we're seeing even more innovative approaches to time travel narratives, with each new series building upon the foundation laid by its predecessors.`,
    anime: {
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
      tags: ["sci-fi", "thriller", "time-travel"]
    },
    stats: {
      story: 10,
      animation: 9,
      sound: 9,
      characters: 10,
      enjoyment: 10
    },
    quotes: [
      {
        text: "The universe has a beginning, but no end. — Infinite. Stars, too, have their own beginnings, but their own power results in their destruction. — Finite.",
        character: "Okabe Rintarou",
        episode: 1,
        context: "Opening monologue reflecting on the nature of time and causality"
      }
    ]
  }
];