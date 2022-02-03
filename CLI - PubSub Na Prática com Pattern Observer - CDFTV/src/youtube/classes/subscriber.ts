import IObserver from "../interfaces/iobserver.ts";
import Video from "./video.ts";

export default class Subscriber implements IObserver {
  constructor(public readonly id: number, public readonly name: string) {}

  update(video: Video) {
    console.log(`${this.name} has been notified about ${video.title}`);
  }
}
