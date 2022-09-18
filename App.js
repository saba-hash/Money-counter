import{ useState } from 'react'; 


export default function App() {
  const [count, setCount] = useState(0);
  
  //this function adds one when you click on the button
  function addOne(){
    setCount(count + 1);
  } 
  
  function addFive(){
    setCount(count + 5);
  }
  
  function addTen() {
    setCount(count + 10);
  }
  
  function addTwenty(){
    setCount(count + 20);
  } 
  function addFifty() {
    setCount(count + 50);
  }
  
  function addLari(){
    setCount(count + 100);
  }
  
  return (
  
    <div className="App"
    style={{justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}
    >
      
    
      <h1>Your balance: {count}</h1>
      <button onClick={addOne} className='button'>+1 თეთრი</button>
      
      <button onClick={addFive} className='button'>+5 თეთრი</button>
      
      <button onClick={addTen} className='button'>+10 თეთრი</button>
      
      <button onClick={addTwenty } className='button'>+20 თეთრი</button>
      
      <button onClick={addFifty} className='button'>+50 თეთრი</button>
      
      <button onClick={addLari} className=' button' >+100 თეთრი</button>
    </div>
  );
}
