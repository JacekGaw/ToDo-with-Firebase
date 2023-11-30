import React from 'react';
import styles from './Deleters.module.css'

const Deleters = ({onDeleteList}) => {

    return ( 
        <div className={styles.deleters__container}>
            <p className={styles.deleter} onClick={() => onDeleteList("all")}>Clear All</p>
            <p className={styles.deleter} onClick={() => onDeleteList("active")}>Clear Active</p>
            <p className={styles.deleter} onClick={() => onDeleteList("done")}>Clear Done</p>
        </div>
    );
}
 
export default Deleters;