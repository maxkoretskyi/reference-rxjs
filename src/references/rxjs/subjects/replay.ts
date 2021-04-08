import { ReplaySubject } from 'rxjs';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'replaySubject';
setUpDOM(operator);

const a = stream('a', 1000, 3);

// EXPLANATION for the logged values:
//
// `a-0` - new value from the source for the 1st subscriber
// `a-0` - new value from the source for the 2nd subscriber
// `a-1` - new value from the source for the 1st subscriber
// `a-1` - new value from the source for the 2nd subscriber
// `a-1` - replayed (cached) value for the 3rd subscriber
// `a-2` - new value from the source for the 1st subscriber
// `a-2` - new value from the source for the 2nd subscriber
// `a-2` - new value from the source for the 3rd subscriber
// `COMPLETE` - complete notification from the source for the 1st subscriber
// `COMPLETE` - complete notification from the source for the 2nd subscriber
// `COMPLETE` - complete notification from the source for the 3rd subscriber
// `a-2` - replayed (cached) value for the 4th subscriber
// `COMPLETE` - replayed (cached) complete notification for the 4th subscriber

const s = new ReplaySubject(1);

// add early subscriptions
s.subscribe(fullObserver(operator));
s.subscribe(fullObserver(operator));

// subscribe to the source observable
a.subscribe(s);

// add late subscriptions
setTimeout(() => s.subscribe(fullObserver(operator)), 2000);
setTimeout(() => s.subscribe(fullObserver(operator)), 5000);
