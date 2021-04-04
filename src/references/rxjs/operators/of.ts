import { concat, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { fullObserver, setUpDOM } from '../utils';

const operator = 'of';

setUpDOM(operator);

const array = ['array-1', 'array-2', 'array-3'];
const promise = Promise.resolve('promise-1');
const iterable = iterator();

concat(
    of(array),
    of(iterable),
    of(promise)
).pipe(
    map((value) => {
        if (value instanceof Array) return 'Array';
        if (value instanceof Promise) return 'Promise';
        if (typeof value[Symbol.iterator] === 'function') return 'Iterable';
    })
).subscribe(fullObserver(operator));

function* iterator() {
    const values = ['iterator-1', 'iterator-2', 'iterator-3'];
    for (let i = 0; i < values.length; i++) {
        yield values[i];
    }
}
