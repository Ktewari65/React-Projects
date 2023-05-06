const Cart= (props)=>{
  //  console.log(props)
   return(
    <div>
        {
            <div>
            <ul>
              {props.cart.map((items) => (
                <li>   
                  Total Cart amount:  {items.price} 
                
                </li >
              ))}
            </ul>
          </div>
         
        }


    </div>

)

}

export default Cart