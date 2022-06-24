import React from 'react'

import { Text } from './styles';

type PropsActiveLink = {
  title: string
  active?: boolean
}

const ActiveLink: React.FC<PropsActiveLink> = ({ title, active }) => {
  return <Text active={active}>{title}</Text>
}

export default ActiveLink
