import { withLatestFrom } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'withLatestFrom';

setUpDOM(operator);

const a = stream('a', 500, 3);
const b = stream('b', 2000, 3);

b.pipe(withLatestFrom(a)).subscribe(fullObserver(operator));
