import React, {useState} from "react";
import styles from './Container.module.css';
import JsonLoader from '../components/JsonLoader'

function Container(){

    return(
        <div className={styles.mainScreen} id='mainScreen'> привет
            <JsonLoader/>
        </div>
    )

}
export default Container