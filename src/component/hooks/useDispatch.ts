import { AppDispatch } from "../../store/store";
import { useDispatch as useNativeDispatch } from "react-redux";


export const useDispatch = () => useNativeDispatch<AppDispatch>();