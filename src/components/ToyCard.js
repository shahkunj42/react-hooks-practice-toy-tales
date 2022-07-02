import React from "react";

function ToyCard({id, name, image, likes, handleRemoveToy, handleUpvote}) {
  
  function handleDelete(){
    fetch(`http://localhost:3001/toys/${id}`,{method:'DELETE'})
    .then(res => res.json())
    .then(() => handleRemoveToy(id))
  }

  function handleLikes(){
    let updatedLikes = (likes + 1)
    fetch(`http://localhost:3001/toys/${id}`,{
      method:'PATCH',
      headers: {'content-type':'application/json'},
      body: JSON.stringify({likes:updatedLikes})
    })
    .then(res => res.json())
    .then(toy => handleUpvote(toy))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikes}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
