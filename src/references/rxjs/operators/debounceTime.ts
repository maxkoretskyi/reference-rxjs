import { from } from 'rxjs';
import { concatAll, debounceTime } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'debounceTime';

setUpDOM(operator);

// EXPLANATION FOR THE STREAM `a`
// 0 is emitted immediately and remembered,
// in the `a` stream, the next value `1` is emitted within 600ms, which is more than 500 for debounceTime
// so you can see 0 being passed down to the observer
// in the `b` stream, then next value `1` is emitted within 300ms, which is less than 500 for debounceTime
// so it's discarded and the timer is reset
// the same happens for the `1`,
// but for the value `2` the duration is 600ms, which is more than 500 for debounceTime
// so you can see 2 being passed down to the observer

// duration checked for     0    1    2    3    last value is always emitted
const a = stream('a', [0, 600, 600, 300, 800], 5); // 0, 1, 3, 4
const b = stream('b', [0, 300, 300, 600, 300], 5); // 2, 4

const debouncedA = a.pipe(debounceTime(500));
const debouncedB = b.pipe(debounceTime(500));

from([debouncedA, debouncedB]).pipe(concatAll()).subscribe(fullObserver(operator));

/*
const input = document.createElement('input');
document.body.appendChild(input);

fromEvent(input, 'input')
    .pipe(
        debounceTime(500),
        map((event: any) => event.target.value)
    ).subscribe(val => console.log(val));
    */
