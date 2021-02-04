import { concat, merge } from 'rxjs';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'merge';

setUpDOM(operator);

const a = stream('a', 200, 3);
const b = stream('b', 200, 3);

merge(a, b).subscribe(fullObserver(operator));
