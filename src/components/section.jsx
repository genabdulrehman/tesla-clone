import React from 'react'
import styled from "styled-components"
import Fade from "react-reveal"

function section({title, description, leftButtonText, rightButtonText, bgImg}) {
  return (
    <Wrap bgImg={bgImg}>
        <Fade bottom>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
        </Fade>
        <Fade bottom>
        <Buttons>
        <ButtonGroup>
            <LeftButton>{leftButtonText}</LeftButton>
            {rightButtonText&&
                
                <RightButton>{rightButtonText}</RightButton>
            }
        </ButtonGroup>
        <DownArrow src="images/down-arrow.svg"/>
        </Buttons>
        </Fade>
       
        

      
    </Wrap>
  )
}

export default section

const 
Wrap = styled.div`

width:100vw;
height: 100vh;
background-position:center;
background-repeat:no-repeat;
background-image:${props=>`url("/${props.bgImg}")`};
background-size:cover;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;

`

const ItemText = styled.div`
padding-top:15vh;

text-align:center;
p{
    padding-top:10px;
}
`

const ButtonGroup = styled.div`
display:flex;

margin-bottom:30px;
// justify-content:space-between;
@media (max-width:768px){
    flex-direction:column;
}
` 
const LeftButton = styled.div`
background-color: rgba(23,26,32, 0.8);
height: 40px;
width: 256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:8px;

`
const RightButton = styled(LeftButton)`
background-color:white;
color:black;
opacity:0.65`

const DownArrow = styled.img`

height:40px;
overflow-x:hidden;
animation:animateDown infinite 1.5s;
`

const Buttons = styled.div``