import { of, range, fromEvent, from, interval } from 'rxjs';
import { switchMap, concat, delay, take, mapTo } from 'rxjs/operators';

const user$ = of({ uid: Math.random() });

const fetchOrders = (userId) => {
    return of(`${userId}'s order data`)
}

let orders;

// 當一個 Observable 物件要包覆另一個 Observable 物件 ， 並返回一個 Observable 物件
user$.subscribe(user => {
    fetchOrders(user.uid).subscribe(data => {
        orders = data;
        console.log(orders, ' 使用兩層訂閱')
    })
})

const orders$ = user$.pipe(
    // switch 交換 return 回一個 Observable 物件
    switchMap(user => fetchOrders(user.uid))
)

orders$.subscribe(order => console.log(`${order} SwitchMap 合併觀察者物件`))

// 兩種方式皆可行 使用 switchMap 方法比較簡潔

// 產生 1 ~ 6
const sums$ = range(1,6)

const result = sums$.pipe(switchMap(sum => fetchOrders(sum)))

result.subscribe(item => console.log("switchMap:", item))

// switchMap 用在發送 HTTP request
function getPostData() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json())
}
var source3 = fromEvent(document, 'click');

var example = source3.pipe(switchMap(e => from(getPostData())));

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});

// switch 最重要的就是他會在新的 observable 送出後直接處理新的 observable 不管前一個 observable 是否完成，
// 每當有新的 observable 送出就會直接把舊的 observable 退訂(unsubscribe)，
// 永遠只處理最新的 observable!
const event = fromEvent(document, 'click');
const interval1 = interval(800).pipe(mapTo(`Item1`),take(2));
const interval2 = interval(1000).pipe(mapTo(`Item2`),take(4));

const re = interval1.pipe(switchMap((map)=> {
    // 傳入上一個 observable 值，並退訂
    console.log(map)
    return interval2
}))
re.subscribe(res => console.log("interval ", res))

// concat 按照顺序，前一個 observable 完成了再訂閱下一個 observable 並送出值
// 依序訂閱 observable，具有先後順序
const con = interval2.pipe(concat(interval1, event))
con.subscribe(res => console.log("concat: ", res))
