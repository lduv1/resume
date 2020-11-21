import React from 'react';
import styled from '@emotion/styled';
import Main from './Main';
import WorkItem from './WorkItem';
const WorkMainContainer = styled.div`
    margin: auto;

    > ul{
        margin: 0;
        list-style: none;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
        row-gap: 3rem;
        column-gap: 5rem;
        > li{

        }
    }
`;

const items = [
    {title:"Independent contractor", company:'Oregon Health and Science University', date:'Jul 2020 - Present', 
    items:[
        'Parsed data from electroretinogram machine output to CSV',
        'Filtered and modeled data',
        'Graphed analyzed output']},
    {title:"UX Designer", company:'WaTutor', date:'Jun 2020 - Oct 2020', 
    items:[
        'Designed login and account creation flow',
        'Designed UI for video call system',
        'Refined ideas with project lead to realize abstract requirements']},
    {title:"Teacher's Assistant", company:'Oregon State University', date:'Sept 2016 - Mar 2020', 
    items:[
        'Taught classes of 15 students, which strengthened my presentation skills',
        'As a senior TA, mentored newer TAs',
        'Gave course feedback to new instructors']},
    {title:'BIOS Firmware Intern', company:'Intel', date:'June 2019 - Dec 2019', 
    items:[
        'Worked independently with external teams by email, set up and ran sync meetings to resolve issues across time zones',
        'Took ownership of adding new features to existing tools', 
        'Analyzed debug workarounds in BIOS codebase and created a presentation of current status', 
        'Removed unnecessary workarounds and filed tickets for remaining issues']},
    {title:'UX Design Intern', company:'Inseego', date:'April 2018 - Sept 2018', 
    items:[
        'Self taught how to use prototyping software',
        'Designed user interfaces for a customer facing online storefront',
        'Designed user interfaces for updated management tools',
        'Implemented front end web interfaces of my designs', 
        'Redesigned legacy user interfaces for existing tool', 
        'Redesigned website style for new clients']},
    {title:'Line Cook', company:"Pietro's Pizza", date:'June 2016 - Sept 2016', 
    items:[
        'Taught new employees',
        'Maintained composure during rush hours']},
    {title:'Level 2 Judge', company:'Magic: The Gathering', date:'2014 - 2018', 
    items:[
        'While in high school, traveled to major tournaments across the country as an independent contractor',
        'Maintained professional demeanor while mediating conflict between competitors']}
]

function Work() {
    return (
        <Main>
            <WorkMainContainer>
                <ul>
                    {items.map(item => <li><WorkItem {...item}/></li>)}
                </ul>
            </WorkMainContainer>
        </Main>
    );
}

export default Work;
