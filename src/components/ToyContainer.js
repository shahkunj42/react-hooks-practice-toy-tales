import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleRemoveToy, handleUpVote}) {
  let toysList = toys.map(toy => {
    return (<ToyCard handleRemoveToy={handleRemoveToy} handleUpvote={handleUpVote}
      key={toy.id} id={toy.id} 
      name= {toy.name} image= {toy.image} 
      likes={toy.likes} />)
  })
  return (
    <div id="toy-collection">{toysList}</div>
  );
}

export default ToyContainer;
