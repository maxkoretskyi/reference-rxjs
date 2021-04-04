import { filter } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'filter';

setUpDOM(operator);

const a = stream('a', 200, 6);

a.pipe(filter(onlyEven)).subscribe(fullObserver(operator));

function onlyEven(value) {
    const number = Number(value.split('-').pop());
    return number % 2 === 0;
}
