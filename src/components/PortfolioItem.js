import React, {useState} from 'react';
import styled from '@emotion/styled';
import { useTransition, animated } from 'react-spring';
import { FaArrowLeft, FaArrowRight, FaAngleUp, FaAngleDown } from 'react-icons/fa';

const Item = styled.div`
    margin: auto;
    display: grid;
    row-gap: .5rem;
    grid-template-columns: 1fr 1rem 2fr 2rem;
    /* grid-template-rows: max-content max-content max-content 30vh; */
    /* grid-template-rows: ${props => props.open ?
                     '1fr 1fr 1fr auto' :
                     '1fr 1fr 1fr'}; */
    grid-template-rows: max-content max-content max-content 1fr max-content;
    grid-template-areas:
    "title title title toggle"
    "thumbnail . description toggle"
    "thumbnail . url toggle"
    "thumbnail . . toggle"
    "images images images images";
    /* ${props => props.open ? '"images images images images"' : ""}; */

    
    h2{
        grid-area: title;
        margin: 0;
    }
    > img{
        box-shadow: 1px 1px 8px var(--color-dark-gray);
        grid-area: thumbnail;
        border-radius: 2px;
        height: auto;
        width: 100%;
        margin: auto;
        &:hover{
            cursor: pointer;
        }
    }
    > button{
        grid-area: toggle;
    }
    > a{
        grid-area: url;
    }
    button{
        background: transparent;
        border: none;
        font-size: 1.5rem;
        min-width: 2rem;
        width: 100%;
        padding: 0;
        margin: auto;
        height: 100%;
        &:hover{
            cursor: pointer;
            color: var(--color-link-hover)
        }
    }
    .description{
        grid-area: description;
    }
    .imageViewContainer{
        grid-area: images;
        /* height: 100%; */
        /* display: ${props => props.open ? 'grid' : 'none'}; */
        display: grid;
        grid-template-columns: 1fr 8fr 1fr;
        grid-template-areas: "prev img next";
        margin-top: .5rem;
        
        > div{
            grid-area: img;
            height: 100%;
            z-index: -1;
            .galimg{
                /* height: auto; */
                border-radius: 2px;
                max-width: 100%;
                max-height: 30vh;
                display:block;
                margin: 0 auto;
                box-shadow: 1px 1px 8px var(--color-dark-gray);
            }
            .description{
                padding-top: .5rem;
                text-align: center;
            }
        }
        button:nth-of-type(1){
            grid-area: prev;
        }
        button:nth-of-type(2){
            grid-area: next;
        }
    }
`;
//${props => props.open ? 'grid' : 'none'};
function PortfolioItem(props) {

    const [open, setOpen] = useState(false)
    const [curr, setCurr] = useState(0)
    const [dir, setDir] = useState(true);
  
    
  
  
    const imageTransitions = useTransition(curr, p => p, {
      from:  {opacity: 0,
                display:'inline-block', 
                width: '100%',
                height:'100%', 
                transform: 
                    dir ?
                    'translate3d(25%,0,0)' :
                    'translate3d(-25%,0,0)'},
      enter: {opacity: 1,
              display:'inline-block', 
              width: '100%', 
              transform: 'translate3d(0%,0,0)'},
      leave: {opacity: 0,
            display:'inline-block', 
            width: '50%',
            height:'100%', 
            transform: 
                dir ?
                'translate3d(-25%,0,0)' :
                'translate3d(100%,0,0)'}
    });

    const dropTransitions = useTransition(open, p => p, {
        from:  {opacity: 0,
                transform: 'translate3d(50%,-4rem,0)',
                width:'0%',
                height: '0%'},
        enter: {opacity: 1,
                transform: 'translate3d(0,0,0)',
                width:'100%',
                height: '100%'},
        leave: {opacity: 0,
                transform: 'translate3d(50%,-4rem,0)',
                width:'0%',
                height: '0%'}
    });

    // const dropTransitions = useTransition(open, p => p, {
    //     enter: open => async (next, cancel) => {
    //         await next({height: 'auto'})
    //         await next({life: '100%'})
    //         await next({opacity: 1})
    //       },
    //     leave: open => async (next, cancel) => {
    //       await next({life: '0%'})
    //       await next({opacity: 0})
    //       await next({height: 0})
    //     },
    //     from: {life: '0%', opacity: 0, height: 0}
    // });

    function toggleOpen(){
        setOpen(!open);
    }
    function prev(){
        setCurr(state => (state + props.images.length - 1) % props.images.length, [])
        setDir(false)
        // console.log("curr", curr);
    }
    function next(){
        setCurr(state => (state + 1) % props.images.length, [])
        setDir(true)
        // console.log("curr", curr);
    }

    const images = props.images;

    return (
        <Item open={open}>
            <h2>{props.title}</h2>
            <div className="description">{props.description}</div>
            <a target="_blank" rel="noopener noreferrer" href={props.link}>{props.linktext}</a>
            <img alt="thumbnail" src={props.thumbnail} onClick={toggleOpen}/>
            <button onClick={toggleOpen}>{open ? <FaAngleUp /> : <FaAngleDown />}</button>
            {dropTransitions.map(({ item, props, key }) => 
            {let k = key;
            return item && 
                <animated.div className="imageViewContainer" key={k} style={props}>
                    <button onClick={prev}><FaArrowLeft /></button>
                        {imageTransitions.map(({ item, props, key }) => 
                            images.map(image =>  
                                <animated.div key={`${k}-${key}`} style={props}>
                                    <img className="galimg" alt={image.description} src={image.url} />
                                    <div className="description">{image.description}</div>
                                </animated.div>
                                )[item]
                        )}
                    <button onClick={next}><FaArrowRight /></button>
                </animated.div>})}
        </Item>
    );
}

export default PortfolioItem;
