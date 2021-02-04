import { mergeAll } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'mergeAll';

setUpDOM(operator);

const a = stream('a', 200, 3);
const b = stream('b', 200, 3);
const h = stream('h', 100, [a, b]);

h.pipe(mergeAll()).subscribe(fullObserver(operator));

