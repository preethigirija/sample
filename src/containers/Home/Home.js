import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
 const isLoggedin= useSelector((state)=>state.isLoggedin);
 console.log(isLoggedin)
//  useEffect(() => {
// console.log(store);
//  }, [])
 
  return (
    <div>Home-{isLoggedin ? 'Login' : 'Please login'} 

    </div>
  )
}

export default Home