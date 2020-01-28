import { of, Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const sub = new Subject();

// 使用 catchError 運算子可以自定義錯誤訊, 不會跳出中控台紅色錯誤訊息
sub.pipe(catchError(err => of('something broke, show error message')),retry(2)).subscribe(res=>console.log('errors:', res))

sub.next('good');
// 如果沒使用 catchError , 跳出中控台紅色錯誤訊息
sub.error('BOOM!')