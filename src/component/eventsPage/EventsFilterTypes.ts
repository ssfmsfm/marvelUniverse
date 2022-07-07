import EventType from "../../types/EventType";


export enum EventsOrder {
    nameAsc = "name",
    nameDesc = "-name",
    modiAsc = "modified",
    modiDesc = "-modified"
}


export type SortFilters = {
    data: EventType[]
    ordering: EventsOrder
}


export type EventsFilterTypes = {
    page: number,
    limit: number,
    searchName?: string,
    ordering: EventsOrder,
}