import React, { useEffect, useState } from 'react'
import "./TinderCards.css"
import TinderCard from 'react-tinder-card'
import axios from './axios'; //내가 만든 axios인스턴스로 임포트해야함

function TinderCards() {

  const [people, setPeople] = useState([]);

  useEffect(()=>{
    //useEffect안에서는 asyc아래와 같이 사용해야 함
    async function fetchData(){
      const req = await axios.get('/tinder/cards');
      setPeople(req.data);
    }
    fetchData();
  }, [])

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    // setLastDirection(direction);
  }

  const outOfFrame = (name) => {
    console.log(name + " left the screen!")
  }


  return (
    <div className='tinderCards'>
      <div className='tinderCards__cardContainer'>
        {people.map((person)=> (
          <TinderCard
            key={person.name}
            className="swipe"
            preventSwipe={["up", "down"]}
            onSwipe={(dir)=> swiped(dir, person.name)}
            onCardLeftScreen={()=> outOfFrame(person.name)}
          >
            <div
              style={{backgroundImage: `url('${person.imgUrl}')`}}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>

          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards