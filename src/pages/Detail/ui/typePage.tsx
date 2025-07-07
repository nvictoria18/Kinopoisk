import MovieBanner from "@/shared/assets/detail/movies-banner.png";
import MoviePoster from "@/shared/assets/detail/movies-poster.png";
import TVShowsBanner from "@/shared/assets/detail/tv-shows-banner.png";
import TVShowsPoster from "@/shared/assets/detail/tv-shows-poster.png";

export const typePage = {
    movies: {
        poster: MoviePoster,
        banner: MovieBanner,
        name: 'Avengers: Endgame',
        quote: 'Part of the journey is the end.',
        description: `After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.`,
        marks: 8.3,
        type: ['Type', 'Movie'],
        release: ['Release Date:', '2019-04-24'],
        time: ['Run time', '181 min'],
        genres: ['Genres', 'Adventure,  Science Fiction, Action']
    },
    "tv-shows": {
        poster: TVShowsPoster,
        banner: TVShowsBanner,
        name: 'Lost In Space',
        quote: 'Have You Seen Our Robot?',
        description: `The mission to save Scarecrow takes an unexpected turn, throwing the Resolute into chaos. Judy hatches a plan to get a ship to Alpha Centauri.`,
        marks: 8.1,
        type: ['Type', 'TV Show'],
        status: ['Status', 'Returning Series'],
        first: ['First air date', '2018-04-13'],
        last: ['Last air date', '2019-04-24'],
        seasons: ['No. of Seasons', 2],
        episodes: ['No. of episodes', 20],
        time: ['Episode run time', '56 min'],
        genres: ['Genres', 'Action & Adventure, Sci-Fi & Fantasy, Drama']
    },
}

