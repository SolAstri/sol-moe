// utils/anime.ts
import type { AnimeEntry } from '../data/anime';

export function getRelatedAnime(anime: AnimeEntry, allAnime: AnimeEntry[], limit = 3): AnimeEntry[] {
    return allAnime
        .filter(a =>
            a.title.english !== anime.title.english &&
            a.tags?.some(tag => anime.tags?.includes(tag))
        )
        .sort((a, b) => (b.rating || 0) - (a.rating || 0))
        .slice(0, limit);
}

export function getSeasonalAnime(year: number, season: string, allAnime: AnimeEntry[]): AnimeEntry[] {
    return allAnime.filter(anime =>
        anime.season?.year === year &&
        anime.season?.season === season
    );
}

export function formatAnimeSlug(title: string): string {
    return title.toLowerCase().replace(/ /g, '-');
}

export function getProgressPercentage(progress: number, total: number): number {
    return (progress / total) * 100;
}

export function getAnimeBySlug(slug: string, allAnime: AnimeEntry[]): AnimeEntry | undefined {
    return allAnime.find(anime => formatAnimeSlug(anime.title.english) === slug);
}