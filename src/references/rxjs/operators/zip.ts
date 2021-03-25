import { zip } from 'rxjs';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'zip';

setUpDOM(operator);

const a = stream('a', 200, 3);
const b = stream('b', 500, 3);

zip(a, b).subscribe(fullObserver(operator));
