import React, {useState, useEffect, useCallback} from 'react';

import './styles.css';

import GearSVG from './components/GearSVG';

import Nav from './components/Nav'
import Content from './components/Content'

function App() {
  const [loader, setLoader] = useState('svg-gear');
  const [text, setText] = useState('');
  const [content, setContent] = useState('HOME');

  const state = {setLoader, setText};

  const animate = (array, index = 0) => {
    let length = array.length;
    setTimeout(() => {
      state[array[index].action](prevState => prevState+' '+array[index].value)
      if (index !== length - 1) {
        animate(array, index+1);
      }
    }, array[index].delay)
  }

  const changeContent = useCallback((val) => {
    setContent(val)
  }, [setContent])

  useEffect(() => {
    animate([
      {value: 'zoom', delay: 0, action: 'setLoader'},
      {value: 'rotate', delay: 500, action: 'setLoader'},
      {value: 'zoomout', delay: 750, action: 'setLoader'},
      {value: 'show', delay: 300, action: 'setText'}
    ])
    return () => {
      //before unmounting
    }
  }, [])
  return (
    <div className="container">
      <GearSVG className={loader}/>
      <Nav className={text} changeContent={changeContent} navItems={['PROJECTS', 'ABOUT', 'CONTACT']} />
      <div className={"content "+text}>
      <div className="text">
        <Content page={content} />
      </div>
      </div>
    </div>
  );
}

export default App;
