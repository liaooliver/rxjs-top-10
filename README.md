# 0. RxJS basic
    - RxJS 是一套藉由 Observable sequences 來組合非同步行為和事件基礎程序的 Library
    - Reactive Programming 簡單來說就是 當變數或資源發生變動時，由變數或資源自動告訴我發生變動了

# 1. Observable
    - RXJS 可以建立事件流或者是資料流
    - 包裝著資料的容器
    - 可以被訂閱的
        - 資料有變化時會發出通知
    - 實務上通常直接使用 creation operator 像是 from, of, fromEvent, fromPromise 等
    - 觀察者物件是一個具有三個方法(method)的物件，每當 Observable 發生事件時，便會呼叫觀察者相對應的方法：
        - next：每當 Observable 發送出新的值，next 方法就會被呼叫。
        - complete：在 Observable 沒有其他的資料可以取得時，complete 方法就會被呼叫，在 complete 被呼叫之後，next 方法就不會再起作用。
        - error：每當 Observable 內發生錯誤時，error 方法就會被呼叫。

# 2. HOT VS COLD
    - Cold Observable 就是指每次訂閱結果都是獨立的執行，不會互相影響。
    - Hot Observable 則是共用的訂閱，訂閱結果的值都是相同的。

# 3. Subjects
    - 可以用 Subject 替代 HOT Observable。
    - Subject
    - BehaviorSubject

# 4. OPERATORS
    - 利用運算子組合或是轉換是資料流

# 5. TAP
    - tap 運算子不會對元素產生任何影響，實務上經常用來除錯

# 6. back pressure (背壓)
    - 依照本身的接收情況 ( ex API 可承受的壓力 )，來控制接收資料的速率 ( 決定每分鐘打幾次 API ) 

    - 控制速率的運算子 => 做流量控制
        - debounceTime
        - throttleTime
        - buffer

# 7. switchMap & concat
    - switchMap 
        - 將兩個 Observable 物件攤平成一個 Observable 物件
        - switchMap 具有取消訂閱的效果
    - concat
        - 前一個 observable 完成了再訂閱下一個 observable 並送出值
        - 依序訂閱 observable，具有先後順序
    - 都會返回一個 Observable 物件

# 8. 組合運算子 combineLatest & merge
    - combineLatest 接收到最新的值
    - merge 將多個 observable 合併成一個 observable

# 9. 例外處理
    - 使用 catchError 運算子
    - 使用觀察者 Observer 的 error 方法

# 10. 記憶體洩漏
    - 解除訂閱
    - 設定條件終止訂閱



   