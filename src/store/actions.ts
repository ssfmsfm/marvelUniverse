import { AuthActions } from "./auth/authSlice";
import { HeroActions } from "./heroPage/heroSlice";
import { HeroesActions } from "./heroesPage/heroesSlice";
import { HeroesFilterActions } from "./heroesPage/heroesFilterSlice";
import { ComicActions } from "./comicPage/comicSlice";
import { ComicsActions } from "./comicsPage/comicsSlice";
import { ComicsFilterActions } from "./comicsPage/comicsFilterSlice";
import { EventActions } from "./eventPage/eventSlice";
import { EventsActions } from "./eventsPage/eventsSlice";
import { EventsFilterActions } from "./eventsPage/eventsFilterSlice";
import { CreatorActions } from "./creatorPage/creatorSlice";
import { CreatorsActions } from "./creatorsPage/creatorsSlice";
import { CreatorsFilterActions } from "./creatorsPage/creatorsFilterSlice";


const actions = {
    ...HeroActions,
    ...HeroesActions,
    ...HeroesFilterActions,
    ...ComicActions,
    ...ComicsActions,
    ...ComicsFilterActions,
    ...EventActions,
    ...EventsActions,
    ...EventsFilterActions,
    ...CreatorActions,
    ...CreatorsActions,
    ...CreatorsFilterActions,
    ...AuthActions,
};

export default actions;