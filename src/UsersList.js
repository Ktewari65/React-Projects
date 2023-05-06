//import React from "react";

import { useState } from "react"

const UsersList = (props) =>{
  console.log(props)
  const[deleteItem, setDeleteItem]= useState()
  
  const removeItemHandler = (Id) =>{
    const newList = props.users.filter((item) => 
       item.Id!==Id
     );
   setDeleteItem(newList);
  }

   
    return(
        <div>
        <ul>
          {props.users.map((user, ind) => (
            <li  key={ind}>   
              {user.Id} {user.price}  {user.name}
              <button onClick={()=>removeItemHandler(ind)}>Remove Item</button>
            </li >
          ))}
        </ul>
      </div>
    )


}

export default UsersList