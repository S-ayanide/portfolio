import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  Paper,
  LinearProgress,
  Typography,
  Box,
  Button,
} from '@material-ui/core'

const CardPaper = styled(Paper)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 1.5rem;
  padding: 1rem 1rem;
  height: 10rem;
`

const BookDetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
`

const BookContent = styled.p`
  width: 85%;
  letter-spacing: 2px 0;
  font-size: 10px;
`

const ProgressBarWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`

const LinearProgressWithLabel = ({ value }) => {
  return (
    <ProgressBarWrapper>
      <Box style={{ margin: 'auto 0', width: '100%' }}>
        <LinearProgress variant="determinate" value={value} />
      </Box>
      <Box style={{ marginLeft: '3%', width: '15%' }}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          value
        )}%`}</Typography>
      </Box>
    </ProgressBarWrapper>
  )
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
}

const CurrentlyReading = () => {
  const [progress, setProgress] = React.useState(90)
  const details =
    'With Redux, you manage the state of a web application in a single, simple object, practically eliminating most state-related bugs. Centralizing state with Redux makes it possible to quickly start saved user sessions, maintain a reliable state history, and smoothly transfer state between UIs. Plus, the Redux state container is fully programmable and integrates cleanly with React and other popular frameworks.'

  return (
    <CardPaper elevation={3}>
      <div style={{ width: '25%' }}>
        <img
          src={
            'https://images-na.ssl-images-amazon.com/images/I/41sscWDYKXL._SX258_BO1,204,203,200_.jpg'
          }
          style={{ height: '100%', width: '60%' }}
          alt="Currently Reading Book"
        />
      </div>
      <BookDetailsDiv>
        <Typography variant="h6">Currently Reading</Typography>
        <LinearProgressWithLabel value={progress} />
        <BookContent>{details}</BookContent>
        <Button variant="contained" color="primary" style={{ width: '30%' }}>
          Read More
        </Button>
      </BookDetailsDiv>
    </CardPaper>
  )
}

export default CurrentlyReading
