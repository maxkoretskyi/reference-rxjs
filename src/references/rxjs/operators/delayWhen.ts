import { interval } from 'rxjs';
import { delayWhen } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'delayWhen';

setUpDOM(operator);

const a = stream('a', 200, 3);
a.pipe(
    delayWhen(event => interval(Math.random() * 5000)),
).subscribe(fullObserver(operator));
