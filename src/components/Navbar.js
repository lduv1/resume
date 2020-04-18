import React from 'react';
import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

import GitHublogo from '../assets/GitHub-Mark-64px.png'
import Linkedinlogo from '../assets/LI-In-Bug.png'


const Nav = styled.nav`
    display: grid;
    padding-bottom: 1rem;
    grid-template-columns: 6fr 4fr;
    grid-template-rows: 4rem 1fr;
    grid-template-areas:
    "name socials"
    "links links";

    > a{
        text-decoration: none;
        margin: auto auto auto 4rem;
        grid-area: name;

        h1{
            margin: 0;
            font-size:2rem;
        }
    }

    .links{
        grid-area: links;
        margin: auto;
        border-bottom: 1px solid var(--color-dark-gray);
        padding-bottom: .5rem;
        
        a{
            padding: 1rem 1.5rem .5rem 1.5rem;
            text-decoration: none;
            &:hover{
                border-bottom: 1px solid var(--color-link-hover);
            }
            &.active{
                border-bottom: 1px solid var(--color-link-hover);
            }
        }
    }
    .socials{
        grid-area: socials;
        margin: auto 4rem auto auto;
        img{
            margin: .5rem;
            height: 32px;
            width: 32px;
        }
    }

    @media screen and (max-width : 768px){
        grid-template-columns: 8fr 4fr;
        > a{
            margin: auto auto auto 2rem;
            h1{
            
            }
        }
        .links{
            a{
                padding: .7rem .7rem .5rem .7rem;
            }
        }
        .socials{
            margin: auto 2rem auto auto;
            img{
                height: 20px;
                width: 20px;
            }
        }
    }
`;


function Navbar() {
    
    return (
        <Nav>
            <Link to='/'><h1>Louis Duvoisin</h1></Link>
            <div className="links">
                <NavLink exact to="/">About</NavLink>
                <NavLink to="/work">Work</NavLink>
                {/* <NavLink to="/education">Education</NavLink> */}
                <NavLink to="/portfolio">Portfolio</NavLink>
            </div>
            <div className="socials">
                <a href="https://github.com/lduv1" target="_blank" rel="noopener noreferrer">
                    <img src={GitHublogo} alt="GitHub Logo"/>
                </a>
                <a href="https://www.linkedin.com/in/louis-duvoisin/" target="_blank" rel="noopener noreferrer">
                    <img src={Linkedinlogo} alt="Linkedin Logo"/>
                </a>
            </div>
        </Nav>          
    );
}

export default Navbar;