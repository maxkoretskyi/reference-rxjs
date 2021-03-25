import { of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'catchError';

setUpDOM(operator);

// case 1 - return observable to subscribe to from a callback
// (the function gets current observable as param)
// case 2 - throw an error

const a = stream('a', 200, 5);
const b = stream('b', 200, 3);

a.pipe(
    map(n => {
        if (n === 'a-1') {
            throw 'one!';
        }
        return n;
    }),
    catchError(() => b)
).subscribe(fullObserver(operator));
