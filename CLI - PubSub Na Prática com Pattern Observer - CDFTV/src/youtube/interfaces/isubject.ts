import IObserver from "./iobserver.ts";

export default interface ISubject {
  subscribe(observer: IObserver): void;
  unsubscribe(observer: IObserver): void;
  unsubscripeAll(): void;
  notify(observer: IObserver): void;
  notifyAll(): void;
}
