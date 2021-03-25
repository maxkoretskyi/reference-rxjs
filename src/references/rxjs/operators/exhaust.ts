import { from, interval, Subject } from 'rxjs';
import { exhaust, map } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'exhaust';

setUpDOM(operator);

const a = stream('a', 200, 3);
const b = stream('b', 200, 3);
const c = stream('c', 200, 3);
const h = stream('h', [500, 500, 3000], [a, b, c]);

const s = new Subject();

setTimeout(() => s.next(a), 200);
setTimeout(() => s.next(b), 500);
setTimeout(() => s.next(c), 3000);

s.pipe(exhaust()).subscribe(fullObserver(operator));

