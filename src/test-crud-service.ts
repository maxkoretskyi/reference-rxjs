/*
import { CrudUsersService } from './crud-service';

const url = 'https://api.mocki.io/v1/b043df5a';
const s = new CrudUsersService();

console.log('get cached data');
s.getItems(url).subscribe({
    next(items) {
        console.log('s1', items.length)
    }, complete() {
        console.log('subscription completed');
    }
});

// s.setItems([]);

console.log('get cached data');
s.getItems(url).subscribe((items) => console.log('s2', items.length));

// s.resetCache();

setTimeout(() => {
    console.log('setItems');
    s.setItems([1, 2, 3])
}, 2000);

setTimeout(() => {
    console.log('reload data from server');
    s.getItems(url, true).subscribe((items) => console.log('s3', items.length))
}, 3000);

setTimeout(() => {
    console.log('get cached data');
    s.getItems(url).subscribe((items) => console.log('s4', items.length))
}, 4000);

setTimeout(() => {
    console.log('get item');
    s.getItem(3).subscribe((item) => console.log('s5', item))
}, 5000);

setTimeout(() => {
    console.log('update item');
    s.updateItem(3, {title: 'AAA'});
}, 6000);
*/
