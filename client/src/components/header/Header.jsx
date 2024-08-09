import React from 'react'
import { Nav } from '../navigation/Nav'
import styles from './header.module.scss'

export const Header = () => {
  return (
    <>
    <header>
    <h1 className={styles.overskrift}>MedieSuset</h1>
    <Nav />
    </header>
    </>
  )
}
