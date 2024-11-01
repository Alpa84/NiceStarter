import React from 'react'
import imageTemplates from '../templates'
import { List, Card } from 'antd'
import { Template } from '../types/Template'

interface TemplateListProps {
  onTemplateSelect: (template: Template) => void
}

export const TemplateList: React.FC<TemplateListProps> = ({
  onTemplateSelect,
}) => {
  return (
    <List
      grid={{ gutter: 16, column: 3 }}
      dataSource={imageTemplates}
      renderItem={(template) => (
        <List.Item>
          <Card
            hoverable
            onClick={() => onTemplateSelect(template)}
            cover={
              <img
                alt={template.name}
                src={`${process.env.PUBLIC_URL}/images/${template.imageSrc}`}
              />
            }
          >
            <Card.Meta title={template.name} />
          </Card>
        </List.Item>
      )}
    />
  )
}
