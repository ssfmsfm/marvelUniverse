import { TypedUseSelectorHook, useSelector as useNativeSelector} from 'react-redux';
import store, { RootState } from '../../store/store';


export const useSelector: TypedUseSelectorHook<RootState> = useNativeSelector;