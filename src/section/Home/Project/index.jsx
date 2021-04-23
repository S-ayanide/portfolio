import React from 'react';
import RectangleCard from '../../../components/Cards/RectangleCard';
import Center from '../../../components/Layout/Center';

const Project = () => 
    <>
    <RectangleCard
        image="https://github.com/S-ayanide/Dooraemi-Version2.0/blob/master/assets/logo/DooraemiLogo.jpg?raw=true"
        title="Dooraemi: The Smart Doorbell"
        description="A smart Doorbell to receive alert and know who is outside, no matter where you are! 😉👌"
        button="Read More"
      />
      <RectangleCard
        image="https://camo.githubusercontent.com/aa7cf90f12c62b33455d0564bb26075495f1c375d0119b941cd90255f763e967/68747470733a2f2f692e6962622e636f2f77437033766a672f636f6c6c696e2e6a7067"
        title="Collin CLI"
        description="An interactive CLI to initialize boilerplate project template and also push it over to github to get users started directly with the project and not waste any time."
        button="Read More"
      />
      <RectangleCard
        image="https://avatars.githubusercontent.com/in/73114?s=120&u=9c47ce76f850a77b3f32853df4d634f19ad368ba&v=4"
        title="CodeSniffy"
        description="Sniffy is wise and caring dog to ease your tasks by sniff the size of PRs, he'll let you know automatically as well as attach any labels depending on area the PR is submitted."
        button="Read More"
      />
      <RectangleCard
        image="https://marcomjobs.netlify.app/static/media/marcomjobs_logo.3f17ee2e.png"
        title="Marcom Jobs"
        description="Marcomjobs is a job seekers platform assisting Vietnamese and Indian people to look for jobs as well as Job-related activities like Career Tips, Job Reviews, Educational Communities, etc"
        button="Read More"
      />
      <Center>
        <p style={{ color: '#873260', marginTop: '0.8rem', fontSize: '1rem' }}>
          View More
        </p>
      </Center>
    </>

export default Project;