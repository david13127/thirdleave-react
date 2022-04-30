import React from 'react';
import { PageHeader, Descriptions, Menu } from 'antd';
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons'

function Item(label, key, icon, children, type) {
  return { key, icon, children, label, type };
}

const items = [
  Item('网站介绍', '1', <PieChartOutlined />),
  Item('思维导图', '2', <DesktopOutlined />),
  Item('理想国', '3', <ContainerOutlined />),
  Item('路线', 'sub1', <MailOutlined />,
    [
      Item('前端', '5'),
      Item('后端', '6'),
      Item('算法', '7'),
      Item('挑战', '8'),
    ]),
  Item('收获与分享', 'sub2', <AppstoreOutlined />,
    [
      Item('笔记', '9'),
      Item('成果', '10')
    ]),
];

function App() {
  return (
    <div className="App">
      <div style={{
        width: 256
      }}
      >
        <Menu
          style={{
            height: 620,
            overflowY: 'auto',
            overflowX: 'hidden'
          }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={items}
        />
      </div>
      <div className="site-page-header-ghost-wrapper" style={{ position: 'absolute', bottom: 0 }}>
        <PageHeader
          ghost={false}
          title="Third Leave"
          subTitle="三叶小窝"
        >
          <Descriptions size="small" column={3}>
            <Descriptions.Item label="Created">David Zhang</Descriptions.Item>
            <Descriptions.Item label="Association"><a>zhanglong9313@qq.com</a></Descriptions.Item>
          </Descriptions>
          <Descriptions size="small" column={3}>
            <Descriptions.Item label="Beian">
              <span>©2022 三叶小窝&nbsp;</span>
              <span>
                <a href="http://beian.miit.gov.cn/" target="_blank">蜀ICP备2022009133号-1</a>
              </span>
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
      </div>
    </div >
  );
}

export default App;
