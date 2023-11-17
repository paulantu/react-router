import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState(0);


    useEffect(()=> {
        fetch(`https://api.github.com/users/paulantu`)
        .then((response) => response.json())
        .then((data) => setData(data))
    }, [])

  



  return (
    <div className='text-center py-11'>
        <div className='flex justify-center'>
          <img src={data.avatar_url} alt='Github Profile picture' width={150}/>
        </div>
        <div className='mt-6'>
          <h1 className='text-orange-500 text-2xl'>Name: {data.name}</h1>
          <div>Github Follower : {data.followers}</div>
        </div>
        <img src='' alt='' />
    </div>
  )
}

export default Github