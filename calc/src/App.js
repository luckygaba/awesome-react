import './App.css';
import {useState} from 'react'



function App() {
  const [first, setFirst] = useState(0)
  const [sec, setSec] = useState(0)
  const [ans, setAns] = useState(0)



  return console.log(first, sec) || (
    <div className="App">
      <header className="App-header">
        Hello but not Namastey
      <label>First Number</label>
      <input onChange={(e)=> setFirst(e.target.value)} type="number" />
      <label>Second Number</label>
      <input onChange={(e)=> setSec(e.target.value)} type="number"/>
     <button onClick={()=> setAns(Number(first) + Number(sec))}>Calculate</button>
      
      <label>Answer </label>
      <input disabled value={ans}/>



      </header>
    </div>
  );
}

export default App;
