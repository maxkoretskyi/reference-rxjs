import { Subject } from 'rxjs';
import { exhaust } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'exhaust';

setUpDOM(operator);

const a = stream('a', 200, 3);
const b = stream('b', 200, 3);
const c = stream('c', 200, 3);

const h = new Subject();

setTimeout(() => h.next(a), 200);
setTimeout(() => h.next(b), 500);
setTimeout(() => h.next(c), 3000);
setTimeout(() => h.complete(), 4000);

h.pipe(exhaust()).subscribe(fullObserver(operator));
