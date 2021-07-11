import styled from 'styled-components'

const SectionLight = styled.section`
  background-color: ${props => props.theme.backgroundLight};
  padding: ${props => (props.theme.screens.lg ? '3rem 0' : '5rem')};

  & > div {
    margin: 0 auto;
  }
`

const SectionDark = styled.section`
  background-color: ${props => props.theme.backgroundDark};
  padding: ${props => (props.theme.screens.lg ? '3rem 0' : '5rem')};

  & > div {
    margin: 0 auto;
  }
`

export { SectionLight, SectionDark }
