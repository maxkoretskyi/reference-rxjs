import { race } from 'rxjs';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'race';

setUpDOM(operator);

const a = stream('a', 200, 3);
const b = stream('b', 500, 3);

race(a, b).subscribe(fullObserver(operator));
