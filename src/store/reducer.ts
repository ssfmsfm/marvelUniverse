import { AuthReducer } from './auth/authSlice';
import { HeroReducer } from './heroPage/heroSlice';
import { HeroesReducer } from './heroesPage/heroesSlice';
import { HeroesFilterReducer } from './heroesPage/heroesFilterSlice';
import { ComicReducer } from './comicPage/comicSlice';
import { ComicsReducer } from './comicsPage/comicsSlice';
import { ComicsFilterReducer } from './comicsPage/comicsFilterSlice';
import { EventReducer } from './eventPage/eventSlice';
import { EventsReducer } from './eventsPage/eventsSlice';
import { EventsFilterReducer } from './eventsPage/eventsFilterSlice';
import { CreatorReducer } from './creatorPage/creatorSlice';
import { CreatorsReducer } from './creatorsPage/creatorsSlice';
import { CreatorsFilterReducer } from './creatorsPage/creatorsFilterSlice';

const reducer = {
    hero: HeroReducer,
    heroes: HeroesReducer,
    heroesFilter: HeroesFilterReducer,
    comic: ComicReducer,
    comics: ComicsReducer,
    comicsFilter: ComicsFilterReducer,
    event: EventReducer,
    events: EventsReducer,
    eventsFilter: EventsFilterReducer,
    creator: CreatorReducer,
    creators: CreatorsReducer,
    creatorsFilter: CreatorsFilterReducer,
    auth: AuthReducer,
};

export default reducer;