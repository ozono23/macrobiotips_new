export enum RecipeTime {
    Breakfast = 1,
    Lunch = 2,
    Snack = 3,
    Dinner = 4
}

export namespace RecipeTime {
    export function getList(): any {
        return Object.values(RecipeTime).filter(val => !isNaN(Number(val)));
    }
}