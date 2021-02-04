import { concat } from 'rxjs';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'concat';

setUpDOM(operator);

const a = stream('a', 200, 3);
const b = stream('b', 200, 3);

concat(a, b).subscribe(fullObserver(operator));
