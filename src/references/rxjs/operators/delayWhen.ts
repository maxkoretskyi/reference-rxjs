import { interval } from 'rxjs';
import { delayWhen } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'delayWhen';

setUpDOM(operator);

const a = stream('a', 200, 6);
a.pipe(
    // in the output you can see that values are outputted in the random order
    // determined by the duration observable created for each value separately
    delayWhen(() => interval(Math.random() * 3000))
).subscribe(fullObserver(operator));
