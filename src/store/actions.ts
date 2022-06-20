import { HeroActions } from "./heroPage/heroSlice";
import { ComicActions } from "./comicPage/comicSlice";
import { ComicsActions } from "./comicsPage/comicsSlice";
import { AuthActions } from "./auth/authSlice";
import { HeroesActions } from "./heroesPage/heroesSlice";
import { HeroesFilterActions } from "./heroesPage/heroesFilterSlice";


const actions = {
    ...HeroActions,
    ...HeroesActions,
    ...HeroesFilterActions,
    ...ComicActions,
    ...ComicsActions,
    ...AuthActions,
};

export default actions;