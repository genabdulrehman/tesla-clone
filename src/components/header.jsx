import React, { useState } from 'react'
import styled from "styled-components"
// import CloseIcon from "@material-ui/icons/Close"
import {GrClose} from "react-icons/gr";

import {MdOutlineMenu} from 'react-icons/md'

import {selectCars} from "../features/car/car-slide"
import {useSelector} from "react-redux"
function Header() {

  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  // console.log("Cars ->" + cars);

  return (
    <Container>
      <a href="#">
        <img src="images/logo.svg" alt="" />
      </a>

      <Menu>
        {cars&& cars.map((car, index)=>
            <a key={index} href="#">{car}</a>
        )}
    
    
      </Menu>
     
      <RightMenu>
      <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomIcon onClick={()=>setBurgerStatus(true)}>

        <MdOutlineMenu/>
        </CustomIcon>
      </RightMenu>
      
      <BurgerMenu show={burgerStatus}>
        <Closewrapper>

        <CustomClose onClick={()=>setBurgerStatus(false)} />
        </Closewrapper>

        {cars&& cars.map((car, index)=>
            <li>
            <a href="#">{car}</a>
            </li>
        )}
        
       
        
        <li>
        <a href="#">Insurance</a>
        </li>
        <li>
        <a href="#">Cybertruck</a>
        </li>
        <li>
        <a href="#">Roadster</a>
        </li>
        <li>
        <a href="#">Charging</a>
        </li>
        <li>
        <a href="#">Semi</a>
        </li>
        <li>
        <a href="#">Power wall</a>
        </li>
        <li>
        <a href="#">Commercial energy </a>
        </li>
        <li>
        <a href="#">Utilities</a>
        </li>
        <li>
        <a href="#">Find us</a>
        </li>
        <li>
        <a href="#">Support</a>
        </li>
        <li>
        <a href="#">Investor relations</a>
        </li>
      </BurgerMenu>
   
    </Container>
  )
}

export default Header

const Container = styled.div`
left:0;
right:0;
top:0;
min-height:60px;
position:fixed;
z-index:10;

display:flex;
justify-content:space-between;

align-items:center;
// justify-content:center;

padding:0 20px;
`

const Menu = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex: 1;


a{
  font-size:15px;
  font-weight:600;
  text-transform:uppercase;
  padding:0 10px;
  flex-wrap:nowrap;
}
@media(max-width:768px){
  display:none;
}


`

const RightMenu = styled.div`
padding:0 20px; 
display:flex;
align-items:center;

a{
  font-size:15px;
  font-weight:800;
  text-transform:uppercase;
  
  margin-right:10px;
 
}
`

const CustomIcon=styled(MdOutlineMenu)`
cursor:pointer;`


const BurgerMenu = styled.div`
position:fixed;
top:0;
right:0;
bottom:0;
background:white;
width:300px;
padding: 20px;
z-index:100;
list-style:none;
display:flex;
flex-direction:column;
justify-content:flex-start;

transform:${props=>props.show ? 'translateX(0)' : 'translateX(100%)'};
transition:transform 0.3s ease-in-out;

text-align:start;

li{

  font-weight:800;
  font-size:15px;
  cursor:pointer;
  padding:13px 0;
  // border-bottom:1px solid rgba(0,0,0,0.2);
  
}
`


const CustomClose = styled(GrClose)`
margin-bottom:30px;
cursor:pointer;`
const Closewrapper = styled.div`

display:flex;
justify-content:flex-end;
`

