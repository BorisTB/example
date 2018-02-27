import React from 'react'
import styles from './Private.css'

export default ({ viewer }) => (
  <div className={ styles.layout }>
    <div className={ styles.title }>Welcome</div>
    <div className={ styles.smallText }>ID: { viewer.user.id }</div>
  </div>
)
