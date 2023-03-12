import { Layout, Menu } from 'antd'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';


const Index = ({items}) => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
  return (
    <Layout.Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        >
            Images
        </div>
        <Menu theme="dark"
               defaultSelectedKeys={[location.pathname]}
               mode="inline" 
               items={items} />
      </Layout.Sider>
  )
}

export default Index