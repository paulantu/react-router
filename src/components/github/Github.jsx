import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState(0);


    useEffect(()=> {
        fetch(`https://api.github.com/user/paulantu`)
        .then((response) => response.json())
        .then((data) => setData(data))
    }, [])





  return (
    <div>
        <div>Github Follower : </div>
        <img src='' alt='' />
    </div>
  )
}

export default Github