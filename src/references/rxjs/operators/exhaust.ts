import { exhaust } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'exhaust';

setUpDOM(operator);

const a = stream('a', 200, 3);
const b = stream('b', 200, 3);
const h = stream('h', 1000, [a, b]);

h.pipe(exhaust()).subscribe(fullObserver(operator));

