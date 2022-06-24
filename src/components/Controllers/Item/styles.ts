import styled from 'styled-components'

export const Content = styled.div`
  box-sizing: border-box;
  height: 90px;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #eee;

  display: flex;

  padding: 12px 10px 14px 10px;

  & + div {
    margin-top: 15px;
  }
`

export const Info = styled.div`
  width: 75%;

  display: flex;
  flex-direction: column;

  margin-left: 11px;
`

export const TitleProduct = styled.small`
  margin-bottom: 15px;

  color: #212122;
  font-size: 13px;
  line-height: 16px;
`

export const Price = styled.span`
  width: 100%;
  color: #212122;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  text-align: right;
`

export const Image = styled.img`
  height: 65px;
  width: 65px;

  background: #f90;
`
