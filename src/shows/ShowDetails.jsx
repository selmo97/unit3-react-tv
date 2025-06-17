import "./shows.css";
import EpisodeDetails from "../episodes/EpisodeDetails";
import EpisodeList from "../episodes/EpisodeList";
import { useState } from "react";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({show}) {
  const [selectedEps, setSelectedEps] = useState()
  if(!show){
    return(
      <p>Please select a show to view more details</p>
    )
  }

  return <div className="show-details">
    <EpisodeList name={show.name} episodes={show.episodes} selectedEpisode={selectedEps} setSelectedEpisode={setSelectedEps} />
    <EpisodeDetails episode= {selectedEps} />
    

  </div>;
}
