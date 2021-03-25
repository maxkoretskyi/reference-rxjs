import { throttleTime } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'throttleTime';

setUpDOM(operator);

const defaultThrottleConfig = {leading: true, trailing: false};

// a-0 is leading in the first interval,
// a-1 is trailing in the first interval
// a-2 is leading in the second interval
const a = stream('a', 250, 3);

// a-0, a-2; trailing a-1 is skipped
a.pipe(throttleTime(500, undefined, defaultThrottleConfig)).subscribe(fullObserver(operator));

// -------------------------------
//const bothLeadingAndTrailing = {leading: true, trailing: true};

// a-0 is leading in the first interval,
// a-1 is overridden by a-2 as trailing value in the first interval
// a-2 is trailing in the first interval
// a-3 is leading in the second interval
//const b = stream('a', 170, 4);

// a-0, a-2, a-3
//b.pipe(throttleTime(500, undefined, bothLeadingAndTrailing)).subscribe(fullObserver(operator));

// ---------------------------------
//const trailingOnly = {leading: false, trailing: true};

// a-0 is leading in the first interval,
// a-1 is trailing in the first interval
// a-2 is trailing in the second interval
//const c = stream('a', 250, 3);

// a-1, a-2; leading a-0 is skipped
//c.pipe(throttleTime(500, undefined, trailingOnly)).subscribe(fullObserver(operator));
