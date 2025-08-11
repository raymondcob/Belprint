import Shirt from "../../../assets/shirtsample.jpg"

export default function CartSummary() {

  {/* Dummy Simulation Data */}
const cartItems=[
  {
       product:"T-shirt",
       color:"Black",
       printon:"Front",
       total:33.75

  },
  {
       product:"T-shirt",
       color:"Black",
       printon:"Front",
       total:33.75

  },
   
]


  return (
    <div>
      {cartItems.map((cartItems,index)=>{
        <div key={index} className="bg-gray-500 p-3 flex justify-evenly">
            <img src={Shirt} alt="Shirt" className="w-10 h-10"/>
            <h4 className="font-medium">{cartItems.product}</h4>
            <h4 className="font-medium">{cartItems.color}</h4>
            <h4 className="font-medium">{cartItems.printon}</h4>
            <h4 className="font-medium">{cartItems.total}</h4>
        </div>
      })}
    </div>
  )
}
