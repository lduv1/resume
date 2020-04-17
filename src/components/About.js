import React from 'react';
import styled from '@emotion/styled';
import Main from './Main';

const AboutMainContainer = styled.div`
    margin: auto;
    display: grid;
    height: 100%;
    column-gap: 3rem;
    grid-template-columns: 1fr max-content;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
    "education languages"
    "highlights software";
    h2{
        margin-top: 0;
    }
    .education{
        grid-area: education;
        display: grid;
        grid-template-rows: max-content 1fr;
        grid-template-columns: 1fr 1fr;
        column-gap: 3rem;
        row-gap: 2rem;
        >h2{
            grid-column: 1/3;
            margin: 0 auto .5rem auto;
        }
        >div{
            display: grid;
            grid-row: 2/3;
            grid-template-rows: repeat(5, max-content) 1fr;
            h2{
                font-size: 1.3rem;
                margin: 0
            }
            h3{
                margin: auto 0 auto auto;
            }
            h4{
                margin: 0;
            }
        }
    }
    .highlights{
        grid-area: highlights;
        margin: auto 0;
    }
    .languages{
        grid-area: languages;
    }
    .software{
        grid-area: software;
        margin: auto 0;
    }

    @media screen and (max-width : 768px){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-areas:
        "education" 
        "highlights" 
        "languages"
        "software";
        
    }
    @media screen and (max-width : 1200px){
        .education{
            grid-template-columns: 1fr;
            grid-template-rows: max-content 1fr 1fr;
            >h2{
                grid-column: 1/2;
            }
            >div{
                grid-row: auto;
            }
        }
    }
`;

function About() {
    return (
        <Main>
            <AboutMainContainer>
                <div className="education">
                    <h2>Degrees {'&'} Certifications</h2>
                    <div className="osu">
                        <h2 className="major">B.S. Computer Science</h2>
                        <h3 className="school">Oregon State University</h3>
                        <h3 className="date">March 2020</h3>
                        <h4 className="focus">Focus in Human Computer Interaction</h4>
                        <div className="transcript">transcript?</div>
                    </div>
                    <div className="unige">
                        <h2 className="major">B2 French Certification</h2>
                        <h3 className="school">University de Geneve</h3>
                        <h3 className="date">2014</h3>
                    </div>
                </div>
                <div className="highlights">
                    <h2>Highlights:</h2>
                    <ul>
                        <li>Able to communicate technical knowledge to other disciplines</li>
                        <li>Bilingual (English/French)</li>
                        <li>Comfortable public speaker</li>
                    </ul>
                </div>
                <div className="languages">
                    <h2>Languages I've worked with:</h2>
                    <ul >
                        <li>Javascript (ES6)</li>
                        <li>CSS (SASS/LESS)</li>
                        <li>Python</li>
                        <li>C/C++</li>
                        <li>PHP 7</li>
                        <li>SQL</li>
                    </ul>
                </div>
                <div className="software">
                    <h2>Software I've worked with:</h2>
                    <ul >
                        <li>Adobe CC (Illustrator, XD, Photoshop)</li>
                        <li>Balsamiq</li>
                        <li>InVision</li>
                        <li>Simics</li>
                    </ul>
                </div>
            </AboutMainContainer>
        </Main>
    );
}

export default About;
