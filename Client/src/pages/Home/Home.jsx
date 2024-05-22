import React from 'react'
import Crud from '../../components/Crud/Crud'
import New from '../../components/News/New'
import Two from '../../components/Two/Two'
import Best from '../../components/Best/Best'
import Blog from '../../components/Blog/Blog'
import Latter from '../../components/Latter/Latter'

const Home = () => {
  return (
    <>
    <New/>
    <Two/>
    <Crud/>
    <Best/>
    <Blog/>
    <Latter/>
    </>
  )
}

export default Home