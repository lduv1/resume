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
`;


const items = [
    {
        title:'Discord Bot Web Interface', 
        link:'https://github.com/osu-cs419-w20/final-project-discord-site', 
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
        thumbnail: Controller, 
        description: "A demo layout of a DJ controller",
        tag: 'cats',
        images:[
            {url: Controller, description:'"Normal" view'},
            {url: ControllerLong, description:'Streched out view'}
        ]
    }
    // ,
    // {
    //     title:'Lisa Caballero Art', 
    //     link:'https://google.com', 
    //     thumbnail:'http://placekitten.com/200/200', 
    //     description: 'A gallery style webpage',
    //     tag: 'lisacab',
    //     images:[
    //         {url: 'http://placekitten.com/300/300', description:'cat1'},
    //         {url: 'http://placekitten.com/300/300', description:'cat2'}
    //     ]
    // }
]

function Portfolio() {
    return (
        <Main>
            <PortfolioMainContainer>
                <ul>
                    {items.map(item => <li key={item.tag}><PortfolioItem {...item}/></li>)}
                </ul>
            </PortfolioMainContainer>
        </Main>
    );
}

export default Portfolio;
