import { interval, timer } from 'rxjs';
import { takeWhile, takeUntil } from 'rxjs/operators';

const source = interval(1000);

// 解除訂閱
const subscription = source.subscribe(v => {
    console.log('member leak: ', v)
    if(v >= 10){
        subscription.unsubscribe();
    }
})

// 設定條件終止訂閱
// takeWhile 
const example = source.pipe(
    // 不需手動使用 unsubscribe 
    takeWhile(v => v <= 10)
)
example.subscribe(ex => console.log('takeWhile: ', ex))

// takeUntil
const example2 = source.pipe(
    takeUntil(timer(5000))
)
example2.subscribe(ex => console.log('takeUntil: ', ex))