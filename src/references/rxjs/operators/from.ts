import { concat, from } from 'rxjs';
import { fullObserver, setUpDOM } from '../utils';

const operator = 'from';

setUpDOM(operator);

const array = ['array-1', 'array-2', 'array-3'];
const promise = Promise.resolve('promise-1');
const iterable = iterator();

concat(
    from(array),
    from(iterable),
    from(promise)
).subscribe(fullObserver(operator));

function* iterator() {
    const values = ['iterator-1', 'iterator-2', 'iterator-3'];
    for (let i = 0; i < values.length; i++) {
        yield values[i];
    }
}
