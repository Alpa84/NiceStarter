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

// Define the React component that uses the styled button
const Button: React.FC = () => {
  return <StyledButton>Click me</StyledButton>
}

export default Button
