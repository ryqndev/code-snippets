const Video = Twilio.Video;

Video.createLocalVideoTrack().then((track) => {
  const localMediaContainer = document.getElementById("video");

  localMediaContainer.appendChild(track.attach());
});
