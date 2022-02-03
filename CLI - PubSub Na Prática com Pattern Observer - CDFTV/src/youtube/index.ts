import Video from "./classes/video.ts";
import Feed from "./classes/feed.ts";
import Subscriber from "./classes/subscriber.ts";
import VideoNotification from "./classes/video_notification.ts";

const video = new Video(
  "0Eub-aQs-44",
  "Aprenda a Criar um CLI Para Automatizar seu Trabalho",
  "https://i9.ytimg.com/vi/0Eub-aQs-44/maxresdefault.jpg",
  "https://www.youtube.com/watch?v=0Eub-aQs-44"
);

const videoNotification = new VideoNotification(video);

// Observers
const gabriel = new Subscriber(1, "Gabriel Fróes");
const vanessa = new Subscriber(2, "Vanessa Weber");
const juliana = new Subscriber(3, "Juliana Silva");
const feedYoutube = new Feed("UCFuIUoyHB12qpYa8Jpxoxow");

videoNotification.subscribe(gabriel);
videoNotification.subscribe(vanessa);
videoNotification.subscribe(juliana);
videoNotification.subscribe(feedYoutube);

console.log("Notificando os observers...");
videoNotification.notifyAll();

// Unsubscribe juliana
videoNotification.unsubscribe(juliana);

// Notify again
console.log("Notificando os observers...");
videoNotification.notifyAll();
