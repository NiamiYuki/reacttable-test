import React, {useState} from "react";
import styles from './JsonLoader.module.css';

function JsonLoader(){
    const [data, setData] = useState('');

    const handleLoadJson = (e) => {
        fetch("DATA.json")
        .then((responce) => responce.json())
        .then((data) => {
            setData(data)
            console.log(data);
        });
        
    }

    return(
        <div>
            <button  onClick={() => handleLoadJson()}>Загрузить данные</button>
        </div>
    )

}
export default JsonLoader