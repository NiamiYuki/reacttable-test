import React, {useState} from "react";
import styles from './JsonLoader.module.css';
import Table from "./Table";

function JsonLoader(){
    const [data, setData] = useState([]);

    const handleLoadJson = (e) => {
        fetch("DATA.json")
        .then((responce) => responce.json())
        .then((data) => {
            setData(data)
        });
        
    }

    const updateData= (rowID, value, col) =>{
        data[rowID][col] = value;
        setData([...data]);
    }

    return(
        <div>
            <button  onClick={() => handleLoadJson()}>Загрузить данные</button>
            <Table
            data={data}
            updateData = {updateData}
            />
        </div>
    )

}
export default JsonLoader