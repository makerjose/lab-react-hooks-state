import React from 'react'
import styles from '../styles/DarkMode.module.css'

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={() => setDarkMode((prev) => !prev)}
    >
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
