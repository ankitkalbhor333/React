import "./product.css"
function Msgbox({userName,textColor}){
    // let styles={backgroundColor: red}
    return (
<>
<h1 style={{color: textColor}}>Hello, {userName} </h1>
</>
    )
}
export default Msgbox
