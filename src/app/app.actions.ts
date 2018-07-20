export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const GET_ITEMS = "GET_ITEMS";

export interface Item {
    title: string;
    completed: boolean;
}

export  class AddItem {
    readonly type =  ADD_ITEM;

    constructor(public payload: Item){

    }
}

export  class RemoveItem {
    readonly type =  REMOVE_ITEM;

    constructor(public payload: Item){

    }
}

export  class GetItems {
    readonly type =  GET_ITEMS;
}