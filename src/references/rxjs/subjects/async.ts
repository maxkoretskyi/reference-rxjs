import { AsyncSubject } from 'rxjs';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'AsyncSubject';
setUpDOM(operator);

const a = stream('a', 1000, 3);

// EXPLANATION for the logged values:
//
// `a-2` - cached latest value from the source for the 1st subscriber
// `a-2` - cached latest value from the source for the 2nd subscriber
// `a-2` - cached latest value from the source for the 3rd subscriber
// `COMPLETE` - complete notification from the source for the 1st subscriber
// `COMPLETE` - complete notification from the source for the 2nd subscriber
// `COMPLETE` - complete notification from the source for the 3rd subscriber
// `a-2` - cached latest value value for the 4th subscriber
// `COMPLETE` - cached complete notification for the 4th subscriber

const s = new AsyncSubject();

// add early subscriptions
s.subscribe(fullObserver(operator));
s.subscribe(fullObserver(operator));

// subscribe to the source observable
a.subscribe(s);

// add late subscriptions
setTimeout(() => s.subscribe(fullObserver(operator)), 2000);
setTimeout(() => s.subscribe(fullObserver(operator)), 5000);
