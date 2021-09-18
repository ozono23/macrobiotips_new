import { RecipeTime } from "../enums/recipe-time";
import { RecipeType } from "../enums/recipe-type";

export interface Recipe {
    title?:string;
    time?:RecipeTime;
    type?:RecipeType;
    people?:number;
}
