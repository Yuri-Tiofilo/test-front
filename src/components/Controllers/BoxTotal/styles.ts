import styled from 'styled-components'

type PropsTextInfo = {
  isTotal?: boolean
  isDisccount?: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #CCC;

  margin-bottom: 20px;

  padding: 15px 14px 13px 13px;
`

export const Table = styled.table`
  tbody {}
`

export const TextInfo = styled.span<PropsTextInfo>`
  height: 17px;
  width: 124px;
  color:${({ isDisccount }) => !isDisccount ? '#212122' : '#FF7800'};
  font-size: 14px;
  line-height: 17px;

  font-weight: ${({ isTotal }) => isTotal ? 700 : 500};
`

export const Value = styled.div`
  text-align: right;
`
