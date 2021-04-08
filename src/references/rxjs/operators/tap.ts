import { map, retry, tap } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'tap';

setUpDOM(operator);

const a = stream('a', 200, 3);
let errored = false;


// EXPLANATION
// we have the the `map` operator that throws an error once so that we can see
// it goes through the `error` callback of the `tap`
// we also have the `retry(1)` operator so that we can complete the sequence normally
a.pipe(
    map((v, index) => {
        if (index === 1 && !errored) {
            errored = true;
            throw new Error();
        }
        return v;
    }),
    tap({
        next(value) {
            log('VALUE through tap');
        },
        error(e) {
            log('ERROR through tap');
        },
        complete() {
            log('COMPLETE through tap');
        }
    }),
    retry(1)
).subscribe(fullObserver(operator));

function log(v) {
    const element = document.createElement('div');
    element.textContent = `[tap]:\t\t` + v;
    document.body.querySelector('pre').appendChild(element);
}

