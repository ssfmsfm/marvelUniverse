import HeroType from "../../types/HeroType";

export const getCurrentPageData = (arrayData: HeroType[], page: number, pageSize: number): HeroType[] => {
    // console.log(arrayData);
    return arrayData.slice((page - 1) * pageSize, page * pageSize);
};

export const getSortedData = (arrayData: HeroType[], order: string): HeroType[] => {
    switch (order) {
        case "id": {
            return arrayData.sort((a, b) => a.id - b.id);
        }
        case "-id": {
            return arrayData.sort((a, b) => b.id - a.id);
        }
        case "name": {
            // return arrayData.sort((a, b) => a.name.localeCompare(b.name));
            return arrayData.sort((a, b) => a.name.localeCompare(b.name));
        }
        case "-name": {
            return arrayData.sort((a, b) => b.name.localeCompare(a.name));
        }
        default:
            return arrayData;
    }
};