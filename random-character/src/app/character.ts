export interface Character {
    id: number;
    race: {
        id: number;
        name: string
    },
    attribute: {
        id: number;
        name: string
    },
    weapon: {
        id: number;
        name: string
    },
    armor: {
        id: number;
        name: string
    },
}