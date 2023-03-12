import { Layout } from 'antd'
import React from 'react'

const Footer = ({footer}) => {
  return (
    <Layout.Footer style={{ textAlign: 'center' }}>{footer}</Layout.Footer>
  )
}

export default Footer