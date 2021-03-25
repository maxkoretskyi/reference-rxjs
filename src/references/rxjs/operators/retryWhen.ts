import { empty, EMPTY, interval, Observable, of, Subject, throwError, timer } from 'rxjs';
import { map, mergeMap, retryWhen, switchMap, take, takeWhile } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'retryWhen';

setUpDOM(operator);

const a = stream('a', 200, 5);
const b = stream('b', [5000], 1);

/*a.pipe(
    map(n => {
        if (n === 'a-1') {
            throw 'one!';
        }
        return n;
    }),
    retryWhen((errors) => {
        return errors.pipe(mergeMap((error) => {
            // this doesn't work -> I never get COMPLETE notification here
            debugger
            return EMPTY;
            // this works -> I get ERROR in an observer
            // return throwError('error from retryWhen');
        }));
    })
).subscribe({
    next(value) {
        console.log(value);
    },
    complete() {
        console.log('complete');
    },
    error() {
        console.log('error');
    }
});*/

let attempts = 0;

a.pipe(
    map(n => {
        if (n === 'a-1') {
            throw 'one!';
        }
        return n;
    }),
    retryWhen((errors) => {
        return interval(100).pipe(
            map(() => {
                if (attempts < 2) {
                    attempts++;

                    return 1;
                } else {
                    return 'complete';
                }
            }),
            takeWhile((value) => value !== 'complete')
        );

        /*return errors.pipe(
            map((error) => {
                if (attempts < 2) {
                    attempts++;

                    return 1;
                } else {
                    return 'complete';
                }
            }),
            takeWhile((value) => value !== 'complete')
        );*/
    })
).subscribe(fullObserver(operator));

