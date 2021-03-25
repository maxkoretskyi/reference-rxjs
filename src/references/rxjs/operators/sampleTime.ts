import { concat, merge, timer } from 'rxjs';
import { filter, sampleTime, take } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'sampleTime';

setUpDOM(operator);

const a = stream('a', 250, 3);

// EXPLANATION
// a-0 goes into the first interval,,
// a-1 goes into the first interval and overrides a-0
// a-2 goes into the second interval,
// but discarded because the source observable completes before the interval ends
const pipedA = a.pipe(sampleTime(500));

// if source observable never completes or completes later than the interval ends,
// we will see it will also emit a-2 from the second interval
const b = stream('b', 250, 3);
const completeIn2Seconds = timer(2000).pipe(take(1), filter(() => false));
const pipedB = merge(b, completeIn2Seconds).pipe(sampleTime(500));

concat(pipedA, pipedB).subscribe(fullObserver(operator));
