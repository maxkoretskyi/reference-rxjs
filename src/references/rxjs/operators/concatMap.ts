import { interval } from 'rxjs';
import { concatMap, map, take } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'concatMap';

setUpDOM(operator);

const h = interval(100).pipe(
    take(2),
    map(i => ['a', 'b'][i])
);

h.pipe(
    concatMap(name => {
        return stream(name, 200, 3);
    })
).subscribe(fullObserver(operator));
