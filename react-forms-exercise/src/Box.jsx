import './Box.css'
const Box = ({backgroundColor, width, height, removeBox, id}) => {
  const remove = () => removeBox(id);
  return (
    <div className="Box">
      <div style={{
        backgroundColor: `${backgroundColor}`,
        width: `${width}px`,
        height: `${height}px`
      }}></div>
      <button onClick={remove}>X</button>
    </div>
  )
}


export default Box;