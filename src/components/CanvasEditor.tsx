import React, { useEffect, useRef, useState } from 'react'
import * as fabric from 'fabric'

interface SavedCanvas {
  savedCanvas: {
    objects: { type: string; text: string; fill: string }[]
  }
}
const CanvasEditor: React.FC<SavedCanvas> = ({ savedCanvas }) => {
  const canvasRef = useRef<fabric.Canvas | null>(null)
  const canvasElementRef = useRef<HTMLCanvasElement | null>(null)
  const [textsValues, setTextValues] = useState<
    { text: string; color: string }[]
  >([])

  useEffect(() => {
    if (canvasElementRef.current) {
      const canvasInstance = new fabric.Canvas(canvasElementRef.current)
      canvasRef.current = canvasInstance
      loadCanvas(JSON.stringify(savedCanvas))
      setTextValues(getTexts())
      return () => {
        canvasInstance.dispose()
      }
    } else {
      console.error('Canvas element is not available.')
    }
  }, [savedCanvas])

  const getTexts = () => {
    return savedCanvas.objects
      .filter((obj) => obj.type === 'textbox')
      .map((textObj) => ({ text: textObj.text, color: textObj.fill }))
  }

  const loadCanvas = async (canvasData: any) => {
    if (canvasRef.current) {
      try {
        console.log('Canvas is initialized:', canvasRef.current)
        canvasRef.current.clear() // Clear the canvas before loading new data
        await canvasRef.current.loadFromJSON(canvasData)
        canvasRef.current.renderAll()
        console.log('Canvas loaded and rendered.')
      } catch (error) {
        console.error('Error loading canvas:', error)
      }
    } else {
      console.error('Canvas is not initialized.')
    }
  }

  const handleTextChange = (value: string, i: number) => {
    if (canvasRef.current) {
      const textObject = canvasRef.current
        .getObjects()
        .filter((obj) => obj.type === 'textbox')[i]
      if (textObject) {
        textObject.set('text', value)
        canvasRef.current.renderAll()
      }
    }
    setTextValues((prevItems) =>
      prevItems.map((item, index) =>
        index === i ? { ...item, text: value } : item
      )
    )
  }
  const handleColorChange = (value: string, i: number) => {
    if (canvasRef.current) {
      const textObject = canvasRef.current
        .getObjects()
        .filter((obj) => obj.type === 'textbox')[i]
      if (textObject) {
        textObject.set('fill', value)
        canvasRef.current.renderAll()
      }
    }
    setTextValues((prevItems) =>
      prevItems.map((item, index) =>
        index === i ? { ...item, color: value } : item
      )
    )
  }

  return (
    <div>
      <canvas
        ref={canvasElementRef}
        width="800"
        height="900"
        style={{ border: '1px solid #000' }}
      ></canvas>
      {textsValues.map((textObj, i: number) => (
        <div key={i}>
          <input
            type="text"
            value={textsValues[i].text || ''}
            onChange={(e) => handleTextChange(e.target.value, i)}
          />
          <input
            type="color"
            value={textsValues[i].color || ''}
            onChange={(e) => handleColorChange(e.target.value, i)}
          />
        </div>
      ))}
    </div>
  )
}

export default CanvasEditor
