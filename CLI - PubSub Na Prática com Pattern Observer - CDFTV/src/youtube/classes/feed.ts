import IObserver from "../interfaces/iobserver.ts";
import Video from "./video.ts";

export default class Feed implements IObserver {
  public url: string;
  constructor(public readonly channelId: string) {
    this.url = `https://www.youtube.com/feeds/videos.xml?channel_id=${this.channelId}`;
  }

  update(video: Video) {
    console.log(`New video added in Feed RSS: "${video.title}"`);
    console.log(`Check this out : "${this.url}"`);
  }
}
