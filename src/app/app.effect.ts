import {Actions, Effect, ofType} from "@ngrx/effects";
import {GET_ITEMS} from "./app.actions";
import {map, exhaustMap, tap} from "rxjs/operators";

export class AppEffect {

    @Effect()
    listEffect = this.actions$
        .pipe(
            ofType(GET_ITEMS),
            tap( action => console.log(action))
    );

    constructor(private actions$: Actions){

    }
}