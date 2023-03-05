import { styled } from '@mui/material'
import { Link } from 'react-router-dom'

export const LinkStyle = styled(Link)`
  text-decoration: none;
  font-family: Roboto;
  color: #0277bd;
  font-size: 26px;
  letter-spacing: 2px;
  :hover {
    color: #2962ff;
  }
  :active {
    color: #2962ff;
  }
`
