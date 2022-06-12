import React, { useState } from 'react'
import "../Styles/Header.css"
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Menu = styled.div`
@media(max-width: 768px){
    display:none;
    
}
display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: center;
    padding-top: 30px;
    padding-left:33%;
    flex: 1;
    position: fixed;

`
const Container = styled.div`
  
`


const sideMenu = styled.div`
    transform: ${props => props.show ? 'translateX(0%)' : 'translateX(100%)'}
`


export const Header = () => {
    const { sideMenu, sideMenuStatus } = useState(false);
    return (

        <Container className='container'>
            <div className='nav'>
                <a><img src='https://tesla-view.thron.com/api/xcontents/resources/delivery/getThumbnail/tesla/650x506/27123ba5-7449-4e4f-8b60-9389adcfacfb.jpg?v=12&dpr=300'></img>

                </a>
                <Menu className='menu'>
                    <div className='centerMenu'>
                        <p><a href='/'>MODEL S</a></p>
                        <p><a href=''>MODEL 3</a></p>
                        <p ><a href=''>MODEL X</a></p>
                        <p><a href=''>MODEL Y</a></p>
                        <p><a href=''>SOLAR PANELS</a></p>
                        <p><a href=''>SOLAR ROOFS</a></p>


                    </div>

                </Menu>
                <sideMenu show={sideMenu}>
                    <div className='rightMenu'>
                        <p><a href=''>SHOP</a></p>
                        <p><a href=''>ACCOUNT</a></p>
                        <MenuIcon onClick={() => sideMenuStatus(true)}></MenuIcon>

                        <div className='sidemenu'>
                            <div className='close'>
                                <CloseIcon onClick={() => sideMenuStatus(false)} ></CloseIcon>
                            </div>
                            <li><a href='/'>Model S</a></li>
                            <li><a href='/'>Model 3</a></li>
                            <li><a href='/'>Model X</a></li>
                            <li><a href='/'>Model Y</a></li>
                            <li><a href='/'>CyberTruck</a></li>
                            <li><a href='/'>Test-Drive</a></li>
                            <li><a href='/'>Solar Panels</a></li>
                            <li><a href='/'>Solar Roofs</a></li>
                            <li><a href='/'>Accessories</a></li>
                            <li><a href='/'>Shopping</a></li>
                            <li><a href='/'>Job Openings</a></li>
                            <li><a href='/'>Meet Sanjay</a></li>
                        </div>


                    </div>
                </sideMenu>
            </div>
        </Container>



    )

}
export default Header
