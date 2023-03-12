import { DesktopOutlined, FileOutlined, HomeOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, theme } from 'antd';
import Footer from './Footer';
import Header from './Header';
import Content from './Content'
import Side from './Side'
import { Link } from 'react-router-dom';
function getItem(name, path, key, icon, children) {
  const label = <> <span>{name}</span><Link to={path}></Link></>; 
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Dashboard', '/','/', <PieChartOutlined />),
  getItem("Plannings", '/plannings', 'planning',  <PieChartOutlined />),
  getItem('Inventory', '', 'sub1', <TeamOutlined />, [
    getItem('Mouvments', '/mouvements', 'mouvement'), 
    getItem('Stock', '/stocks', 'stock'),
  ]),
  getItem('Health', '', 'sub2', <TeamOutlined />, [
    getItem('Pharmacies','/pharmacies', 'pharmacy'), 
    getItem('Doctors', '/doctors', 'doctor'),
    getItem('Specialty', '/specialties', 'specialty'),
  ]),
  getItem('Catalog', '', 'sub3', <TeamOutlined />, [
    getItem('Products','/products', 'product'), 
    getItem('Categories', '/categories', 'category'),
    getItem('Suppliers', '/suppliers','supplier'),
  ]),
  getItem('User Listing', '', 'sub4', <UserOutlined />, [
    getItem('Users', '/users', 'user'),
    getItem('Roles', '/roles', 'role'),
    getItem('Permissions', '/permissions', 'permission'),
  ]),
  
  // getItem('Files', '14', <FileOutlined />),
];

const Main = ({children}) => {
  
  const {token: { colorBgContainer }} = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Side  items={items}/>
      <Layout className="site-layout">
          <Header  colorBgContainer={colorBgContainer}/>
          <Content colorBgContainer={colorBgContainer}>
             {/* <Breadcrumb
                style={{
                    margin: '16px 0',
                }}
                >
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
                style={{
                    padding: 24,
                    minHeight: 360,
                    background: colorBgContainer,
                }}
                >
                Bill is a cat.
                </div> */}
                {children}
          </Content>
          <Footer footer={'Zakaria Achaghour ©2022'} />
      </Layout>
    </Layout>
  );
};

export default Main;