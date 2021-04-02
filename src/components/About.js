import React from 'react';
import styled from '@emotion/styled';
import Main from './Main';
import transcript from '../assets/Transcript.pdf'

const AboutMainContainer = styled.div`
    margin: auto;
    display: grid;
    height: 100%;
    column-gap: 3rem;
    row-gap: 3rem;
    grid-template-columns: 1fr max-content;
    grid-template-rows: auto;
    grid-template-areas:
    "education languages"
    "highlights software"
    "references .";
    h2{
        margin-top: 0;
    }
    h1{
        margin: 0;
        font-size: 1.8rem;
    }
    .education{
        grid-area: education;
        display: grid;
        grid-template-rows: max-content 1fr;
        grid-template-columns: 1fr;
        column-gap: 3rem;
        row-gap: 2rem;
        >h1{
            grid-column: 1/2;
            /* margin: 0 auto .5rem auto; */
        }
        >div{
            display: grid;
            grid-row: 2/3;
            grid-template-rows: repeat(5, max-content) 1fr;
            h3{
                /* margin: auto 0 auto auto; */
                margin: 0 auto .2rem 2.5rem;
            }
            h4{
                margin: 0;
                margin: 0 auto 0 2.5rem;
            }
        }
    }
    .highlights{
        grid-area: highlights;
    }
    .languages{
        grid-area: languages;
    }
    .software{
        grid-area: software;
    }
    .references{
        grid-area: references;
    }

    @media screen and (max-width : 768px){
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-template-areas:
        "education" 
        "highlights" 
        "languages"
        "software"
        "references";
        
    }
    /* @media screen and (max-width : 1200px){
        .education{
            grid-template-columns: 1fr;
            grid-template-rows: max-content 1fr 1fr;
            >h1{
                grid-column: 1/2;
            }
            >div{
                grid-row: auto;
            }
        } 
    }*/
`;

function About() {
    return (
        <Main>
            <AboutMainContainer>
                <div className="education">
                    {/* make like others */}
                    <h2>B.S. Computer Science</h2>
                    <div className="osu">
                        <h3 className="school">Oregon State University, Magna Cum Laude</h3>
                        <h3 className="date">March 2020</h3>
                        <h4 className="focus">Focus in Human Computer Interaction</h4>
                        <h4 className="transcript"><a target="_blank" rel="noopener noreferrer" href={transcript}>Unofficial Transcript</a></h4>
                    </div>
                </div>
                <div className="highlights">
                    <h2>Highlights</h2>
                    <ul>
                        <li>Able to communicate technical information to other disciplines</li>
                        <li>Bilingual (English/French)</li>
                        <li>Comfortable with public speaking</li>
                        <li>Teaching experience</li>
                    </ul>
                </div>
                <div className="languages">
                    <h2>Languages I've worked with</h2>
                    <ul >
                        <li>Javascript (ES6+)</li>
                        <li>CSS (SASS/LESS)</li>
                        <li>Python</li>
                        <li>C/C++</li>
                        <li>PHP 7</li>
                        <li>SQL</li>
                    </ul>
                </div>
                <div className="software">
                    <h2>Software I've worked with</h2>
                    <ul >
                        <li>Adobe CC (Illustrator, XD, Photoshop)</li>
                        <li>Balsamiq</li>
                        <li>InVision</li>
                        <li>Simics</li>
                    </ul>
                </div>
                <div className="references">
                    <h2>References available upon request</h2>
                </div>
            </AboutMainContainer>
        </Main>
    );
}

export default About;
