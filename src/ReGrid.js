import React, {useState, useRef, useMemo} from "react";
import "./style.css";
import { onScroll } from './scroll/scroll'
import { ScrollBar } from './scroll/ScrollBar'


export function ReGrid() {
  const [barY, setBarY] = useState(0)
  const height = 500
  const contentHeight = 5000
  const barHandlerHeight = 30
  const scrollBarMaxY = height - barHandlerHeight
  const wheelScrollFactor = height/contentHeight
  const onWheel = e => {
    setBarY(onScroll(e, barY, e.deltaY, 0, scrollBarMaxY, wheelScrollFactor))
  }
  const onBarMove = e => {
    setBarY(onScroll(e, barY, e.deltaY, 0, scrollBarMaxY))
  }

  const contentY = barY / wheelScrollFactor
  return (
    <div onWheel={onWheel}  style={{width: '100%', height: height}}>
      barY = {barY} |
      contentY = {contentY}
      <ScrollBar onMove={onBarMove} x={0} y={barY} />
    </div>
  );
}
