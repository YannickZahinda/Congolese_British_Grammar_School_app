import React from 'react'
import Performance from './performance'
import CoursesCompleted from './completed_course'
import MeilleursEleves from './meilleurs'
import Messages from './messages'

const Home = () => {
  return (
    <>
    <Performance />
    <CoursesCompleted />
    <Messages />
    <MeilleursEleves />
    </>
  )
}

export default Home