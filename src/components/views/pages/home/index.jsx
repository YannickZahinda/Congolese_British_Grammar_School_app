import React from 'react'
import Performance from './performance'
import CoursesCompleted from './completed_course'
import MeilleursEleves from './meilleurs'
import Messages from './messages'
import './style.css'

const Home = () => {
  return (
    <div className='home__container'>
      <Performance />
      <CoursesCompleted />
      <Messages />
      <MeilleursEleves />
    </div>
  )
}

export default Home