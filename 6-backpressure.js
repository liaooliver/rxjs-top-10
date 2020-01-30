import { Observable, fromEvent, interval } from 'rxjs';
import { debounceTime, throttleTime, bufferCount, buffer, bufferTime } from 'rxjs/operators';

const events = fromEvent(document, 'mousemove');

// 延遲輸出最新的值，並捨棄掉中間的其他值
const debounced = events.pipe(debounceTime(1000));
debounced.subscribe(de => console.log('debounced : ', de))

// （連續性） 會在事件發生第一個時間發出回應，並在事件持續發生的時間內持續發送最新值
const throttled = events.pipe(throttleTime(1500));
throttled.subscribe(th => console.log('throttled : ', th))

// 收集事件發出的值，收到完提供的數量後才用陣列做回應 => 使用收集的數量當作送出條件
const bufferCounted = events.pipe(bufferCount(50));
bufferCounted.subscribe(bu => console.log('bufferCounted : ', bu))
 
// 建立兩個 Observable 物件， 
var source = interval(300);
var source2 = interval(10000);

// source2 Observable 當作 example 送出元素的條件
var example = source.pipe(buffer(source2));
example.subscribe({
    next: (value) => { console.log("buffer example: ",value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});

// 用時間來當作 example2 的送出條件
var example2 = source.pipe(bufferTime(1000));
example2.subscribe({
    next: (value) => { console.log("bufferTime example: ",value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
})

// debounce 運作的方式是每次收到元素，
// 會先把元素 cache 住並等待一段時間，
// 如果這段時間內已經沒有收到任何元素，
// 則把元素送出；如果這段時間內又收到新的元素，
// 則會把原本 cache 住的元素釋放掉並重新計時，不斷反覆。
// 適合用來處理間歇行為，間歇行為就是指這個行為是一段一段的

// debounce vs debounceTime
// debounce => 參數帶入一個函數計算捨棄資料的頻率，適合用在頻率是變量的時候
// debounceTime => 參數代入指定一段時間，當作捨棄資料的頻率

// throttle 會先開放送出元素(第一次就把資料送出)，
// 等到有元素被送出就會沈默一段時間，
// 等到時間過了又會開放發送元素。
// throttle 更適合用在連續性行為，比如說 UI 動畫的運算過程

// throttle vs throttleTime 與 debounce vs debounceTime 類似

// debounce vs throttled 作用都是要降低事件的觸發頻率，但行為上有很大的不同。
// throttle 比較像是控制行為的最高頻率，也就是說如果我們設定 1000 毫秒，
// 那該事件頻率的最大值就是每秒觸發一次不會再更快，
// debounce 則比較像是必須等待的時間，要等到一定的時間過了才會收到元素。

// buffer 是一整個家族，總共有五個相關的 operators
    // buffer
    // bufferCount
    // bufferTime
    // bufferToggle
    // bufferWhen
// 常用的運算子
// buffer => 收集输出值，直到提供的 observable 發出才將收集到的值用陣列發出
// bufferCount => 用收集數量來做緩存，到指定收集數量後將緩存的元素送出
// bufferTime => 用時間做緩存，到指定時間後將緩存的元素送出
