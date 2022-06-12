import React from 'react'
import '../Styles/Section.css'
import styled from 'styled-components'
import "../images/32.png"
import Fade from 'react-reveal'

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
   
    
    background-image: ${props => `url("${props.bgimage}")`}

`;
const sectionText = styled.h1`

`;
const Downarrow = styled.img`
    margin-top:28px;
    height:30px;
    animation: animateDown infinite 1.5s;
    cursor:pointer;
    
`

const Section = ({ name, about, leftbtn, rightbtn, image }) => {
    return (

        <Wrapper bgimage={image}>
            <Fade bottom>
                <sectionText className='name'>
                    <h1 >
                        {name}
                    </h1>
                    <p>
                        {about}
                    </p>
                </sectionText>
            </Fade>
            <Fade bottom>
                <div className='Buttons'>
                    <button className='left'>
                        {leftbtn}
                    </button>
                    {rightbtn &&
                        <button className='right'>
                            {rightbtn}
                        </button>
                    }


                </div>
            </Fade>
            <Downarrow src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0xNTMuODIxNzUsNDguNzE2MzFsLTY3LjgyMTc1LDU5Ljg4NTU2bC02Ny44MjE3NSwtNTkuODg1NTZsLTcuMzMxNSw3Ljg1ODI1bDY5LjY1MTk0LDY4LjY3MzY5bDUuNTAxMzEsNS40MjMzOGw1LjUwMTMxLC01LjQyMzM4bDY5LjY1MTk0LC02OC42NzM2OXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="></Downarrow>

        </Wrapper>


    )
}

export default Section