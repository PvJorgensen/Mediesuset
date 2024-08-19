import React from 'react'
import styles from './sceneNav.module.scss'

export const SceneNav = () => {
  return (
    <nav className={styles.sceneNav}>
        <ul>
            <li>ALLE</li>
            <li>RØD SCENE</li>
            <li>BLÅ SCENE</li>
            <li>GRØN SCENE</li>
            <li>LILLA SCENE</li>
        </ul>
    </nav>
  )
}
