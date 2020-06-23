import React from 'react'
import { Result, Button, Typography } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'

import 'antd/dist/antd.css'

const { Paragraph, Text } = Typography

const Detail = () => {
  return (
    <Result
      status="error"
      title="This is Detail Page"
      subTitle="Please check and modify the following information before resubmitting."
      extra={[
        <Button type="primary" key="console">
          Go Console
      </Button>,
        <Button key="buy">Buy Again</Button>,
      ]}
    >
      <div className="desc">
        <Paragraph>
          <Text
            strong
            style={{
              fontSize: 16,
            }}
          >
            The content you submitted has the following error:
        </Text>
        </Paragraph>
        <Paragraph>
          <CloseCircleOutlined className="site-result-demo-error-icon" /> Your account has been
        frozen. <a href="#/">Go home</a>
        </Paragraph>
        <Paragraph>
          <CloseCircleOutlined className="site-result-demo-error-icon" /> Your account is not yet
        eligible to apply. <a href="#/detail" disabled>Go to details</a>
        </Paragraph>
      </div>
    </Result>
  );
}

export default Detail