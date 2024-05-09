import { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const INITIAL_STATE = [
    {id: uuid(), backgroundColor: 'red', width: 50, height: 50},
    {id: uuid(), backgroundColor: 'green', width: 100, height: 100},
    {id: uuid(), backgroundColor: 'blue', width: 40, height: 40}
  ];

  const [boxes, setBoxes] = useState([]);

  const addBox = (newBox) => {
    setBoxes(boxes => [...boxes, {...newBox, id: uuid()}])
  }

  const removeBox = (id) => {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  }

  return (
    <div>
      <h3>Color Box Maker</h3>
      <NewBoxForm addBox={addBox} />
      {boxes.map(({id, backgroundColor, width, height}) => (
        <Box 
          id={id} 
          backgroundColor={backgroundColor} 
          width={width}
          height={height} 
          key={id} 
          removeBox={removeBox}
        />
      ))}
    </div>
  )
}


export default BoxList;