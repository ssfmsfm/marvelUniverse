import { ComicReducer } from './comicPage/comicSlice';
import { ComicsReducer } from './comicsPage/comicsSlice';
import { HeroesReducer } from './heroesPage/heroesSlice';
import { HeroReducer } from './heroPage/heroSlice';

const reducer = {
    hero: HeroReducer,
    heroes: HeroesReducer,
    comic: ComicReducer,
    comics: ComicsReducer,
};

export default reducer;