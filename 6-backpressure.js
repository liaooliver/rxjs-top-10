import { fromEvent } from 'rxjs';
import { debounceTime, throttleTime, bufferCount } from 'rxjs/operators';

const events = fromEvent(document, 'mousemove');

// 延遲輸出最新的值，並捨棄掉中間的其他值
const debounced = events.pipe(debounceTime(1000));
debounced.subscribe(de => console.log('debounced : ', de))

// （連續性） 會在事件發生第一個時間發出回應，並在事件持續發生的時間內持續發送最新值
const throttled = events.pipe(throttleTime(1500));
throttled.subscribe(th => console.log('throttled : ', th))

// 收集事件發出的值，收到完提供的數量後才用陣列做回應
const bufferCounted = events.pipe(bufferCount(50));
bufferCounted.subscribe(bu => console.log('bufferCounted : ', bu))
