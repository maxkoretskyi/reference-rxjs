import { concatMap, mergeMap } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'concatMap';

setUpDOM(operator);

const h = stream('h', 100, ['a', 'b']);

h.pipe(
    concatMap((name) => {
        return stream(name, 200, 3);
    })
).subscribe(fullObserver(operator));
