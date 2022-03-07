// Component that renders and animates the rekenrek, given a number from 0 to 20
import * as React from "react";
import { Text, View, TextInput } from 'react-native';
import RekenrekSvg from "./rekenrek_svg.js";
import WhiteBeadSvg from "./white_bead_svg.js";
import RedBeadSvg from "./red_bead_svg.js";
import styles from "./styles.js";

// Props include:
// - row (either 1 or 2)
// - position (1 to 10 for active beads, 11 to 20 for unused beads)
const WhiteBead = (props) => {
    var top = props.row == 1 ? 46 : 80;
    var left;
    if (props.position <= 10) {
      // active bead
      left = 90 + props.position * 6.5;
    } else {
      left = 180 + (props.position - 10) * 6.5
    }

    const style = {
      width:43, height: 22, position:'absolute', left:left, top:top
    }

    return (
      <WhiteBeadSvg style={style}/>
    )
}

// Sadly a copy-paste of WhiteBead as I didn't have time to figure out dynamic component names
const RedBead = (props) => {
    var top = props.row == 1 ? 46 : 80;
    var left;
    if (props.position <= 10) {
      // active bead
      left = 90 + props.position * 6.5;
    } else {
      left = 180 + (props.position - 10) * 6.5
    }

    const style = {
      width:43, height: 22, position:'absolute', left:left, top:top
    }

    return (
      <RedBeadSvg style={style}/>
    )
}

// Props include:
// - number: (state) a number from 0 to 20
const Rekenrek = (props) => {

  const beads = [];
  // Work out the beads array from the number.
  const beadsOnFirstRow = (props.number <= 10) ? props.number : 10;
  const beadsOnSecondRow = props.number - beadsOnFirstRow;

  // First row. First 5 beads are red, next 5 are white.
  for (let i=1; i<=10; i++) {
    if (i<=beadsOnFirstRow) {
      // used bead, align with left
      beads.push({color:(i<=5)?'r':'w', row:1, position:i, key:"1"+i});
    } else {
      // unused bead, align with right
      beads.push({color:(i<=5)?'r':'w', row:1, position:10+i, key:"1"+i});
    }
  }

  // Second row. First 5 beads are red, next 5 are white.
  for (let i=1; i<=10; i++) {
    if (i<=beadsOnSecondRow) {
      // used bead, align with left
      beads.push({color:(i<=5)?'r':'w', row:2, position:i, key:"2"+i});
    } else {
      // unused bead, align with right
      beads.push({color:(i<=5)?'r':'w', row:2, position:10+i, key:"2"+i});
    }
  }

  return (
    <View style={styles.frame }>
      <RekenrekSvg width={360} height={144} />
      {
        beads.map(bead => {
          if (bead.color == 'r') {
            return <RedBead key={bead.key} row={bead.row} position={bead.position}/>
          } else if (bead.color == 'w') {
            return <WhiteBead key={bead.key} row={bead.row} position={bead.position}/>
          }
        })
      }
    </View>
  )
}

export default Rekenrek