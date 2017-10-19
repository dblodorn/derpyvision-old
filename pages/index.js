import configVars from '../derpyConfig.json'
import Link from  'next/link'
import ReactPlayer from 'react-player'
import Layout from '../components/MyLayout.js'

export default () => (
  <Layout>
    <svg height="0">
      <filter id="filter1">
        <feTurbulence type="fractalNoise" baseFrequency="0 4.15" numOctaves="1" result="warp"></feTurbulence>
        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warp"></feDisplacementMap>
      </filter>
    </svg>
    <svg height="0">
      <filter id="filter2">
        <feTurbulence type="fractalNoise" baseFrequency="0 0.35" numOctaves="2" result="warp"></feTurbulence>
        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="230" in="SourceGraphic" in2="warp"></feDisplacementMap>
      </filter>
    </svg>
    <svg height="0">
      <filter id="filter3">
        <feTurbulence type="fractalNoise" baseFrequency="2 0.35" numOctaves="10" result="warp"></feTurbulence>
        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="530" in="SourceGraphic" in2="warp"></feDisplacementMap>
      </filter>
    </svg>
    <ReactPlayer 
      url={configVars.BG_VIDEO_2}
      playing
      loop
      volume={0}
      width={'100vw'}
      height={'100vh'}
      className={'video-player mask'}
    />
    <ReactPlayer 
      url={configVars.BG_VIDEO_1}
      playing
      loop
      volume={0}
      width={'100vw'}
      height={'100vh'}
      className={'video-player'}
    />
    <style jsx global>{`
      .video-player {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 0;
        width: 100vw!important;
        height: 100vh!important;
        display: block;
        overflow: hidden;
      }
      .video-player > div > iframe {
        height: auto!important;
        width: auto!important;
        top: 50%;
        left: 50%;
        position: absolute;
        min-width: 200%;
        min-height: 150%;
        z-index: -1000;
        overflow: hidden;
        transform: translate(-50%, -50%);
      }
      .mask {
        mask-image: url(https://s3-us-west-2.amazonaws.com/derpyvision/derpy-vision.svg) center / 10%;
        -webkit-mask: url(https://s3-us-west-2.amazonaws.com/derpyvision/derpy-vision.svg) center / 10%;
        z-index: 2;
      }
      .cray-ani {
        animation: cray 0.15s linear infinite;
      }
  `}</style>
  </Layout>
)
