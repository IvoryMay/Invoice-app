import { productRender } from "./inventory";
import observer from "./observer";
import { products } from "./states";

 

 const initialRender = () => {
    // to open product side bar
   //  productSidebar.classList.remove("translate-x-full");
    productRender(products);
   
    
 };

 export default initialRender;