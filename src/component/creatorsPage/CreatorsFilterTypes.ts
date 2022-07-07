import CreatorType from "../../types/CreatorType";


export enum CreatorsOrder {
    nameAsc = "firstName",
    nameDesc = "-firstName",
    modiAsc = "modified",
    modiDesc = "-modified"
}


export type SortFilters = {
    data: CreatorType[]
    ordering: CreatorsOrder
}


export type CreatorsFilterTypes = {
    page: number,
    limit: number,
    searchName?: string,
    ordering: CreatorsOrder,
}