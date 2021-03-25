import { AsyncSubject } from 'rxjs';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'asyncSubject';
setUpDOM(operator);

const a = stream('a', 1000, 3);

const s = new AsyncSubject();
s.subscribe(fullObserver(operator));
s.subscribe(fullObserver(operator));

a.subscribe(s);

setTimeout(() => {
    debugger
    s.subscribe(fullObserver(operator));
    a.subscribe(s);
}, 5000);

