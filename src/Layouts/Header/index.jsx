import { Layout } from 'antd'
import React from 'react'

const index = ({colorBgContainer}) => {
  return (
    <Layout.Header
    style={{
      padding: 0,
      background: colorBgContainer,
    }}
  />
  )
}

export default index