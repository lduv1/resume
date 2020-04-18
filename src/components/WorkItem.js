import React from 'react';
import styled from '@emotion/styled';

const Item = styled.div`
    margin: auto;
    display: grid;
    h3{
        font-weight: 600;
    }
    .title{
        margin: 0;
    }
    .company{
        display: block;
        margin: .4rem 0 .1rem auto;
    }
    .date{
        margin: 0 0 .8rem auto;
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
            <h3 className="title">{props.title}</h3>
            <h3 className="company">{props.company}</h3>
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
