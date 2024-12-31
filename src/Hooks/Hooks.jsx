import React, { useState } from 'react'

export default function Hooks() {
    const[count, setCount] = useState(0)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>
            Count {count}
        </button>
    </div>
  )
}