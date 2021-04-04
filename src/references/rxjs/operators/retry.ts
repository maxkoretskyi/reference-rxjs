import { map, retry } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'retry';

setUpDOM(operator);

const a = stream('a', 200, 5);

a.pipe(
    map(throwOnOne),
    retry(2)
).subscribe(fullObserver(operator));

function throwOnOne(v) {
    if (v === 'a-1') throw 'one!';
    return v;
}
