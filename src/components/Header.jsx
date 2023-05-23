import React from 'react'
import Wrapper from './Wrapper';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.svg";
import SearchBox from './SearchBox';

function Header() {
  return (
    <header>
        <Wrapper>
          <div className="appHeader">
          <div class="headerLeft">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <Link to="/favourite" style={{marginTop:"1rem"}}>
              Favourite
            </Link>
          </div>
           <SearchBox/>
          </div>
        </Wrapper> 
    </header>
  )
}

export default Header
