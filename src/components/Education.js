import React from 'react';
import styled from '@emotion/styled';
import Main from './Main';
const EducationMainContainer = styled.div`
    margin: auto;
    display: grid;
    grid-template-columns:1fr max-content 4fr max-content 1fr;
    grid-template-rows: auto auto auto auto;
    grid-template-areas:
    ". major . . ."
    ". school school school ."
    ". date date date ."
    ". focus . . .";
    @media screen and (max-width : 768px){
        padding: 0 5vw;
        .focus{
            font-size: 1rem;
        }
    }
    .major{
        grid-area: major;
        font-size: 1.8rem;
    }
    .school{
        grid-area: school;
        margin: auto 0 auto auto;
        /* margin:auto 15vw auto auto; */
    }
    .date{
        grid-area: date;
        margin: auto 0 auto auto;
        /* margin:auto 15vw auto auto; */
    }
    .focus{
        grid-area: focus;
    }
`;

function Education() {
    return (
        
        <Main>
            <EducationMainContainer>
                <h1 className="major">B.S. Computer Science</h1>
                <h2 className="school">Oregon State University</h2>
                <h2 className="date">March 2020</h2>
                <h3 className="focus">Focus in Human Computer Interaction</h3>
                
            </EducationMainContainer>
        </Main>
    );
}

export default Education;
