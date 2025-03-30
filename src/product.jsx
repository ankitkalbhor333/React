import "./product.css"
function Product({title,price=1,features}){
    let isDiscount=price>2000;
    let styles={backgroundColor : isDiscount ? "orange": ""};
//  let isdiscount=price> 20000 ? "50%" : "";
    return ( 
        <div className="product" >
            <h3 style={styles}>{title}</h3>
            <h3>PRICE  : {price/2}</h3> 
            { isDiscount ? <p>discount of 50% </p>: null }
        </div>
    )

}
export default Product
  