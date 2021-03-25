import { combineLatest } from 'rxjs';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'combineLatest';

setUpDOM(operator);

const a = stream('a', 200, 3);
const b = stream('b', 500, 3);

combineLatest(a, b).subscribe(fullObserver(operator));
