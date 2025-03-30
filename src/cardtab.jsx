import Card from "./card.jsx"
function CardTab(){
    // let option=[<li>"hi-tech"</li>, <li>"durable"</li>]
    // let option2={a:"hi-tech",b:"durable",c:"fast"};
    return (
  <div className="wrap">
        <Card title=" logitech mx master" idx={0}  />
        <Card title="apple" idx={1}/>
        <Card title="laptop" idx={2}/>
        <Card title="oppo" idx={3} />
  </div>

    )
}
export default CardTab