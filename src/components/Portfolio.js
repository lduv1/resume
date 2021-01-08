import React from 'react';
import styled from '@emotion/styled';
import Main from './Main';
import PortfolioItem from './PortfolioItem';

import DiscChat from '../assets/disc-chat.png'
import DiscPlaylists from '../assets/disc-playlists.png'
import DiscServers from '../assets/disc-servers.png'
import DiscSongs from '../assets/disc-songs.png'
import Controller from '../assets/Controller.png'
import ControllerLong from '../assets/Controller-long.png'
import Show from '../assets/show.jpg'
import Home from '../assets/home.jpg'
import HomeMobile from '../assets/homemobile.jpg'
import Gallery from '../assets/gallery.jpg'
import GalleryMobile from '../assets/gallerymobile.jpg'


const PortfolioMainContainer = styled.div`
    margin: auto;

    > ul{
        margin: 0;
        list-style: none;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
        @media screen and (max-width : 768px){
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        }
        row-gap: 3rem;
        column-gap: 3rem;
        > li{
            transition: 1s;
        }
    }
    > h2{

    }
`;


const items = [
    {
        title:'Lisa Caballero Art', 
        link:'https://www.lisacaballeroart.com', 
        linktext:'lisacaballeroart.com', 
        thumbnail: Home, 
        description: 'A contracted web-gallery for an artist',
        tag: 'lisacab',
        images:[
            {url: Home, description:'Home'},
            {url: Gallery, description:'Paintings from 2010-2011'},
            {url: Show, description:'A writeup for a gallery show'},
            {url: HomeMobile, description:'Home (mobile)'},
            {url: GalleryMobile, description:'Paintings from 2010-2011 (mobile)'}
        ]
    },
    {
        title:'Discord Bot Web Interface', 
        link:'https://github.com/osu-cs419-w20/final-project-discord-site', 
        linktext:'github.com', 
        thumbnail: DiscServers, 
        description: 'A web interface for me to play my spotify music through my discord bot',
        tag: 'disc',
        images:[
            {url: DiscServers, description:'Servers'},
            {url: DiscChat, description:'Chat'},
            {url: DiscPlaylists, description:'Playlists'},
            {url: DiscSongs, description:'Songs'}
        ]
    },
    {
        title:'DJ Controller Layout', 
        link:'https://dj-controller-layout.herokuapp.com/', 
        linktext:'herokuapp.com', 
        thumbnail: Controller, 
        description: "An interactive layout of a DJ controller",
        tag: 'cats',
        images:[
            {url: Controller, description:'"Normal" view'},
            {url: ControllerLong, description:'Streched out view'}
        ]
    }
    
]

function Portfolio() {
    return (
        <Main>
            <PortfolioMainContainer>
                <ul>
                    {items.map(item => <li key={item.tag}><PortfolioItem {...item}/></li>)}
                </ul>
                <h2>My other work is proprietary to my employers</h2>
            </PortfolioMainContainer>
        </Main>
    );
}

export default Portfolio;
