import React from 'react'
import loader from '../../assets/loader.gif'
import ReactDOM  from 'react-dom'
import styles from "./Loader.module.css"

const Loader = () => {
  return ReactDOM.createPortal (
    <div className={styles.wrapper}>
        <div className={styles.loader}>
            <img src={loader} alt="Loading..." />
        </div>
    </div>,
    document.getElementById("loader")
  )
}

export default Loader