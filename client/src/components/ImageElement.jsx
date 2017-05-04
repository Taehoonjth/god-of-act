import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const ImageElement = () => (
  <Card>
    <Image src='https://metnew.github.io/react-semantic.ui-starter/images/dummy.png' />
    <Card.Content>
      <Card.Header>당신의 웃는 연기 점수는?</Card.Header>
      <Card.Description>90점 입니다.</Card.Description>
    </Card.Content>
  </Card>
)

export default ImageElement
