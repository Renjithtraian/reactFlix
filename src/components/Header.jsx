import React,{ useContext } from 'react'
import Wrapper from './Wrapper';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.svg";
import SearchBox from './SearchBox';
import { AppContext } from './Context/AppContext';

function Header() {
  const {state} = useContext(AppContext)
  return (
    <header>
        <Wrapper>
          <div className="appHeader">
          <div class="headerLeft">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <Link to="/favourite" style={{marginTop:"1rem"}}>
              <div className="favCount">
              <span className="count">
                  {state.favourites.length}
                </span>
                Favourite
                
              </div>
            </Link>
          </div>
           <SearchBox/>
          </div>
        </Wrapper> 
    </header>
  )
}

export default Header
