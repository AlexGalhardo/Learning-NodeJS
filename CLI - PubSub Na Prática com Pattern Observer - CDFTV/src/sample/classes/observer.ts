import IObserver from "../interfaces/iobserver.ts";

export default class Observer implements IObserver {
  constructor(public readonly id: number) {}
  update(): void {
    console.log(`Observer ${this.id} updated`);
  }
}
