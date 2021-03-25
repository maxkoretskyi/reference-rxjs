import { concat, from, fromEvent, interval } from 'rxjs';
import { concatAll, debounce, debounceTime, map } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'debounceTime';

setUpDOM(operator);

//                         0    1    2    3    last value is always emitted
const a = stream('a', [0, 600, 600, 300, 800], 5); // 0, 1, 3, 4
const b = stream('b', [0, 300, 300, 600, 300], 5); // 2, 4
a.pipe(debounce(() => interval(500))).subscribe(fullObserver(operator));


const inputElement = document.createElement('input');
document.body.appendChild(inputElement);

fromEvent(inputElement, 'input')
    .pipe(
        debounce(() => interval(500)),
        map((event: any) => event.target.value)
    ).subscribe(val => console.log(val));

