
import React, { useState, useEffect } from 'react';


function GreenLightRedLight({ user }) {
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(40);
  const [boxColor,setBoxColor] = useState('gray');
 
  

  useEffect(() => {
    let timer;
    const randomTime = Math.random() * 1000 + 1000; 
    if (isGameRunning) {
      if (timeLeft > 0) {
        timer = setTimeout(() => {
         
          setBoxColor((prevColor) => (prevColor === ' #0E7373' ? '#730f2a' : ' #0E7373'))
          setTimeLeft((prevTime) => prevTime - 1);
        }, randomTime);
      } else {
        setIsGameRunning(false);
        alert('Time is up. Game Over!');
      }
    }

    return () => clearTimeout(timer);
  }, [isGameRunning, timeLeft]);

  const handleBoxClick = () => {
    if (isGameRunning) {
      if(boxColor==='#730f2a'){
        
        alert('GAME OVER! You clicked the RED BOX')
        setIsGameRunning(false);
        setBoxColor('gray')
        setTimeLeft(40);
        setScore(0)


      }
      else{
        setScore((prevScore) => prevScore + 1);
        if(user.difficulty === 'Easy' && score===10){
          alert('YOU WON');
          setIsGameRunning(false)
          
        }
        else if(user.difficulty === 'Medium' && score===15){
          alert('YOU WON');
          setIsGameRunning(false)
         
        }
        else if(user.difficulty === 'Hard' && score=== 25){
         
          setIsGameRunning(false)
          alert('YOU WON')
        }

      }

     
    }
  };

  const startGame = () => {
    setIsGameRunning(true);
    setTimeLeft(40);
    setScore(0);
    setBoxColor('gray')
  };

 


  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <h3 style={{color:'#0E7373'}}>Difficulty: {user.difficulty}</h3>
      <h3 style={{color:' #0E7373'}}>Time left: {timeLeft} seconds</h3>
      <h3 style={{color:' #0E7373'}}>Score: {score}</h3>
      <div
        className={`box ${isGameRunning && 'clickable'}`}
        style={{ backgroundColor:boxColor}}
        onClick={handleBoxClick}
      ></div>
      {!isGameRunning && (
        <button type='click' onClick={startGame} disabled={!user.name || !user.email || !user.mobile}>
          Start Game
        </button>
      )}
     
    </div>
  );
}

export default GreenLightRedLight;
