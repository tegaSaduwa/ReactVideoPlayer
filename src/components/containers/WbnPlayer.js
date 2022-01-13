import React, { useState, useEffect } from "react";
import Video from "../Video";
import { ThemeProvider } from "styled-components";
import StyledWbnPlayer from "../styles/StyledWbnPlayer";
import Playlist from "../containers/Playlist";

const theme = {
  bgcolor: "#353535",
  bgcolorItem: "#414141",
  bgcolorItemActive: "#405c63",
  bgcolorplayed: "#526d4e",
  border: "none",
  borderPlayed: "none",
  color: "#fff",
};

const themelight = {
  bgcolor: "#fff",
  bgcolorIten: "#fff",
  bgcolorItemActive: "#80a7b1",
  bgcolorplayed: "7d9979",
  border: "1px solid #353535",
  borderPlayed: "none",
  color: "353535",
};

const WbnPlayer = ({ match, history, location }) => {
  const videos = JSON.parse(document.querySelector('[name="videos"]').value);
  const [state, setState] = useState({
    videos: videos.playlist,
    activeVideo: videos.playlist[0],
    nightMode: true,
    playListId: videos.playListId,
    autoplay: false,
  });

  useEffect(() => {
    const videoId = match.params.activeVideo;
    if (videoId !== undefined) {
      const newActiveVideo = state.videos.findIndex(
        (video) => video.id === videoId
      );
      setState((prev) => ({
        ...prev,
        activeVideo: prev.videos[newActiveVideo],
        autoplay: location.autoplay,
      }));
    } else {
      history.push({
        pathname: `/${state.activeVideo.id}`,
        autoplay: false,
      });
    }
  }, [
    history,
    location.autoplay,
    match.params.activeVideo,
    state.activeVideo.id,
    state.videos,
  ]);

  const nightModeCallback = () => {};
  const endCallback = () => {};
  const progressCallback = () => {};

  return (
    <ThemeProvider theme={state.nightMode ? theme : themelight}>
      {state.videos !== null ? (
        <StyledWbnPlayer>
          <Video
            active={state.active}
            autoplay={state.autoplay}
            endCallback={endCallback}
            progressCallback={progressCallback}
          />
          <Playlist
            videos={state.videos}
            active={state.activeVideo}
            nightModeCallback={nightModeCallback}
            nightMode={state.nightMode}
          />
        </StyledWbnPlayer>
      ) : null}
    </ThemeProvider>
  );
};

export default WbnPlayer;
