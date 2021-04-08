import React from 'react';
import styles from '../../css/sampleVideo.module.scss';

import thumbnailImage from '../../assets/videos/videoThumbnail.jpg';
import ReactPlayer from 'react-player/lazy';
import Ticker from '../countUpComponent/index';

function Index() {
  // Play Icon
  let getIcon = () => {
    return (
      <a className={styles.playBut}>
        <svg
          version="1.1"
          x="0px"
          y="0px"
          width="213.7px"
          height="213.7px"
          viewBox="0 0 213.7 213.7"
          enable-background="new 0 0 213.7 213.7"
        >
          <polygon
            className={styles.triangle}
            id="XMLID_18_"
            fill="none"
            stroke-width="7"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            points="
  73.5,62.5 148.5,105.8 73.5,149.1 "
          />

          <circle
            className={styles.circle}
            id="XMLID_17_"
            fill="none"
            stroke-width="7"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            cx="106.8"
            cy="106.8"
            r="103.3"
          />
        </svg>
      </a>
    );
  };
  return (
    <div className={styles.sampleVideo}>
      <div className={styles.sampleVideoWrapper}>
        <div className={styles.txtDiv}>
          <p>
            LIVE YOUR MAGIC AND SAVE YOUR PRECIOUS LOVE MEMORIES! OUR TEAM OF
            PROFESSIONAL PHOTOGRAPHERS IS HERE TO HELP YOU
          </p>
        </div>
        <div className={styles.videoDiv}>
          <ReactPlayer
            className={styles.videoElement}
            width="100%"
            height="100%"
            playing
            light={thumbnailImage}
            controls={true}
            url="https://www.youtube.com/watch?v=FUNrldZART4"
            playIcon={getIcon()}
          />
        </div>
        <div className={styles.countUpDiv}>
          <h2 className={styles.countUpItem}>
            <span>
              <Ticker className={styles.count} end={600} />
            </span>
            Photos Clicked
          </h2>
          <h2 className={styles.countUpItem}>
            <span>
              <Ticker className={styles.count} end={50} />
            </span>
            Ceremonies
          </h2>
          <h2 className={styles.countUpItem}>
            <span>
              <Ticker className={styles.count} end={30} />
            </span>
            New Couples
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Index;
