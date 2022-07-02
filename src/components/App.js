import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(res => res.json())
    .then(data => setToys(data))
  },[])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddToy(newToy){
    setToys(toys => [...toys, newToy])
  }

  function handleRemoveToy(toyId){
    let updatedList = toys.filter(toy => toy.id !== toyId)
    setToys(updatedList)
  }
 
  function handleUpVote(likedToy){
    const updatedToy = toys.map((toy) => {
      if(toy.id === likedToy.id){
        return likedToy
      }
      else{return toy}
    })
    setToys(updatedToy)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm toyForm={handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys ={toys} handleRemoveToy={handleRemoveToy} handleUpVote = {handleUpVote}/>
    </>
  );
}

export default App;
