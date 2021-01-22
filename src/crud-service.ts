/*
import { fromFetch } from 'rxjs/fetch';
import { exhaustMap, filter, map, publishReplay, switchMap, takeUntil, tap, withLatestFrom } from 'rxjs/operators';
import { merge, Subject } from 'rxjs';

export class CrudUsersService {
    constructor() {
        this.url = 'https://jsonplaceholder.typicode.com/posts';
        this.cached = false;
        this.clearCache$ = new Subject();

        this.setUpCache();
    }

    getItems(url, forceRefresh) {
        if (forceRefresh) {
            this.cached = false;
            // it would be great to reset subject in the `this.cache$` when refresh is forced,
            // otherwise *new* subscriptions get existing cached values
            // so we need a workaround that is filtering by `this.cached` value
            // https://stackoverflow.com/questions/51145664/resetting-replaysubject-in-rxjs-6
        }

        if (!this.cached) {
            this.serverRequest$.next(this.url || url);
        }

        return this.cache$.pipe(
            // this extra filter is needed so that *new* subscriptions don't synchronously
            // get existing cached values when subscribing with `forceRefresh`,
            // they should get a value when the request is made to the sever
            // and new data is set to the cache
            filter(() => this.cached),
            // map((items) => this.deepClone(items))
        );
    }

    getItem(id) {
        return this.cache$.pipe(map((items) => items.find(item => item.id === id)));
    }

    setItems(items) {
        this.setItems$.next(items);
    }

    updateItem(id, data) {
        const request = new Request(
            `https://jsonplaceholder.typicode.com/posts/${id}`,
            {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }
        );

        fromFetch(request).pipe(
            switchMap(response => {
                return response.json();
            }),
            withLatestFrom(this.cache$),
            map(([item, items]) => {
                // update the items array here using the updated item
                return items;
            })
        ).subscribe((items) => {
            this.setItems$.next(items)
        });
    }

    createItem() {
        // make request and call this.setItems()
        // see how this.updateItem is implemented
    }

    deleteItem() {
        // make request and call this.setItems()
        // see how this.updateItem is implemented
    }

    resetCache() {
        this.setUpCache();
    }

    setUpCache() {
        if (this.cache$) {
            // this destroys entire pipeline and existing subscriptions will complete
            // ideally it'd be great to simply reset the ReplaySubject
            this.clearCache$.next();
        }

        // setup cache pipeline
        this.setItems$ = new Subject();
        this.serverRequest$ = new Subject().pipe(
            /!* switchMap can be used instead *!/
            exhaustMap((url) => {
                return fromFetch(url).pipe(
                    switchMap(response => {
                        return response.json();
                    })
                )
            })
        );

        this.cache$ = merge(this.serverRequest$, this.setItems$).pipe(
            takeUntil(this.clearCache$),
            /!*scan((acc, items) => {
                // accumulation
                return items;
            }, []),*!/
            tap(() => {
                // state update
                this.cached = true;
            }),
            // multicast(() => new ReplaySubject(1))
            publishReplay(1)
        );

        this.cache$.connect();
    }

    deepClone() {
    }
}
*/
