import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import { Switch, Route, useLocation } from 'react-router-dom';
import About from './components/About.js';
// import Education from './components/Education.js';
import Portfolio from './components/Portfolio.js';
import Work from './components/Work.js';
import Navbar from './components/Navbar.js';
import { useTransition, animated } from 'react-spring';

const Body = styled.div`
  background-color: var(--color-white);
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content auto;

  nav{
    grid-column: 1/2;
    grid-row: 1/2;
  }
  > div{
    grid-row: 2/3;
    grid-column: 1/2;
    overflow-y: scroll;
    padding-bottom: 8rem;
  }
`;

export const routes = [
  {id: 0, path: '/about', component: About},
  {id: 1, path: '/work', component: Work},
  // {id: 2, path: '/education', component: Education},
  {id: 3, path: '/portfolio', component: Portfolio}
]

function App() {

  const location = useLocation()
  const pathname = routes.map(route => route.path).includes(location.pathname) ? location.pathname : '/about' ;
  let curr = routes.filter(route =>{return route.path === pathname})[0].id;
  const [dir, setDir] = useState(curr);

  useEffect(
    () => {
      setDir(routes.filter(route =>{return route.path === pathname})[0].id)
    },
    [pathname],
  )

  let locationDirection = {...location, dir}

  const transitions = useTransition(locationDirection, locationDirection => locationDirection.pathname, {
    from:  previousDir => ({opacity: 0,
                        display:'inline-block', 
                        width: '0vw', 
                        transform: 
                            previousDir.dir < routes.filter(route =>{return route.path === pathname})[0].id ?
                            'translate3d(100vw,0,0)' :
                            'translate3d(-100vw,0,0)', 
                        life: '0%'}),
    enter: {opacity: 1,
            display:'inline-block', 
            width: '100vw', 
            transform: 'translate3d(0vw,0,0)', 
            life: '100%'},
    leave: previousDir => ({opacity: 0,
                        display:'inline-block', 
                        width: '0vw', 
                        transform: 
                            previousDir.dir < routes.filter(route =>{return route.path === pathname})[0].id ?
                            'translate3d(-100vw,0,0)' :
                            'translate3d(100vw,0,0)', 
                        life: '0%'})
  });

  return (
    <Body>
      
      <Navbar />

      {transitions.map(({ item, props, key }) => (
      <animated.div key={key} style={props}>
        <Switch location={item}>
          {routes.map(route => (
            <Route key={`${key}-${route.id}`} path={route.path} component={route.component} /> 
          ))}
          <Route exact path="/" component={About} />
          <Route path="/" ><div>404</div></Route>
        </Switch>
      </animated.div>
      ))}
            
    </Body>
  );
}

export default App;
