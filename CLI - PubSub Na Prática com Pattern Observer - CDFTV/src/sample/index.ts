import Observer from "./classes/observer.ts";
import Subject from "./classes/subject.ts";

const observerOne = new Observer(1);
const observerTwo = new Observer(2);
const observerThree = new Observer(3);

const subject = new Subject();

console.log("Subscribe 1,2 and 3");
subject.subscribe(observerOne);
subject.subscribe(observerTwo);
subject.subscribe(observerThree);
console.log("Notify all");
subject.notifyAll();
console.log("Unsubscribe 2");
subject.unsubscribe(observerTwo);
console.log("Notify all again");
subject.notifyAll();
