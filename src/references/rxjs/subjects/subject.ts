import { Subject } from 'rxjs';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'subject';
setUpDOM(operator);

const a = stream('a', 200, 3);

const s = new Subject();
s.subscribe(fullObserver(operator));
s.subscribe(fullObserver(operator));

// if (stopped.true) ignore values
// if (stopped.true) immediately completes all new observers
// on `closed` https://cartant.medium.com/rxjs-closed-subjects-1b6f76c1b63c

/*
The closed property indicates whether or not the subscription has been unsubscribed —
either manually or automatically (if the observable completes or errors).
*/

a.subscribe(s);
setTimeout(() => {
    debugger
    s.unsubscribe();
    s.subscribe(fullObserver(operator));
    a.subscribe(s);
    // s.subscribe(fullObserver(operator));
}, 3000);

