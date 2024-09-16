import React, {useState} from "react";
import styles from './Table.module.css';

function Table(props){

    const data = props.data;
    
    let totalCount = 0;
    let totalPrice = 0;

    for(let row of data){
        totalCount = totalCount + row.product_quantity;
        totalPrice = totalPrice + row.price
    }
    
    return(
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Barcode</th> 
                    <th>Product brand</th> 
                    <th>Product name</th> 
                    <th>Product quantity</th>
                    <th>Price</th>  
                </tr>
            </thead>
            <tbody>
            {data.map((rowContent, rowID) => (
                        <tr>
                            <td>{rowContent.barcode}</td>
                            <td>{rowContent.product_brand}</td>
                            <td>{rowContent.product_name}</td>
                            <td>{rowContent.product_quantity}</td>
                            <td>{rowContent.price}</td>
                        </tr>
                    ))}
                    <tr>
                            <td colspan="3">Итого:</td>
                            <td>{totalCount}</td>
                            <td>{totalPrice}</td>
                    </tr>
            </tbody>
        </table>
    )

}

export default Table;