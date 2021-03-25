import { buffer, bufferWhen } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'bufferWhen';

setUpDOM(operator);

const a = stream('a', 200, 8);
const b = stream('b', [100, 500, 100, 1000], 4);

// when new value arrives if there's no buffer
// execute the function and get a closing Observable
// once this observable emits, close the buffer, pass the value, unsubscribe
a.pipe(bufferWhen(() => {
    return b;
})).subscribe(fullObserver(operator));
