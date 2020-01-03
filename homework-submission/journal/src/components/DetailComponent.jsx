import React from 'react'
import { Typography } from 'antd';

const DetailComponent = (data) => {
  const { Title, Paragraph } = Typography;
  data = data.data
  return (
    <Typography>
      <Title>
        {data.title}
      </Title>
      <Paragraph>
        {data.body}
      </Paragraph>
    </Typography>
  )
}

export default DetailComponent
