import React from 'react';
import styled from '@emotion/styled';

const Item = styled.div`
    margin: auto;
    display: grid;
    h2{
        margin: 0;
    }
    h3{
        display: block;
        margin: .4rem 0 .4rem auto;
    }
    .date{
        margin: 0 0 .4rem auto;
    }
    ul{
        /* list-style: none; */
        padding: 0 0 0 1.5rem;
        li{
            margin-bottom: .4rem;
        }
    }
`;

function WorkItem(props) {
    return (
        <Item>
            <h2>{props.title}</h2>
            <h3>{props.company}</h3>
            <div className="date">{props.date}</div>
            {props.items && <ul>
                {props.items.map(item => 
                <li>{item}</li>
                )}
            </ul>}
        </Item>
    );
}

export default WorkItem;
