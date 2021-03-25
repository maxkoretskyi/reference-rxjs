import { forkJoin } from 'rxjs';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'forkJoin';

setUpDOM(operator);

const a = stream('a', 200, 3);
const b = stream('b', 500, 3);

forkJoin(a, b).subscribe(fullObserver(operator));

