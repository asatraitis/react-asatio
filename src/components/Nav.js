import React, {useState, useRef, useCallback} from 'react';
import Logo from './Logo';
import MenuIcon from './MenuSVG'

const Nav = (props) => {
  let navigation = useRef();

  const {className, changeContent} = props;
  const [state, setState] = useState(-1);
  const [nav, setNav] = useState('in');

  const closeCheck = useCallback((e) => {
    if (!navigation.current.contains(e.target)) {
      setNav('in')
      document.removeEventListener('click', closeCheck);
    }
  }, [setNav])

  const select = (i, navItem) => {
    document.removeEventListener('click', closeCheck);
    setState(i)
    setNav('in')
    changeContent(navItem);
  }

  const openNav = () => {
    setNav('out')
    document.addEventListener('click', closeCheck);
  }

  return (
    <>
      <MenuIcon onClick={openNav} className={'menu-btn '+className} />
      <nav ref={navigation} className={className+' '+nav}>
        <Logo onClick={() => {select(-1, 'HOME')}} className="logo" />
        <ul>
          {props.navItems.map((navItem, i) => (
            <li key={navItem}>
              <div className="trail">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
              <a onClick={() => {select(i, navItem)}} href="#" className={state === i?'active':''}>{navItem}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Nav
