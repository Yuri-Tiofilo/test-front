import styled from 'styled-components'

export const Item = styled.div`
  box-sizing: border-box;
  height: 90px;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #EEE;

  & + div {
    margin-top: 15px;
  }
`
