import React from 'react'
import styled from 'styled-components'

// Define the styled button component
const StyledButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #45a049;
  }
`

const ButtonContainer = styled.div`
  width: 313px;
  height: 45px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 2px;
  padding-bottom: 2px;
  background-color: ${(props) => props.theme.colors.strongPink};
  border-radius: 22px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  display: inline-flex;
`

const ButtonText = styled.div`
  text-align: center;
  color: white;
  font-size: 16px;
  font-family: 'DM Sans';
  font-weight: 700;
  line-height: 24px;
  word-wrap: break-word;
`

// Define the React component that uses the styled button
const Button: React.FC = () => {
  return (
    <ButtonContainer>
      <ButtonText>Find Care</ButtonText>
    </ButtonContainer>
  )
  return <StyledButton>Click me</StyledButton>
}

export default Button
