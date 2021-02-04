import { exhaustMap } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'exhaustMap';

setUpDOM(operator);

const h = stream('h', 100, ['a', 'b']);

h.pipe(
    exhaustMap((name) => {
        return stream(name, 200, 3);
    })
).subscribe(fullObserver(operator));
