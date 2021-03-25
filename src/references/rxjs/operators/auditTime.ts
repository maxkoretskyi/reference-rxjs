import { concat, merge, timer } from 'rxjs';
import { auditTime, take } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'auditTime';

setUpDOM(operator);

// EXPLANATION
// a-0 triggers scheduling of the first interval,
// a-1 goes into the first interval and overrides a-0
// a-2 triggers scheduling of the first interval,
// but discarded because the source observable completes before the interval ends
const a = stream('a', 250, 3);
const pipedA = a.pipe(auditTime(500));

// if source observable never completes or completes later than the interval ends,
// we will see it will also emit a-2 from the second interval
const b = stream('b', 250, 3);
const completeIn2Seconds = timer(2000).pipe(take(1));
const pipedB = merge(b, completeIn2Seconds).pipe(auditTime(500));

concat(pipedA, pipedB).subscribe(fullObserver(operator));


