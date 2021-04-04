import { Subject } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'exhaustMap';

setUpDOM(operator);

const h = new Subject();

setTimeout(() => h.next('a'), 200);
setTimeout(() => h.next('b'), 500);
setTimeout(() => h.next('c'), 3000);
setTimeout(() => h.complete(), 4000);

h.pipe(
    exhaustMap((name) => {
        return stream(name, 200, 3);
    })
).subscribe(fullObserver(operator));

