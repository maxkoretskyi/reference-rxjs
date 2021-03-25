// import './test-crud-service';
// import './memory-profiling';


// -------------------- rxjs ----------------------- //
// import './references/rxjs/operators/map';
// import './references/rxjs/operators/scan';
// import './references/rxjs/operators/reduce';
// import './references/rxjs/operators/pluck';
// import './references/rxjs/operators/mergeAll';
// import './references/rxjs/operators/concatAll';
// import './references/rxjs/operators/concat';
// import './references/rxjs/operators/switchAll';
// import './references/rxjs/operators/exhaust';
// import './references/rxjs/operators/combineLatest';
// import './references/rxjs/operators/zip';
// import './references/rxjs/operators/forkJoin';
import './references/rxjs/operators/withLatestFrom';
// import './references/rxjs/operators/mergeMap';
// import './references/rxjs/operators/merge';
// import './references/rxjs/operators/concatMap';
// import './references/rxjs/operators/switchMap';
// import './references/rxjs/operators/race';
// import './references/rxjs/operators/exhaustMap';
// import './references/rxjs/operators/debounce';
// import './references/rxjs/operators/debounceTime';
// import './references/rxjs/operators/throttleTime';
// import './references/rxjs/operators/throttle';
// import './references/rxjs/operators/sampleTime';
// import './references/rxjs/operators/auditTime';
// import './references/rxjs/operators/delay';
// import './references/rxjs/operators/delayWhen';
// import './references/rxjs/operators/bufferTime';
// import './references/rxjs/operators/buffer';
// import './references/rxjs/operators/bufferWhen';
// import './references/rxjs/operators/catchError';
// import './references/rxjs/operators/retry';
// import './references/rxjs/operators/takeWhile';
// import './references/rxjs/operators/retryWhen';
// import './references/rxjs/subjects/subject';
// import './references/rxjs/subjects/replay';
// import './references/rxjs/subjects/behavior';
// import './references/rxjs/subjects/async';
// import './references/rxjs/observable/index';
// import './transformer';

import { fromEvent, Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

/*const rect = document.querySelector('.rect').getClientRects();

function isEventInElement(rect, clientX, clientY) {
    if (clientX < rect.left || clientX >= rect.right) return false;
    if (clientY < rect.top || clientY >= rect.bottom) return false;
    return true;
}


function customOperator(transform) {
    return (source) => {
        return new Observable(observer => {
            source.subscribe((value) => {
                const transformed = transform(value);
                observer.next(transformed);
            });
        });
    };
}

fromEvent(document, 'click').pipe(
    customOperator((event) => event.clientX)
).subscribe((value: MouseEvent) => console.log(value));*/

