import React, {useEffect, useState} from 'react';

import RechReads from '../rrr.png';
import AfterCollegeLife101 from '../acl101.png';
import IREC from '../irec.png';
import AG from '../ag.png';

const Content = (props) => {
  const [state, setState] = useState('slide-in')
  const [page, setPage] = useState('HOME')
  useEffect(() => {
    setState('slide-out');
    setTimeout(() => {
      setPage(props.page)
      setTimeout(() => {setState('slide-in');}, 20)
    }, 200)
  }, [props.page, setState, setPage])
  let map = {
    HOME: (<>        <h1 className="name">ANDY<span className="thin small">SATRAITIS</span></h1>
            <h2 className="position"><span className="normal">UI/UX</span><span className="accent">&</span><span className="normal">FRONTEND DEV</span></h2></>),
    ABOUT: (
      <div className="about">
        <h2 style={{maxWidth: '80vw'}}>Hi, I'm Andy and I am a UI/UX and frontend developer for Allegis Group in Baltimore, MD. I strive for innovative solutions.</h2>
      </div>
    ),
    PROJECTS: (
      <div className="projects">
      <a href="https://reschreads.com">
      <img src={RechReads} alt="Resch Reads & Reviews"/>
       </a>
       <br/>
       <a href="https://aftercollegelife101.com">
       <img src={AfterCollegeLife101} alt="After College Life 101"/>
       </a>
       <br/>
       <a href="http://www.ireccontracting.com/">
       <img src={IREC} alt="IREC"/>
       </a>
       <br/>
       <a href="https://www.allegisgroup.com">
       <img src={AG} alt="Allegis Group"/>
       </a>
      </div>
    ),
    CONTACT: (
      <div className="contact">
      <h2>{`Say Hello at sat1{at]umbc.edu`}</h2>
      <a href="https://www.linkedin.com/in/asatraitis/"><LinkedInIcon /></a>
      <a href="https://www.youtube.com/channel/UCUa7tKcxbqSpeTCd4UEaR5w"><YouTubeIcon /></a>
      <a href="https://github.com/asatraitis"><GitHubIcon /></a>
      <a href="https://codepen.io/asatraitis"><CodePenIcon /></a>
      </div>
    )
  }
  return <div className={`page ${state}`}>{map[page]}</div>
}

const LinkedInIcon = () =>
 (
    <svg style={{fill: 'white', height: '50px'}} viewBox="0 0 16 16">
    <path d="M14.5 0h-13C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5h13c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5zM6 13H4V6h2v7zM5 5c-.553 0-1-.447-1-1s.447-1 1-1c.553 0 1 .447 1 1s-.447 1-1 1zm8 8h-2V9c0-.553-.447-1-1-1s-1 .447-1 1v4H7V6h2v1.241C9.412 6.675 10.044 6 10.75 6 11.994 6 13 7.119 13 8.5V13z"/>
    </svg>
  )
const GitHubIcon = () => (
  <svg style={{fill: 'white', height: '50px'}} viewBox="0 0 16 16"><path d="M8 .198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.533 5.471 7.591.4.074.547-.174.547-.385 0-.191-.008-.821-.011-1.489-2.226.484-2.695-.944-2.695-.944-.364-.925-.888-1.171-.888-1.171-.726-.497.055-.486.055-.486.803.056 1.226.824 1.226.824.714 1.223 1.872.869 2.328.665.072-.517.279-.87.508-1.07-1.777-.202-3.645-.888-3.645-3.954 0-.873.313-1.587.824-2.147-.083-.202-.357-1.015.077-2.117 0 0 .672-.215 2.201.82.638-.177 1.322-.266 2.002-.269.68.003 1.365.092 2.004.269 1.527-1.035 2.198-.82 2.198-.82.435 1.102.162 1.916.079 2.117.513.56.823 1.274.823 2.147 0 3.073-1.872 3.749-3.653 3.947.287.248.543.735.543 1.481 0 1.07-.009 1.932-.009 2.195 0 .213.144.462.55.384 3.177-1.059 5.466-4.057 5.466-7.59 0-4.418-3.582-8-8-8z"/></svg>
)
const CodePenIcon = () => (
  <svg style={{fill: 'white', height: '50px'}} viewBox="0 0 16 16"><path d="M14.777 5.751l-7-4.667a.5004.5004 0 0 0-.555 0l-7 4.667a.5011.5011 0 0 0-.223.416v4.667c0 .167.084.323.223.416l7 4.667c.084.056.181.084.277.084s.193-.028.277-.084l7-4.667a.5011.5011 0 0 0 .223-.416V6.167c0-.167-.084-.323-.223-.416zM7.5 10.232L4.901 8.5 7.5 6.768 10.099 8.5 7.5 10.232zM8 5.899V2.434l5.599 3.732L11 7.898l-3-2zm-1 0l-3 2-2.599-1.732L7 2.435V5.9zM3.099 8.5L1 9.899V7.101L3.099 8.5zM4 9.101l3 2v3.465l-5.599-3.732L4 9.102zm4 2l3-2 2.599 1.732L8 14.565V11.1zM11.901 8.5L14 7.101v2.798L11.901 8.5z"/></svg>
)
const YouTubeIcon = () => (
  <svg style={{fill: 'white', height: '50px'}} viewBox="0 0 16 16"><path d="M15.841 4.8s-.156-1.103-.637-1.587c-.609-.637-1.291-.641-1.603-.678-2.237-.163-5.597-.163-5.597-.163h-.006s-3.359 0-5.597.163c-.313.038-.994.041-1.603.678C.317 3.697.164 4.8.164 4.8S.005 6.094.005 7.391v1.213c0 1.294.159 2.591.159 2.591s.156 1.103.634 1.588c.609.637 1.409.616 1.766.684 1.281.122 5.441.159 5.441.159s3.363-.006 5.6-.166c.313-.037.994-.041 1.603-.678.481-.484.637-1.588.637-1.588s.159-1.294.159-2.591V7.39c-.003-1.294-.162-2.591-.162-2.591zm-9.494 5.275V5.578l4.322 2.256-4.322 2.241z"/></svg>
)


export default Content
