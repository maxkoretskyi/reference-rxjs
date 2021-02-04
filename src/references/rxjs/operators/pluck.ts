import { pluck } from 'rxjs/operators';
import { fullObserver, setUpDOM, stream } from '../utils';

const operator = 'pluck';

setUpDOM(operator);

const values = [
    {stream: 'a', index: 0},
    {stream: 'a', index: 1},
    {stream: 'a', index: 2}
];

const a = stream('a', 200, values);
a.pipe(pluck('index')).subscribe(fullObserver(operator));
