import React from 'react'
import { Icon, Navbar, NavItem } from 'react-materialize'

export default props => (
    <Navbar className='blue' 
        brand = {
            <div>
                <i className='fa fa-money'></i>
            </div>
        } right>
        <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
        <NavItem href='/'>Components</NavItem>
    </Navbar>
    // <header className='main-header'>
    //     <a href="/#/" className='logo'>
    //         <span className='logo-mini'><i className='fa fa-money'></i></span>
    //         <span className='logo-lg'>
    //             <i className='fa fa-money'></i>
    //             <b> My</b> Money
    //         </span>
    //     </a>
    //     <nav className='navbar navbar-static-top'>
    //         <a href="" className='sidebar-toggle' data-toggle='offcanvas'></a>
    //     </nav>
    // </header>
)