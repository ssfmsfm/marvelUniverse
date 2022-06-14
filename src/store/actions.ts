import { HeroActions } from "./heroPage/heroSlice";
import { HeroesActions } from "./heroesPage/heroesSlice";
import { ComicActions } from "./comicPage/comicSlice";
import { ComicsActions } from "./comicsPage/comicsSlice";


const actions = {
    ...HeroActions,
    ...HeroesActions,
    ...ComicActions,
    ...ComicsActions,
};

export default actions;