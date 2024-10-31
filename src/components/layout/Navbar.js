import React,{useContext,useState} from 'react'
import { DataContext } from '../../contexts/DataContextProvider';

const Navbar = () => {
  const { token, setToken } = useContext(DataContext)
  // const[show,setShow]=useState(true);
  const logout=()=>{
    setToken('');
  }
  return (<> {token?(<div><a className=" nav-link d-flex flex-d-flex justify-content-end"onClick={logout} href="/">𝐋𝐨𝐠𝐨𝐮𝐭</a></div>):''}
    {!token&&(<div className='navba'>

<nav className="navbar navbar-expand-lg navbar-light ">
  {/* <!-- Container wrapper --> */}
  <div className="container-fluid">
    {/* <!-- Toggle button --> */}
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    {/* <!-- Collapsible wrapper --> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <!-- Navbar brand --> */}
      {/* <a className="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
          height="15"
          alt="MDB Logo"
          loading="lazy"
        />
      </a> */}
      {/* <!-- Left links --> */}
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li class="nav-item">
          <a class="nav-link"  href="/">Dashboard</a>
        </li> */}
        <li className="nav-item fw-bold">
          <a className="nav-link" href="/">𝐂𝐨𝐦𝐛𝐢𝐧𝐚𝐭𝐢𝐨𝐧 𝐨𝐟 𝐋𝐨𝐠𝐢𝐧 𝐚𝐧𝐝 𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐭𝐢𝐨𝐧</a>
        </li>
        {/* {<li className="nav-item">
          <a className=" nav-link d-flex flex-d-flex justify-content-center"onClick={()=>setToken('')} href="/">𝐋𝐨𝐠𝐨𝐮𝐭</a>
        </li>} */}
      </ul>
      {/* <!-- Left links --> */}
    </div>
    {/* <!-- Collapsible wrapper --> */}

    {/* <!-- Right elements --> */}
          {/* <!-- Avatar --> */}
                {/* <!-- Notifications --> */}
                  {/* <!-- Icon --> */}
    {/* <div className="d-flex align-items-center">
    
      <a className="text-reset me-3" href="#">
        <i className="fas fa-shopping-cart"></i>
      </a>


      <div className="dropdown">
        <a
          className="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fas fa-bell"></i>
          <span className="badge rounded-pill badge-notification bg-danger">1</span>
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a className="dropdown-item" href="#">Some news</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Another news</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </div>

      <div className="dropdown">
        <a
          className="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a className="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div> */}
    {/* <!-- Right elements --> */}
  </div>
  {/* <!-- Container wrapper --> */}
</nav>
    </div>)}
    </> )
}

export default Navbar