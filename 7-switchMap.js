import { of, range } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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

const sums$ = range(1,6)

const result = sums$.pipe(switchMap(sum => fetchOrders(sum)))

result.subscribe(item => console.log("switchMap:", item))