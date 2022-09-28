import { Player, LoadingSpinner, BigPlayButton, ControlBar, ReplayControl, ForwardControl, PlaybackRateMenuButton } from 'video-react';

import 'video-react/dist/video-react.css'; // import css

function App() {
  return (
      <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
          <LoadingSpinner />
          <BigPlayButton position="center" />
          <ControlBar>
              <PlaybackRateMenuButton rates={[6, 2, 1.5, 1, 0.5, 0.1]}/>
              <ForwardControl seconds={10} />
              <ReplayControl seconds={10} />
          </ControlBar>
      </Player>
  );
}

export default App;
