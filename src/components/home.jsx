import React from 'react'
import styled from "styled-components";
import Section from "./section"

function home() {
  return (
    <Container>
        <Section
        title="Model S"
        description="Online delivery which is touchless"
        bgImg="images/model-s.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Investory"
        />
        
        <Section
        title="Model X"
        description="Online delivery which is touchless"
        bgImg="images/model-x.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Investory"
        />
        <Section
        title="Model Y"
        description="Online delivery which is touchless"
        bgImg="images/model-y.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Investory"
        />
        <Section
        title="Model 3"
        description="Online delivery which is touchless"
        bgImg="images/model-3.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Investory"
        />
        <Section
        title="Lowest cost possible in America"
        description="Money Back guarantee"
        bgImg="images/solar-panel.jpg"
        leftButtonText="Shop Now"
        rightButtonText="Learn More"
        />
        <Section
        title="Solar for New Roofs"
        description="Solar for new roof cost less than cost of roof and solar"
        bgImg="images/solar-roof.jpg"
        leftButtonText="Shop Now"
        rightButtonText="Learn More"
        />
        <Section
        title="Accessories"
        description=""
        bgImg="images/accessories.jpg"
        leftButtonText="Shop Now"
        // rightButtonText="Learn More"
        />
       
    </Container>
  )
}

export default home


const Container = styled.div`
height:100vh`