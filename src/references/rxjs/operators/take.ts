import { take } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'takeUntil';

setUpDOM(operator);

const a = stream('a', 200, 10);

// only mirror 3 values
a.pipe(take(3)).subscribe(fullObserver(operator));
