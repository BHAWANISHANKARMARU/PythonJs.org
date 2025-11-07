import { use, useEffect, useRef } from "react";


export function useRefWithCallback(callback) {
  const ref = useRef(null);
  function handleClick(){
    console.log(ref.current);
  }

  useEffect(function(){

  },[state])
  return (
    <div>
        <form ref={ref} >
            <input type="text" ref={ref} />
            <button type="submit" onClick={handleClick}>Submit</button>
            </form>
    </div>
  )
}

const array = [1,2,3,4,5];
const copiedArray = [...array,6];