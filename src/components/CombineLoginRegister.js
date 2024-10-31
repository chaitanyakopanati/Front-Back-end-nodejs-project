import React, { createContext, useEffect, useState, useContext } from 'react';
import axios from 'axios';
import {
  MDBContainer,
  MDBCard,
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCardImage,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import { useParams, useHistory, useNavigate } from "react-router-dom";
import { DataContext } from '../contexts/DataContextProvider';
import Dashboard from './Dashboard';

// export const store =createContext();

function CombineLoginRegister() {
  // const[token,setToken]=useState(null);
  const { token, setToken } = useContext(DataContext)
  const { emaill, setEmaill } = useContext(DataContext)
  const navigate = useNavigate();
  // let { id } = useParams();
  // console.log("id",id)
  const [justifyActive, setJustifyActive] = useState('tab1');;
  console.log("justifyActive", justifyActive)
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  // const[data,setData]=useState('')
  // let user = JSON.parse(sessionStorage.getItem('data'));
  // const token = user.data.id;

  const post = async (e) => {
    e.preventDefault();
    try {
      let data = await axios.post(` http://localhost:5000/register`, {
        username: username,
        email: email,
        password: password,
        confirmpassword: confirmpassword
      },
        setUsername(''),
        setEmail(''),
        setPassword(''),
        setConfirmpassword('')
      )


    } catch (err) {
      console.log(err.message)
    }
  }

  // ${email}



  const postLogin = async (e) => {
    e.preventDefault();
    try {
      let result = await axios.post(` http://localhost:5000/login`, {
        email: email,
        // password:password,
        password: confirmpassword,
        // method:'post',body:JSON.stringify({email,password,confirmpassword}),
        //  headers:{
        //   'x-token':'',
        //   'Accept' : 'application/json',
        //   'Content-Type': 'application/json'
        // }

      },
        //   { 
        //     Authorization: `TOKEN`,
        //     'Content-Type': 'application/json',
        //     'Accept': 'application/json'
        // }, 
        //setUsername(''),
        setEmail(''),
        //setPassword(''),
        setConfirmpassword('')
      ).then(res => {
        console.log("Res: ", res);
        setToken(res.data.token);
        setEmaill(res.data.email);
        if (res.data.token) {
          navigate('/dashboard');
        }
      });


      // if(token){
      //  return<Redirect to='/'/>
      // }
      // if(token){
      //   return<Redirect to='/my'>
      // }


      // if(token) {
      //   navigate('/dashboard');
      // }
      // if(token){
      //   return<Redirect to='/my'>
      // }
      // result=await result.json();
      // console.warn(result);
      // localStorage.setItem('user', JSON.stringify(result.result));
      // localStorage.setItem('token', JSON.stringify(result.auth));

      // .then(res=>{
      //   const token = res.data.token;
      //   localStorage.setItem('token', token);
      // }).catch(err => {
      //   console.log(err);
      // });


    } catch (err) {
      console.log(err.message)
    }
  }
  return (<>
    {/* <store.Provider value={[token,setToken]}> */}
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50" autocomplete='off'>
      <MDBCard>
        <MDBRow className='g-0'>
          <MDBCol className='' md='6'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100' />
          </MDBCol>
          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>



              <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                    Login
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                    Register
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>

              <MDBTabsContent>

                <MDBTabsPane show={justifyActive === 'tab1'}>

                  <div className="text-center mb-3">
                    <p>Sign in with:</p>

                    <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='facebook-f' size="sm" />
                      </MDBBtn>

                      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='twitter' size="sm" />
                      </MDBBtn>

                      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='google' size="sm" />
                      </MDBBtn>

                      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='github' size="sm" />
                      </MDBBtn>
                    </div>

                    <p className="text-center mt-3">or:</p>
                  </div>

                  <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' onChange={(e) => setEmail(e.target.value)} value={email} />
                  <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={(e) => setConfirmpassword(e.target.value)} value={confirmpassword} />

                  <div className="d-flex justify-content-between mx-4 mb-4">
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                    <a href="!#">Forgot password?</a>
                  </div>

                  <MDBBtn className="mb-4 w-100" onClick={postLogin}>Sign in</MDBBtn>
                  <p className="text-center">Not a member? <a href="#!">Register</a></p>

                </MDBTabsPane>

                <MDBTabsPane show={justifyActive === 'tab2'}>

                  <div className="text-center mb-3">
                    <p>Sign un with:</p>

                    <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='facebook-f' size="sm" />
                      </MDBBtn>

                      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='twitter' size="sm" />
                      </MDBBtn>

                      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='google' size="sm" />
                      </MDBBtn>

                      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='github' size="sm" />
                      </MDBBtn>
                    </div>

                    <p className="text-center mt-3">or:</p>
                  </div>


                  <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text' onChange={(e) => setUsername(e.target.value)} value={username} />
                  <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' onChange={(e) => setEmail(e.target.value)} value={email} />
                  <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' onChange={(e) => setPassword(e.target.value)} value={password} />
                  <MDBInput wrapperClass='mb-4' label='ConfirmedPassword' id='form1' type='text' onChange={(e) => setConfirmpassword(e.target.value)} value={confirmpassword} />

                  <div className='d-flex justify-content-center mb-4'>
                    <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
                  </div>

                  <MDBBtn className="mb-4 w-100" type="submit" onClick={post}>Sign up</MDBBtn>

                </MDBTabsPane>

              </MDBTabsContent>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>

    </MDBContainer>
    {/* </store.Provider> */}
  </>);
}

export default CombineLoginRegister;