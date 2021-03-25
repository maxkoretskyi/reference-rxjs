import { buffer } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'buffer';

setUpDOM(operator);

const a = stream('a', 500, 8);
const b = stream('b', [100, 500, 100, 1000], 4);
a.pipe(buffer(b)).subscribe(fullObserver(operator));
