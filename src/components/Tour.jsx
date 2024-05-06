import React from 'react'
import {useParams} from "react-router-dom";

const Tour = () => {
  const {id} = useParams();
  console.log(id);
  return (
    <div>
      helli
    </div>
  )
}

export default Tour
