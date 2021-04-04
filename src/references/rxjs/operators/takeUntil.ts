import { timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'takeUntil';

setUpDOM(operator);

const a = stream('a', 200, 10);
const notifier = timer(1000);

// stop emitting values in 1s
a.pipe(takeUntil(notifier)).subscribe(fullObserver(operator));
