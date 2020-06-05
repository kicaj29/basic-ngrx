import {ADD_ITEM, Item, REMOVE_ITEM} from "./app.actions";

const initState: Item[] = [];

export function appReducer(state = initState, action) {
    switch (action.type) {
        case ADD_ITEM:
            debugger;
            let newState = [...state, action.payload];
            debugger;
            return newState;
        case REMOVE_ITEM:
            debugger;
            const index =  state.indexOf(action.payload);
            return state.slice(0, index).concat(state.slice(index+1));
        default:
            return state;
    }
}

export const selectList = (state: {list: Item[]}) => {
    debugger;
    /*let i = {
        title: 'default item',
        completed: true
    };
    state.list.push(i);*/
    return state.list;
};
