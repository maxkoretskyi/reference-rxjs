// plain callback
import { fromEvent, Observable } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { fromPromise } from 'rxjs/internal-compatibility';
import { mergeMap, switchMap } from 'rxjs/operators';

/*// callback
document.addEventListener('keydown', () => {
    // promise
    fetch('https://api.mocki.io/v1/b043df5a').then((response) => {
        response.json().then((data) => {
            // update state
        });
    });
});

const producer = observer => {
    // Create an event handler which sends data to the observer
    let handler = event => observer.next(event);

    // Attach the event handler
    document.addEventListener('keydown', handler, true);

    // Return a cleanup function which will cancel the event stream
    return () => {
        // Detach the event handler from the element
        document.removeEventListener('keydown', handler, true);
    };
};

const events = new Observable(producer);
events.subscribe(() => console.log('keydown event occurred'));

/!*
let subscription = clicks.subscribe({
    next(val) { console.log('click occurred') },
    error(err) { console.log("Received an error: " + err) },
    complete() { console.log("Stream complete") },
});*!/

// const clicks = fromEvent(document, 'keydown');


const data = new Observable(observer => {
    // Create an event handler which sends data to the observer
    let handler = event => observer.next(event);

    // Attach the event handler
    fetch('https://api.mocki.io/v1/b043df5a').then((response) => {
        response.json().then(handler);
    });

    // Return a cleanup function which will cancel the event stream
    return () => {
        // there's nothing to cleanup
    };
});*/


/*
data.subscribe((data) => {
    debugger
    console.log(data);
});
*/

const clicks = fromEvent(document, 'click');
const request = fromFetch('https://api.mocki.io/v1/b043df5a');

function operator(source) {
    return new Observable(observer => {
        source.subscribe(() => {
            request.subscribe((response) => {
                response.json().then((data) => {
                    observer.next(data);
                });
            });
        });
    });
}

clicks.pipe(
    mergeMap(() => request.pipe(
        switchMap((response) => fromPromise(response.json())))
    )
).subscribe((data) => console.log(data));

// clicks.pipe(operator).subscribe((data) => console.log(data));
