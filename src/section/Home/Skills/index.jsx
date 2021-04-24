import React from 'react'
import styled from 'styled-components'
import SkillCard from '../../../components/Cards/SkillCard'

const Wrapper = styled.div`
  width: ${props => props.theme.screens.sm ? '100%' : '80%'};
  display: grid;
  grid-template-columns: ${props =>
    props.theme.screens.md ? '1fr' : '1fr 1fr'};
`

const Skills = () => (
  <Wrapper>
    <SkillCard
      heading="Project Management"
      skillImage={[
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-256%2Fjira-1-458321.png&f=1&nofb=1',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.simpletivity.com%2Fuploads%2F8%2F0%2F8%2F8%2F8088493%2Ftrello-logo_1_orig.png&f=1&nofb=1',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pofilo.fr%2Fimg%2FSPOF-github%2Fgithub1600.png&f=1&nofb=1',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gartner.com%2Fimagesrv%2Fpeer-insights%2Fvendors%2Flogos%2Fasana.png&f=1&nofb=1',
      ]}
      name={['Jira', 'Trello', 'GitHub', 'Asana']}
      anchorImage={
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcubelogic.com%2Fwp-content%2Fuploads%2F2018%2F11%2FBusiness-Process-Management.png&f=1&nofb=1'
      }
    />
    <SkillCard
      heading="Frameworks/Libraries"
      skillImage={[
        'https://camo.githubusercontent.com/e60124892e8db98b9ccf57ba0d67a6f155523d7afcc99624246b20a69bf4c7cd/68747470733a2f2f696d6167652e666c617469636f6e2e636f6d2f69636f6e732f7376672f3931392f3931393835312e737667',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fraw.githubusercontent.com%2Freduxjs%2Fredux%2Fmaster%2Flogo%2Flogo.png&f=1&nofb=1',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F2400%2F1*4_Zw6Xyk4wv6hgoNEjDB2Q.png&f=1&nofb=1',
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.netgains.org%2Fwp-content%2Fuploads%2F2014%2F01%2Fnode_js.png&f=1&nofb=1',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fseeklogo.com%2Fimages%2FR%2Frollup-js-logo-F3925E2546-seeklogo.com.png&f=1&nofb=1',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2Fe%2Fe3%2FESLint_logo.svg%2F1200px-ESLint_logo.svg.png&f=1&nofb=1',
      ]}
      name={['React', 'Redux', 'Gatsby', 'Node JS', 'Rollup', 'ESLint']}
      anchorImage={
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fonline-internet-3%2F32%2Fweb_dev_online_web_development-512.png&f=1&nofb=1'
      }
    />
    <SkillCard
      heading="Testing"
      skillImage={[
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Ftags%2Fimages%2F000%2F001%2F217%2Fthumb%2Fcypress.png&f=1&nofb=1',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fmocha-2-logo-png-transparent.png&f=1&nofb=1',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fjest-logo-png-transparent.png&f=1&nofb=1',
      ]}
      name={['Cypress', 'Mocha', 'Jest']}
      anchorImage={
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftraining.kansheinfotech.com%2Fwp-content%2Fuploads%2F2016%2F12%2Fqa-testing1-1.png&f=1&nofb=1'
      }
    />
    <SkillCard
      heading="Languages"
      skillImage={[
        'https://github.com/MarikIshtar007/MarikIshtar007/raw/master/images/js.svg',
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.software-architects.com%2Fcontent%2Fimages%2Fblog%2F2016%2F12%2Ftypescript-logo.png&f=1&nofb=1',
      ]}
      name={['JavaScript', 'TypeScript']}
      anchorImage={
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Fcomputer-70%2F64%2Fcoding-programmer-code-programming-language-512.png&f=1&nofb=1'
      }
    />
    <SkillCard
      heading="CI/CD"
      skillImage={[
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fcircleci-logo-black-and-white.png&f=1&nofb=1',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftravis.ibm.com%2Fimages%2Flogos%2FTravisCI-Mascot-1.png&f=1&nofb=1',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F44036562%3Fs%3D280%26v%3D4&f=1&nofb=1',
      ]}
      name={['Circle CI', 'Travis CI', 'GitHub Action']}
      anchorImage={
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.instana.com%2Fmedia%2Fci-cd-loop-1024x456.png&f=1&nofb=1'
      }
    />
  </Wrapper>
)

export default Skills
