import initialRender from "./initialRender";
import listener from "./listener";
import observer from "./observer";
import { productSidebar } from "./selectors";


class Invoice {
    init(){
        console.log("Invoice App starts");
        initialRender();
        listener();
        observer();
    }
}

export default Invoice;