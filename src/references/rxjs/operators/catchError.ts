import { catchError, map } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'catchError';

setUpDOM(operator);

const a = stream('a', 200, 5);
const b = stream('b', 200, 3);

// EXPLANATION
// emits a-0, then with a-1 the observable throws an error
// the callback is executed and the source observable is replaced with the stream `b`
// so the next values are b-0, b-1 and b-2
a.pipe(
    map(v => {
        if (v === 'a-1') throw 'one!';
        return v;
    }),
    catchError(() => b)
).subscribe(fullObserver(operator));
