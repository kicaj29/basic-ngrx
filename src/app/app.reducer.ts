import {ADD_ITEM, Item, REMOVE_ITEM} from "./app.actions";

const initState: Item[] = [];

export function appReducer(state = initState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, action.payload];
        case REMOVE_ITEM:
            const index =  state.indexOf(action.payload);
            return state.slice(0, index).concat(state.slice(index+1));
        default:
            return state;
    }
}

export const selectList = (state: {list: Item[]}) => state.list;