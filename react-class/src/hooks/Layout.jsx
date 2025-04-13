import React, { useLayoutEffect, useRef, useState } from "react";
function LayoutEffectExample() {
  const divRef = useRef();
  const [boxWidth, setBoxWidth] = useState(0);

  useLayoutEffect(() => {
    // Measure the width of the div after DOM mutation but before paint
    const width = divRef.current.offsetWidth;
    setBoxWidth(width);
  }, []);

  return (
    <div>
      <h1>useLayoutEffect Example</h1>
      <div ref={divRef} style={{ width: "200px", height: "100px", background: "lightblue" }}>
        This box is {boxWidth}px wide.
      </div>
    </div>
  );
}
export default LayoutEffectExample;