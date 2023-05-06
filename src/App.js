import  { useEffect, useState } from "react";
import Forms from "./Components/Forms";
import { type } from "@testing-library/user-event/dist/type";
//import UsersList from "./UsersList";
//import Cart from "./Cart";


const App = (props) => {
 //const[total,setTotal]= useState(0)
const[comingData, setComingData] = useState([])
const[cart,setCart]=useState(0)



useEffect(()=>{
  localStorage.setItem('ItemsAdded', JSON.stringify(comingData))}
  ,[comingData])

 const  receivedData = (data) =>{
  //console.log(data)
  setComingData((previouData) =>{
    //console.log(previouData)
        return [...previouData,data]
  }) }

  // delete event------ <UsersList users={comingData}  />
 // const[deleteItem, setDeleteItem]= useState()
  //console.log(deleteItem)
  
  const removeItemHandler = (Id) =>{
    const newList = comingData.filter((item) => 
       item.Id!==Id
     );
   setComingData(newList);
  }


  const addToCart = (price)=>{
    const value= parseInt(price)
   // console.log(price,typeof price)
      setCart(cart+value)
      
  }
  return (
    <div>
      
     <Forms onAddData={receivedData} />
     <div>
        <ul>
          {comingData.map((user, ind) => (
            <li  key={ind}>   
              {user.Id} -{user.price}- {user.name}
              <button onClick={()=>removeItemHandler(user.Id)}>Remove Item</button>
              <button onClick={()=>addToCart(user.price)}>Cart</button>
               </li >
          ))}
          <div>Total Cart Value: {cart}</div>
        </ul>
      </div>
     </div>
  );
};

export default App;