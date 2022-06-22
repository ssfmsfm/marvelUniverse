import ComicType from "../../types/ComicType";


export enum ComicsOrder {
    titleAsc = "title",
    titleDesc = "-title",
    modiAsc = "modified",
    modiDesc = "-modified"
}


export type SortFilters = {
    data: ComicType[]
    ordering: ComicsOrder
}


export type ComicsFilterTypes = {
    page: number,
    limit: number,
    searchTitle?: string,
    ordering: ComicsOrder,
}