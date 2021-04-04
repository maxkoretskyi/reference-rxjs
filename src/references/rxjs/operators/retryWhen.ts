import { map, mapTo, retryWhen, scan, takeWhile } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'retryWhen';

setUpDOM(operator);

const a = stream('a', 200, 5);

a.pipe(
    map(throwOnOne),
    retryWhen((errors) => {
        // although most implementations return `error` stream and pipe to it,
        // because it's needed to get access to the future errors
        // you can return any observable from the callback, e.g. interval()
        return errors.pipe(
            mapTo((error) => 1),
            scan((acc, value, index) => index, 0),

            // retry 2 times and then send `complete`
            // since`takeWhile` completes when predicate is false
            // if we need to send the error, a simple `map` can be added above to throw an error
            takeWhile((value) => value < 2)
        );
    })
).subscribe(fullObserver(operator));


function throwOnOne(v) {
    if (v === 'a-1') throw 'one!';
    return v;
}


