import { delay, tap } from 'rxjs/operators';
import { fullObserver, log, setUpDOM, stream } from '../utils';

const operator = 'delayWhen';

setUpDOM(operator);

const a = stream('a', 200, 3);
a.pipe(delay(300)).subscribe(fullObserver(operator));
