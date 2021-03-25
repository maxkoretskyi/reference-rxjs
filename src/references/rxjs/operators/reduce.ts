import { reduce } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'reduce';

setUpDOM(operator);

const a = stream('a', 200, 3);
a.pipe(reduce(accumulator, 0)).subscribe(fullObserver(operator));

function accumulator(result, v) {
    const number = Number(v.split('-').pop());
    return result + number;
}
