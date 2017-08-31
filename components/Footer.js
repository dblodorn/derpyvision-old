import ReactPlayer from 'react-player'
import configVars from '../derpyConfig.json'

const Footer = () => {
  return (
    <footer>
      <div className={'inner-footer'}>
        <p>OMG: <span className={'light'}>SO SATISFYING</span> 😌</p>
      </div>
      <div className={'audio-wrapper'}>
        <ReactPlayer
          url={configVars.THEME_SONG_1}
          playing
          loop
          controls
          width={'50vw'}
          height={40}
          className={'audieu'}
          soundcloudConfig={{
            clientId: configVars.SOUNDCLOUD_CLIENT_ID
          }}
        />
      </div>
      <style jsx global>{`
        footer {
          position: fixed;
          bottom: 0;
          left: 0;
          z-index: 10;
          width: 100vw;
          height: 40px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          background: white;
          border-top: 6px solid black;
        }
        .inner-footer {
          width: 50vw;
          padding-left: 10px;
        }
        .inner-footer > p {
          color: blue;
        }
        .audieu {
          border-left: 6px solid black;
        }
        audio::-webkit-media-controls-current-time-display,
        audio::-webkit-media-controls-time-remaining-display {
          font-family: 'bb-book-medium'!important;
          color: blue;
        }
        audio::-webkit-media-controls-play-button,
        audio::-webkit-media-controls-mute-button {
          -webkit-appearance: none;
          border-radius: 50%;
          margin-right: 10px;
          width: 20px;
          height: 20px;
          display: block;
          background-size: contain;
          background-repeat: no-repeat;
        }
        audio::-webkit-media-controls-mute-button {
          cursor: crosshair;
          background-image: url("https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/ear_1f442.png");
        }
        audio::-webkit-media-controls-mute-button:hover {
          background-image: url("https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/hole_1f573.png");
        }
        audio::-webkit-media-controls-play-button {
          cursor: progress;
          background-image: url("https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/optical-disc_1f4bf.png");
        }
        audio::-webkit-media-controls-play-button:hover {
          background-image: url("https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/crystal-ball_1f52e.png");
        }
        audio::-webkit-media-controls-enclosure {
          height: 40px;
          display: flex;
          align-items: center;
          padding: 0 10px;
        }
        audio::-webkit-media-controls-timeline,
        audio::-webkit-slider-runnable-track,
        audio::-webkit-media-controls-volume-slider {
          background-color: blue;
        }
      `}</style>
    </footer>
  )
}

export default Footer