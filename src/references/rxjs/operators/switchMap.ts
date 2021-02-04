import { switchMap } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'switchMap';

setUpDOM(operator);

const h = stream('h', 100, ['a', 'b']);

h.pipe(
    switchMap((name) => {
        return stream(name, 200, 3);
    })
).subscribe(fullObserver(operator));