import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

// Cold Observable 觀察者物件的每次訂閱結果都是獨立執行的
const cold = Observable.create(o => o.next(Math.random()))
cold.subscribe(c => console.log('COLD NUMBER: ', c))
cold.subscribe(c => console.log('COLD NUMBER: ', c))

//  Hot Observable 觀察者物件的訂閱結果都是相同的
const hot = cold.pipe(shareReplay());
hot.subscribe(h => console.log('HOT NUM: ', h))
hot.subscribe(h => console.log('HOT NUM: ', h))