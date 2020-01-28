import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const user$ = of({ uid: Math.random() });

const fetchOrders = (userId) => {
    return of(`${userId}'s order data`)
}

let orders;

user$.subscribe(user => {
    fetchOrders(user.uid).subscribe(data => {
        orders = data;
        console.log(orders, ' 使用兩層訂閱')
    })
})

const orders$ = user$.pipe(
    // switch 交換
    switchMap(user => fetchOrders(user.uid))
)

orders$.subscribe(order => console.log(`${order} SwitchMap 合併觀察者物件`))

// 兩種方式皆可行 使用 switchMap 方法比較簡潔