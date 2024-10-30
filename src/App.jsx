import "./index.css";
import { useState } from "react";


function App(){
  const [num, setNum] = useState(0);
  return(
    <div>
      <button onClick={()=>{
        setNum(num + 1)
      }}>Add</button>
       
       <p>{num}</p>
       
       <button onClick={()=>{
        setNum(num - 1)
      }}>Mains</button>
    </div>
  );
}

export default App;