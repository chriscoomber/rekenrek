import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg viewBox="0 0 16 34" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M7.984 32.621c-4.046 0-7.327-7.035-7.327-15.712 0-8.678 3.281-15.713 7.327-15.713 3.365 0 6.201 4.867 7.06 11.5-.366-.33-.772-.514-1.198-.514-1.619 0-2.931 2.638-2.931 5.893s1.312 5.893 2.931 5.893c.25 0 .494-.063.727-.183-1.19 5.231-3.694 8.836-6.589 8.836Z"
      style={{
        stroke: "#7f5c46",
        fill: "#fff",
      }}
    />
  </Svg>
)

export default SvgComponent