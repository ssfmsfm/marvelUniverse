import HeroType from "../../types/HeroType";


export enum HeroesOrder {
    nameAsc = "name",
    nameDesc = "-name",
    modiAsc = "modified",
    modiDesc = "-modified"
}


export type SortFilters = {
    data: HeroType[]
    ordering: HeroesOrder
}


export type HeroesFilterTypes = {
    page: number,
    limit: number,
    searchName?: string,
    ordering: HeroesOrder,
}