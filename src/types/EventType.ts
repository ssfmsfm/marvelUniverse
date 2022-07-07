
type EventType = {
    id: number,
    title: string,
    description?: string,
    thumbnail: {
        path: string,
        extension: string,
    },
}

export default EventType;