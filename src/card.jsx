import "./index.css"
function Card({title,idx}){
    let oldstyles={TextDecoration: "Line-through",}
   let oldprices=["1000","200","300","400"]
   let newprices=["200","300","400","500"]
   let description=["xyz","abc","asd","sihdb"]
    return ( 
        <div className="product" >
            <h1 className="title">{title}</h1>
            <p>{description[idx]}</p>
           <p style={oldstyles}> old price :{oldprices[idx]} </p>
           <p>new price : {newprices[idx]}</p>
        </div>
    )

}
export default Card
  