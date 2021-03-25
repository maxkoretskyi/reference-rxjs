import { interval } from 'rxjs';
import { map, mergeAll, take } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'mergeAll';

setUpDOM(operator);

const a = stream('a', 200, 3);
const b = stream('b', 200, 3);
const h = interval(100).pipe(take(2), map(i => [a, b][i]));

h.pipe(mergeAll()).subscribe(fullObserver(operator));

