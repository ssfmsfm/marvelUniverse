
type ComicsByCreatorType = {
    resourceURI: string,
    name: string,
}

type CreatorType = {
    id: number,
    fullName: string,
    comics: {
        items: ComicsByCreatorType[]
    },
    thumbnail: {
        path: string,
        extension: string,
    },
}

export default CreatorType;