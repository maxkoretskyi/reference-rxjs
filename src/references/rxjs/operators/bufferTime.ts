import { bufferTime } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'bufferTime';

setUpDOM(operator);

const a = stream('a', 200, 20);
const bufferCreationInterval = 1000;
const bufferTimeSpan = 500;

a.pipe(bufferTime(bufferTimeSpan, bufferCreationInterval)).subscribe(fullObserver(operator));
