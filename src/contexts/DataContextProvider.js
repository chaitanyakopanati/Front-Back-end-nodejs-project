import React, { createContext, useState } from 'react';

export const DataContext = createContext();


const DataContextProvider = ({ children }) => {

  // const [data, setData] = useState([]);
  const[token,setToken]=useState(null);
  const[emaill,setEmaill]=useState(null);
  // const  initialValues= {
  //   name: '',
  //   email: '',
  //   mobileNo: '',
  // }
  // const addToData=(values)=>{
  //   setData([...data,{values}])
  // }
  const value = {
    // data,
    token,
    setToken,
    emaill,
    setEmaill
    // setData,
    // addToData
    // initialValues
    
  }
  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>

  )
}

export default DataContextProvider
