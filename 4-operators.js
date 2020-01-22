import { from } from 'rxjs';
import { map, filter, take, scan } from 'rxjs/operators';

const source = from([1,2,3,4,5,6,7,8,9,10])

const newMap = source.pipe(
    // 把輸入轉成新的輸出
    map(n => Math.pow(n, 2)),
    scan((acc, val) => acc + val),
    filter(f => f > 10),
    take(5)
)

newMap.subscribe(m => console.log('map: ', m))