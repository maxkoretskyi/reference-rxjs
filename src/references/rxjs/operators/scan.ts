import { scan } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'scan';

setUpDOM(operator);

const a = stream('a', 200, 3);
a.pipe(scan(accumulator, 0)).subscribe(fullObserver(operator));

function accumulator(result, v) {
    const number = Number(v.split('-').pop());
    return result + number;
}
