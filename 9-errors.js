import { of, Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const sub = new Subject();
const sub2 = new Subject();

// 使用 catchError 運算子可以自定義錯誤訊, 不會跳出中控台紅色錯誤訊息
// catchError return 一個觀察者物件
// retry 重試 observable
sub.pipe(
    catchError(err => of('something broke, show error message')),
    retry(2))
    .subscribe(res=>console.log('sub export message:', res))

sub.next('good');
sub.error('輸出 catcherror 的訊息!')

sub2.subscribe(res=>console.log('sub2 export message:', res))

// 如果沒使用 catchError , 跳出中控台紅色錯誤訊息
sub2.error('爆炸了!')