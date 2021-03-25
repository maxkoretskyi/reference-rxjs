import { interval } from 'rxjs';
import { map, switchAll, take } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'switchAll';

setUpDOM(operator);

const a = stream('a', 200, 3);
const b = stream('b', 200, 3);
const h = interval(1000).pipe(take(2), map(i => [a, b][i]));

h.pipe(switchAll()).subscribe(fullObserver('switchAll'));

