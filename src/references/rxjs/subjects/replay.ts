import { ReplaySubject, Subject } from 'rxjs';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'replaySubject';
setUpDOM(operator);

const a = stream('a', 200, 3);

const s = new ReplaySubject(2);
s.subscribe(fullObserver(operator));
s.subscribe(fullObserver(operator));

a.subscribe(s);
setTimeout(() => {
    s.subscribe(fullObserver(operator));
    a.subscribe(s);
}, 3000);

