import { takeWhile } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'takeWhile';

setUpDOM(operator);

const a = stream('a', 200, 5);
a.pipe(takeWhile((val) => val !== 'a-2')).subscribe(fullObserver(operator));
