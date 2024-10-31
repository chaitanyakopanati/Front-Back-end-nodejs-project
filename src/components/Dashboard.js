import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from '../contexts/DataContextProvider';
import axios from 'axios';


const Dashboard = () => {
  const { token, setToken } = useContext(DataContext);
  const { emaill, setEmaill } = useContext(DataContext);
  const [data, setData] = useState(null)

  // ?email=mitul@gmail.com
  const getData = async () => {
    console.log("Token: ", token);
    console.log("Email: ", emaill);
    let dataa = await axios.get(`http://localhost:5000/myprofile?email=${emaill}`,

      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "Application/json",
          "x-token": token
        }
      }
    ).then((response) => {
      setData(response.data)
      console.log(response.data, 'response')
      // var response = response.data;
    }).catch((err) => console.log(err))
    // (error) => {
    //   // var status = error.response.status
    //   console.log(error.response)
    // }
    console.log(data, "data")
    if (token) {
      console.log("token", token)
      // history.push('/Dashboard')
    }
  }

  useEffect(() => {
    getData();
    // const auth=localStorage.getItem('user')
    // console.log("auth",auth)
    // if(auth){}
  }, []);
  return (<>

    {data && <div className="d-flex flex-d-flex justify-content-center">Welcome To  {data.username}</div>}
  </>)
}

export default Dashboard