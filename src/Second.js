import React from 'react'
import { useContext } from 'react'
import { datacontext } from './App'
function Second() {
    const data = useContext(datacontext);
  return (
    <div>
        <h1>{data}</h1>
    </div>
  )
}

export default Second