import React, { useState } from "react";
                                                               

const Forms = (props) =>{
    const[product, setProduct]= useState('')
    const[productSell, setProductSell]= useState('')
    const[productName, setProductName]= useState('')
   
   
   
    
     
   
    const productIdHandler = (event) =>{
        setProduct(event.target.value)
       }

       const productSellHandler = (event) =>{
        setProductSell(event.target.value)
        
        

       }
       const productNameHandler = (event) =>{
        setProductName(event.target.value)
    }



    const submitDataHandler= (event)=>{
       event.preventDefault()
      // const id = product.target.value
       //const price=productSell.target.value
       //const name = productName.target.value
       const products={
            Id:product,
            price:productSell,
            name:productName
        }

         props.onAddData(products)
      

         setProductName('')
         setProduct('')
         setProductSell('')
    }
    return(
        <>
        <form  onSubmit={submitDataHandler}>
            <label>Product_ID</label>
            <input type="text" onChange={productIdHandler} />      
            <label>Selling Price</label>
            <input type="number"  onChange={productSellHandler}/>
            <label>Product_Name</label>
            <input type="text"  onChange={productNameHandler}/>
            <button> Add Products</button>
          

        </form>
      
      
        </>
    )

}


export default Forms