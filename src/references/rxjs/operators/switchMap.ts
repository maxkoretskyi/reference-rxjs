import { interval } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'switchMap';

setUpDOM(operator);

const h = interval(100).pipe(
    take(2),
    map(i => ['a', 'b'][i])
);

h.pipe(
    switchMap(name => {
        return stream(name, 200, 3);
    })
).subscribe(fullObserver(operator));
