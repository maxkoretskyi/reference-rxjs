import { buffer } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'buffer';

setUpDOM(operator);

// EXPLANATION
// stream `a` emits every 500ms with the first value emitted immediately
// so here's what we'll have for the notifier timings
// 100 600 100 1000
// [0] [1] []  [2,3]
// you can also see that the although stream `a` has 8 values,
// `buffer` completes the stream once stream `b` completes
const a = stream('a', 500, 8);
const b = stream('b', [100, 600, 100, 1000], 4);

a.pipe(buffer(b)).subscribe(fullObserver(operator));
