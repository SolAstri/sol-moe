import type { AnimeEntry } from '../data/anime';

export function calculateStats(animeList: AnimeEntry[]) {
  const stats = {
    watching: 0,
    completed: 0,
    planned: 0,
    onHold: 0,
    dropped: 0,
    totalEpisodes: 0
  };

  animeList.forEach(anime => {
    switch (anime.status) {
      case 'watching':
        stats.watching++;
        break;
      case 'completed':
        stats.completed++;
        break;
      case 'planned':
        stats.planned++;
        break;
      case 'on_hold':
        stats.onHold++;
        break;
      case 'dropped':
        stats.dropped++;
        break;
    }
    stats.totalEpisodes += anime.progress;
  });

  return stats;
}

export function getAllTags(animeList: AnimeEntry[]) {
  return [...new Set(animeList.flatMap(anime => anime.tags || []))];
}

export function getTagCounts(animeList: AnimeEntry[]) {
  return animeList.flatMap(anime => anime.tags || [])
    .reduce((acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
}