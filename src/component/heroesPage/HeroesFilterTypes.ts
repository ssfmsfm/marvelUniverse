import HeroType from "../../types/HeroType";

export enum HeroesOrder {
    idAsc = "id",
    idDesc = "-id",
    nameAsc = "name",
    nameDesc = "-name",
}


export type SortFilters = {
    data: HeroType[]
    ordering: HeroesOrder
}

// export type InitialState = {
//     pageSize: string
//     page: number
//     heroesOrder: string
//     data: HeroType[]
//     currentPageData: HeroType[]
// }

export type HeroesFilterTypes = {
    name?: string,
    pageSize: number
    page: number
    ordering: HeroesOrder
}