import { useState, useEffect } from "react";
import axios from "axios";
import HeroType from "../types/HeroType";

//"https://api.itbook.store/1.0/new"

export const useHeroes = (URL: string) => {
    const [status, setStatus] = useState({
        heroes: [] as HeroType[],
        loading: false,
        error: false,
    });

    const getHeroes = async () => {
        setStatus({
            ...status,
            loading: true,
            error: false,
        });

        await new Promise((resolve) => {
            setTimeout(() => {
                resolve(1);
            }, 100);
        });

        try {
            const response = await axios.get(URL);
            console.log(response.data.results)
            setStatus({
                // ...status,
                heroes: response.data.results,
                loading: false,
                error: false
            });
        } catch (e: any) {
            setStatus({
                ...status,
                error: true,
                loading: false,
            });
        }
    };

    useEffect(() => {
        getHeroes();
    }, []);

    return { ...status };
};
