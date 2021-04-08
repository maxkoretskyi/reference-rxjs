import { map } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'map';

setUpDOM(operator);

const a = stream('a', 200, 3);
a.pipe(map(transform)).subscribe(fullObserver(operator));

function transform(v) {
    return v.split('-').pop();
}
