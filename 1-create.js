// 建立 Observable 物件的方法
import { Observable, of, from, interval, fromEvent, asyncScheduler } from 'rxjs';

const basic = Observable.create(obs => {
    // 每次 next() 方法就像是一個 emit 事件 通知 subscriber
    obs.next('A');
    obs.next('B');
    // 完成
    obs.complete();
    obs.next('C');
})

// 建立訂閱
basic.subscribe(v => console.log(v));


const obsOf = of('observable');
obsOf.subscribe(v => console.log('obsOf: ' ,v))

const obsFrom = from(['A', 'B', 'C', 'D'])
obsFrom.subscribe(v => console.log('obsFrom: ', v))

const obsFromString = from('world')
// 字串內的每個字元都會被個別提交(emit)
obsFromString.subscribe(v => console.log('obsFromString: ', v))

// of()  & from() 的差別在 from() 需要陣列 promise iterable(可迭代)


// 監聽 DOM 事件
const event = fromEvent(document, 'click');
event.subscribe(v => console.log('event: ',v))

// 定時器
// const period = interval(500);
// period.subscribe(v => console.log('period: ', period))

// RXJS 可以設定同步模式或非同步模式

// 同步
const sync = of('hello');
// 非同步  asyncScheduler
const async = of('hello', asyncScheduler);

sync.subscribe(v => console.log('sync ', v))
async.subscribe(v => console.log('async ', v))

console.log('sync')