import styled from 'styled-components'

interface PropsText {
  active?: boolean
}

export const Text = styled.span<PropsText>`
  color: ${({ active }) => active ? '#FF7800' : '#CCC'};
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
`
