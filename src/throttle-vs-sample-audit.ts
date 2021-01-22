/*
const beginBtn = document.querySelector('.begin');
const endBtn = document.querySelector('.end');
const streamBtn = document.querySelector('.stream');

const startTime = Date.now();

const begin = fromEvent(beginBtn, 'click').pipe(tap(() => console.log('started')));
const end = fromEvent(endBtn, 'click').pipe(tap(() => console.log('stopped')));

const source = timer(500, AnimationFrameScheduler);

const stream = source.pipe(
    throttleTime(2000),
    tap((v) => {
        console.log('sampleTime:', v, Date.now() - startTime);
    }),
    takeUntil(end)
)

begin.pipe(
    switchMap(() => stream)
).subscribe();

const source = fromEvent(streamBtn, 'click').pipe(scan((acc, curr) => acc + 1, 0));
source.pipe(
    debounceTime(100, animationFrameScheduler),
    tap((v) => {
        console.log('throttleTime:', v, Date.now() - startTime);
    }),
    takeUntil(end)
).subscribe();
*/
