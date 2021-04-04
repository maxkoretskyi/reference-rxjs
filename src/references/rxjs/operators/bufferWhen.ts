import { interval } from 'rxjs';
import { bufferWhen } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'bufferWhen';

setUpDOM(operator);

// EXPLANATION
// stream `a` emits every 500ms with the first value emitted immediately
// so here's what we'll have for the notifier timings
// 100 600 100 1000
// [0] [1] []  [2,3]
// you can also see that the although stream `a` has 8 values,
// `buffer` completes the stream once stream `b` completes
const a = stream('a', 500, 4);
const delays = [100, 600, 100, 1000];
let index = 0;

// when new value arrives if there's no buffer
// execute the function and get a closing Observable
// once this observable emits, close the buffer, pass the value, unsubscribe
a.pipe(bufferWhen(() => interval(delays[index++]))).subscribe(fullObserver(operator));

