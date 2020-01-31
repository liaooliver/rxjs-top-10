import { Subject, BehaviorSubject } from 'rxjs';

// Subject 同時是 Observable，也是 Observer，能處理為組播(multicast)，
// 但是不會帶初始狀態
const subject = new Subject();

// 在增加值之前 使用 Subject 先訂閱
subject.subscribe(s => console.log('subject1: ', s))
subject.next('HELLO')
subject.next('WORLD')

subject.subscribe(s => console.log('subject2: ', s))

subject.next('subject2 訂閱之後觸發 next 方法，會讓 subject2 得到目前的狀態')
subject.next('不會在從頭接收 HELLO')

// Subject 數值產生變化後，之後才訂閱會接收不到通知
subject.subscribe(s => console.log('subject3: ', s))

// 初始實體化就有帶值
const behaviorSubject = new BehaviorSubject('初始狀態');

// 訂閱的當下可以取得初始狀態
behaviorSubject.subscribe(bs => console.log('behaviorSubject1: ', bs))

behaviorSubject.next('MONGO')

// 即使是在值已經產生變化 仍然可以訂閱並取得最新的值
behaviorSubject.subscribe(bs => console.log('behaviorSubject2: ', bs))