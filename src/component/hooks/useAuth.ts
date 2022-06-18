import { useSelector } from "./useSelector";


type PropsType = {
    isAuth: boolean,
    email: string | null,
    id: string,
    refresh: string | null,
}

const useAuth = (): PropsType => {

    const { email, id, refresh } = useSelector(state => state.auth.profile);
    return {
        isAuth: !!email,
        email,
        id,
        refresh,
    };
}

export default useAuth;