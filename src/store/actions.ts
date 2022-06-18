import { HeroActions } from "./heroPage/heroSlice";
import { HeroesActions } from "./heroesPage/heroesSlice";
import { ComicActions } from "./comicPage/comicSlice";
import { ComicsActions } from "./comicsPage/comicsSlice";
import { AuthActions } from "./auth/authSlice";


const actions = {
    ...HeroActions,
    ...HeroesActions,
    ...ComicActions,
    ...ComicsActions,
    ...AuthActions,
};

export default actions;