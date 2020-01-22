import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

const cold = Observable.create(o => o.next(Math.random()))

cold.subscribe(c => console.log('COLD NUMBER: ', c))
cold.subscribe(c => console.log('COLD NUMBER: ', c))

const hot = cold.pipe(shareReplay());

hot.subscribe(h => console.log('HOT NUM: ', h))
hot.subscribe(h => console.log('HOT NUM: ', h))