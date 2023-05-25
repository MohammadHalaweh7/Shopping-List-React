import React from 'react'
import style from './Header.module.css'
export default function Header() {
  return (
    <header>
    <div className={`${style.overlay}`}></div>
    <div className={`${style.content}`}>
        <h2><b>Shopping List</b></h2>
        <h5>Everything you need in one place.</h5>
    </div>
</header>
  )
}
