import { Observable, combineLatest, merge, timer } from 'rxjs';
import { delay } from 'rxjs/operators';

const randoAsync = Observable.create(o => o.next(Math.random()));

const delayed = randoAsync.pipe(delay(1000))

const combo = combineLatest([delayed, randoAsync, randoAsync, randoAsync]);

combo.subscribe(com => console.log('combined: ', com))

const merged = merge(delayed, randoAsync, randoAsync, randoAsync)

merged.subscribe(mer => console.log('merged: ', mer))

// ---------------------------------------------------------  //
// timerOne 在1秒时发出第一个值，然后每4秒发送一次
const timerOne = timer(1000, 4000);
// timerTwo 在2秒时发出第一个值，然后每4秒发送一次
const timerTwo = timer(2000, 4000);
// timerThree 在3秒时发出第一个值，然后每4秒发送一次
const timerThree = timer(3000, 4000);

// 當接收到 timer 丟出的最新值，就會把每個 timer (觀察者物件) 的最新值丟出，即任一個 timer 取得最新值用陣列方式丟出
const combined = combineLatest(timerOne, timerTwo, timerThree);

combined.subscribe(latestValues => {
    
    const [timerValOne, timerValTwo, timerValThree] = latestValues;
    /*
        示例:
        timerOne first tick: 'Timer One Latest: 1, Timer Two Latest:0, Timer Three Latest: 0
        timerTwo first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 0
        timerThree first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 1
    */
    console.log(
        `Timer One Latest: ${timerValOne},
        Timer Two Latest: ${timerValTwo},
        Timer Three Latest: ${timerValThree}`
    )}
);
