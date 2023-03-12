import { Layout, Typography, Row, Col, Card, Button } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Title level={2} style={{ color: '#fff' }}>Sensity Intranet</Title>
      </Header>
      <Content style={{ padding: '50px' }}>
        <Row gutter={[32, 32]} justify="center">
          <Col span={8}>
            <Card title="Nieuws" bordered={false}>
              <Paragraph>Blijf up-to-date met het laatste nieuws en updates binnen Sensity.</Paragraph>
              <Button type="primary" size="large">Lees Meer</Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Evenementen" bordered={false}>
              <Paragraph>Informatie over evenementen en activiteiten binnen Sensity.</Paragraph>
              <Button type="primary" size="large">Bekijk Kalender</Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Documenten" bordered={false}>
              <Paragraph>Krijg toegang tot belangrijke documenten en informatie geralateerd aan jouw job.</Paragraph>
              <Button type="primary" size="large">Ga Naar Documenten</Button>
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={12}>
            <Title level={3}>Welkom op het Sensity Intranet</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare turpis ac eros vestibulum, eget venenatis ipsum consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vulputate, magna vel blandit laoreet, magna sem convallis velit, eget faucibus leo mi in purus. Sed sit amet lorem finibus, ultricies sapien sit amet, semper nisl. Nam vitae velit lacus. Sed rhoncus, metus quis lobortis blandit, tortor arcu facilisis lectus, non varius sapien ipsum nec justo. Sed in nisl eget turpis venenatis pharetra.
            </Paragraph>
            <Paragraph>
              Curabitur blandit commodo nisl, eget blandit nibh commodo nec. Ut commodo interdum felis vitae varius. Sed luctus tellus sed quam finibus faucibus. Aliquam erat volutpat. Nulla facilisi. Proin dignissim efficitur justo, vitae suscipit risus bibendum id. Duis sit amet mauris ut lectus consequat mollis. Etiam eu dui vel turpis blandit elementum. Integer sagittis ipsum odio, in fermentum dolor fringilla vel. Sed pharetra elit non elit ultricies suscipit. Praesent sit amet quam leo.
            </Paragraph>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Sensity ©2023 Gemaakt door Sensity IT Afdeling</Footer>
    </Layout>
  );
}

export default App;
