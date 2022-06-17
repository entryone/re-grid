import React, {useState, useEffect} from 'react'

export function ScrollBar ({x, y, height = 50, onMove = () => {}}) {
  const [drag, setDrag] = useState(false)
  const [startY, setStartY] = useState(false)

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }
  })

  const onMouseDown = e => {
    setDrag(true)
    setStartY(e.clientY)
  }
  const onMouseMove = e => {
    drag && onMove({deltaY: e.clientY - startY})
    setStartY(e.clientY)
  }
  const onMouseUp = () => {
    setDrag(false)
  }
  const style = {
    float: 'right',
    height: '100%',
    width: 12,
    backgroundColor: '#e2e3e3'
  }
  const handlerStyle = {
    transition: 'transform ease 0.0.5s',
    backgroundColor: '#CCC',
    width: 11,
    height: 30,
    transform: `translate(${x + 1}px, ${y}px)`,
    borderRadius: 6
  }
  return <div style={style} >
    <div onMouseDown={onMouseDown}  style={handlerStyle} />
  </div>
}
