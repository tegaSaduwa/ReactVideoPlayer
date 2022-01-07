import React from "react";
import PlaylistItens from "../containers/PlaylistItems";

import NightMode from "../Nightmode";
const Playlist = (props) => (
  <>
    <NightMode />
    <PlaylistHeader />
    <PlaylistItens />
  </>
);

export default Playlist;
