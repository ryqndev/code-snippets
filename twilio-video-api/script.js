const Video = Twilio.Video;

/**
 * put your access token in the string below. follow these instructions:
 *
 * https://www.twilio.com/docs/video/javascript-getting-started#3-generate-an-access-token
 *
 *
 * I'd recommend just using the twilio CLI to do this for a hackathon, which you can follow:
 * https://www.twilio.com/docs/twilio-cli/quickstart
 *
 * this will install the CLI (command line interface) which will allow you to run this command in the terminal:
 *
 * $ twilio
 *
 * twilio plugins:install @twilio-labs/plugin-token
 */
const accessToken = "";

Video.connect(accessToken, { name: "my-new-room" }).then(
  (room) => {
    console.log(`Successfully joined a Room: ${room}`);

    Video.createLocalVideoTrack().then((track) => {
      const localMediaContainer = document.getElementById("video");

      localMediaContainer.appendChild(track.attach());
    });

    room.on("participantConnected", (participant) => {
      console.log(`Participant "${participant.identity}" connected`);

      participant.tracks.forEach((publication) => {
        if (publication.isSubscribed) {
          const track = publication.track;

          document.getElementById("other-videos").appendChild(track.attach());
        }
      });

      participant.on("trackSubscribed", (track) => {
        document.getElementById("other-videos").appendChild(track.attach());
      });
    });
  },
  (error) => {
    console.error(`Unable to connect to Room: ${error.message}`);
  }
);
