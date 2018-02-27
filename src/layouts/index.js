import React from 'react'
import Private from './Private'
import Public from './Public'

export default ({ viewer }) => {
  if (viewer.isLoggedIn) {
    return <Private viewer={ viewer } />
  }

  return <Public />
}
