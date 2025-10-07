import { useState } from 

export default function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () =>{
    if(count > 0) {
      setCount(count -1);
    }
  };

  const handleRest = () {
    setCount(0);
  };
  
}

