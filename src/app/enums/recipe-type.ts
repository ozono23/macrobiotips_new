export enum RecipeType {
    Starter = 1,
    MainCourse = 2,
    Dessert = 3
}

export namespace RecipeType {
    export function getList(): any {
        return Object.values(RecipeType).filter(val => !isNaN(Number(val)));
    }
}