import React from 'react'
import { SectionDark, WrappedContainer } from '../components/Layout'
import { Blogs, Header } from '../sections/Home'

const Home = () => {
  return (
    <>
      <WrappedContainer>
        <Header />
      </WrappedContainer>
      <SectionDark>
        <WrappedContainer>
          <Blogs />
        </WrappedContainer>
      </SectionDark>
    </>
  )
}

export default Home
