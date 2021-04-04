import { bufferTime } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'bufferTime';

setUpDOM(operator);

// EXPLANATION
// bufferTime flushes cache every 500ms
// stream `a` emits with the following intervals
// here's what values and their timings will be flushed
// time        500  1000  1500   2000
// intervals   100  +600        +1000 +100
// cached      [0]  [1]    []    [ 2,  3 ]
const a = stream('a', [100, 600, 1000, 100], 4);
const bufferTimeSpan = 500;

a.pipe(bufferTime(bufferTimeSpan)).subscribe(fullObserver(operator));

