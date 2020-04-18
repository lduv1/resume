import React from 'react';
import styled from '@emotion/styled';

const MainMainContainer = styled.main`
    margin-top: 2rem;
    margin-bottom: 2rem;
    /* height: 90%; */
    display: grid;
    grid-template-columns: 1fr 80vw 1fr;
    @media screen and (max-width : 768px){
        grid-template-columns: 1fr 90vw 1fr;
    }
    > div {
        grid-column: 2/3
    }
`;

function Main(props) {


    return (
        <MainMainContainer>
            <div>
                {props.children}
            </div>
        </MainMainContainer>
    );
}

export default Main;
