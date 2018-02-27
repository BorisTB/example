import React from 'react'
import styles from './LoginForm.css'

export default ({ onSubmit }) => (
  <form onSubmit={ onSubmit } className={ styles.form }>
    <input className={ styles.input } type="text" name="username" placeholder="Username" />
    <input className={ styles.input } type="password" name="password" placeholder="Password" />
    <button className={ styles.button } type="submit">Login</button>
  </form>
)
