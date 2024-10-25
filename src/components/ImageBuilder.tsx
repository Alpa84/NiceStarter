import React, { useState } from 'react'
import { TemplateList } from './TemplateList'
import { Template } from '../types/Template'
import CanvasEditor from './CanvasEditor'

export const ImageBuilder: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<
    Template | undefined
  >(undefined)
  return (
    <div>
      <h2>Image Builder</h2>
      <TemplateList onTemplateSelect={setSelectedTemplate} />
      {selectedTemplate && (
        <CanvasEditor savedCanvas={selectedTemplate?.saved} />
      )}
    </div>
  )
}
