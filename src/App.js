import React, {useState, useRef, useMemo} from "react";
import "./style.css";
import { ReGrid } from './ReGrid'


export default function App() {
  return (
    <div style={{width: '100%', height: 500, border: '1px solid #e2e3e3'}}>
      <ReGrid />
    </div>
  );
}
