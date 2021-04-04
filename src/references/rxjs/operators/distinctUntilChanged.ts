import { distinctUntilChanged } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'distinctUntilChanged';

setUpDOM(operator);

// number 2 will appear twice, first at the index 1,
// and the second at the index 4
// the 2 at the index 2 will be ignored
const a = stream('a', [100, 100, 100, 100, 100, 100], [1, 2, 2, 3, 2, 5]);

// shows an example of using comparison function
// that has the default compare behavior
a.pipe(distinctUntilChanged(defaultCompare)).subscribe(fullObserver(operator));

function defaultCompare(a, b) {
    return a === b;
}
