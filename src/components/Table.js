import React, {useState} from "react";
import styles from './Table.module.css';

function Table(props){

    const [isActive, setIsActive] = useState({isActive:false, activatedRow:'', activatedCol: ''});
    const [editingValue, setEditingValue] = useState();

    const data = props.data;
    
    let totalCount = 0;
    let totalPrice = 0;

    for(let row of data){
        totalCount = totalCount + row.product_quantity;
        totalPrice = totalPrice + row.price
    }

    const handleEdit= (rowID, value, col) => {
        setEditingValue(value);
        setIsActive({isActive:true, activatedRow:rowID, activatedCol:col });
    }

    const handleSave = (e, rowID, col) =>{
        if(e.key==="Enter" ){
            setIsActive ({isActiveTd:false, activatedTdID:'', activatedCol:''});
            props.updateData(rowID,editingValue, col)
        }
    }
    const handleChange =(e, digitsOnly) =>{
        if(digitsOnly){
            if(!isNaN(e.target.value)){
                setEditingValue(+e.target.value);     
            }
        }else{
        setEditingValue(e.target.value); 
        }}
    
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
                            <td onDoubleClick={()=>handleEdit(rowID, rowContent.barcode, 'barcode')}>
                                {(rowID!==isActive.activatedRow || isActive.activatedCol!=='barcode') && rowContent.barcode}
                                {isActive.isActive && rowID===isActive.activatedRow && isActive.activatedCol==='barcode'&&
                                    <input 
                                        onChange={(e) =>handleChange(e, true)}
                                        onKeyDown={(e)=>handleSave(e, rowID, 'barcode')}type="text" value={editingValue}>
                                    </input>} 
                            </td>

                            <td onDoubleClick={()=>handleEdit(rowID, rowContent.product_brand, 'product_brand')}>
                                {(rowID!==isActive.activatedRow || isActive.activatedCol!=='product_brand')  && rowContent.product_brand}
                                {isActive.isActive && rowID===isActive.activatedRow && isActive.activatedCol==='product_brand'&&
                                    <input 
                                        onChange={(e) =>handleChange(e, false)}
                                        onKeyDown={(e)=>handleSave(e, rowID, 'product_brand')}type="text" value={editingValue}>
                                    </input>} 
                            </td>

                            <td onDoubleClick={()=>handleEdit(rowID, rowContent.product_name, 'product_name')}>
                                {(rowID!==isActive.activatedRow || isActive.activatedCol!=='product_name')  && rowContent.product_name}
                                {isActive.isActive && rowID===isActive.activatedRow && isActive.activatedCol==='product_name'&&
                                    <input 
                                        onChange={(e) =>handleChange(e, false)}
                                        onKeyDown={(e)=>handleSave(e, rowID, 'product_name')}type="text" value={editingValue}>
                                    </input>} 
                            </td>

                            

                            <td onDoubleClick={()=>handleEdit(rowID, rowContent.product_quantity, 'product_quantity')}>
                                {(rowID!==isActive.activatedRow || isActive.activatedCol!=='product_quantity')  && rowContent.product_quantity}
                                {isActive.isActive && rowID===isActive.activatedRow && isActive.activatedCol==='product_quantity'&&
                                    <input 
                                        onChange={(e) =>handleChange(e, true)}
                                        onKeyDown={(e)=>handleSave(e, rowID, 'product_quantity')}type="text" value={editingValue}>
                                    </input>} 
                            </td>

                            <td onDoubleClick={()=>handleEdit(rowID, rowContent.price, 'price')}>
                                {(rowID!==isActive.activatedRow || isActive.activatedCol!=='price')  && rowContent.price}
                                {isActive.isActive && rowID===isActive.activatedRow && isActive.activatedCol==='price'&&
                                    <input 
                                        onChange={(e) =>handleChange(e, true)}
                                        onKeyDown={(e)=>handleSave(e, rowID, 'price')}type="text" value={editingValue}>
                                    </input>} 
                            </td>
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