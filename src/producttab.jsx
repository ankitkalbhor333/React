import  Product from "./product.jsx"
function ProductTab(){
    let option=[<li>"hi-tech"</li>, <li>"durable"</li>]
    // let option2={a:"hi-tech",b:"durable",c:"fast"};
    return (
        <>
        <h1>my react app</h1>
          <Product title="phone" 
          price={30000} 
          features={option} />
          <Product title="laptop" price={1000} /> 
          
       </>
    )
}
export default ProductTab;