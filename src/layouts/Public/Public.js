import React from 'react'
import LoginForm from './LoginForm'
import styles from './Public.css'

export default ({ submitLoginForm }) => (
  <div className={ styles.layout }>
    <LoginForm onSubmit={ submitLoginForm } />
  </div>
)
