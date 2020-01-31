import { combineLatest, merge, timer, interval } from 'rxjs';
import { delay, take, map } from 'rxjs/operators';

// -------------------------combineLatest--------------------------------  //

let source = interval(1000).pipe(take(6));
let newValue = interval(2000).pipe(take(4))

// 收到訂閱的最新值就返回一個陣列
const combineLatested = combineLatest([source, newValue])

// 第二個參數放一個函數計算會返回一個計算結果
const calc = combineLatest([source, newValue], (x, y)=> x + y);

// 只要 observable 有最新的值就會接收新值
combineLatested.subscribe(com => console.log("combineLatested : ", com))
calc.subscribe(calc => console.log("計算後 ",calc))

// -------------------------merge--------------------------------  //

// 多個 observable 實例合併成一個 observable，
// 其中一個 observable 被觸發時就能夠送出元素，這很常用在一個以上的按鈕具有部分相同的行為。
const merged = merge(
    source.pipe(map(sour => `${sour} source`)), 
    newValue.pipe(map(val => `${val} newValue`))
)
merged.subscribe(value => console.log("merged:", value))

// 都可以放置多個 observable
