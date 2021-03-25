import { concat, interval, merge, timer } from 'rxjs';
import { auditTime, filter, take, throttle, throttleTime } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'throttle';

setUpDOM(operator);

const defaultThrottleConfig = {leading: true, trailing: false};

// a-0 is leading in the first interval,
// a-1 is trailing in the first interval
// a-2 is leading in the second interval
const a = stream('a', 250, 3);

// a-0, a-2; trailing a-1 is skipped
a.pipe(throttle(() => interval(500), defaultThrottleConfig)).subscribe(fullObserver(operator));

// -------------------------------
// const bothLeadingAndTrailing = {leading: true, trailing: true};

// a-0 is leading in the first interval,
// a-1 is overridden by a-2 as trailing value in the first interval
// a-2 is trailing in the first interval
// a-3 is leading in the second interval
// const b = stream('a', 170, 4);

// a-0, a-2, a-3
// b.pipe(throttle(() => interval(500), bothLeadingAndTrailing)).subscribe(fullObserver(operator));

// const completeIn2Seconds = timer(2000).pipe(take(1), filter(() => false));
// const pipedB = merge(b, completeIn2Seconds).pipe(throttle(() => interval(500), bothLeadingAndTrailing));
// pipedB.subscribe(fullObserver(operator));

// --------------------------------
// const trailingOnly = {leading: false, trailing: true};

// a-0 is leading in the first interval,
// a-1 is trailing in the first interval
// a-2 is trailing in the second interval
// const c = stream('a', 250, 3);

// a-1, a-2; leading a-0 is skipped
// c.pipe(throttle(() => interval(500), trailingOnly)).subscribe(fullObserver(operator));
