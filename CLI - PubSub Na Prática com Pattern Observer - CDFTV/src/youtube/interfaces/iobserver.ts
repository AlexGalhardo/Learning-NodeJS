import Video from "../classes/video.ts";
export default interface IObserver {
  update(video: Video): void;
}
