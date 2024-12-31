import React from 'react'
import Child from './Child'

export default function Parent() {

    const data =("Hello")
  return (
    <div>
        <Child data={data}>
            
        </Child>
        </div>
  )
}