import { Subject, BehaviorSubject } from 'rxjs';

const subject = new Subject();

// 在增加值之前 使用 Subject 先訂閱
subject.subscribe(s => console.log('subject1: ', s))
subject.next('HELLO')
subject.next('WORLD')

// Subject 數值已經增加 之後才訂閱會接收不到通知
subject.subscribe(s => console.log('subject2: ', s))

// 初始實體化就有帶值
const behaviorSubject = new BehaviorSubject('init value');

behaviorSubject.subscribe(bs => console.log('behaviorSubject1: ', bs))

behaviorSubject.next('MONGO')

// 即使是在值已經產生變化 仍然可以訂閱並取得最新的值
behaviorSubject.subscribe(bs => console.log('behaviorSubject2: ', bs))