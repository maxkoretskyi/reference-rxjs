import { BehaviorSubject } from 'rxjs';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'behaviorSubject';
setUpDOM(operator);

const a = stream('a', 1000, 3);

const s = new BehaviorSubject(null);
s.subscribe(fullObserver(operator));
s.subscribe(fullObserver(operator));

a.subscribe(s);

setTimeout(() => {
    s.subscribe(fullObserver(operator));
}, 2000);

setTimeout(() => {
    debugger
    s.subscribe(fullObserver(operator));
    a.subscribe(s);
}, 5000);

