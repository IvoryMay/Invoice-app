import { productSidebar } from "./selectors";



export const manageInventoryBtnHandler = () => {
    console.log("u click Manage Inventory Btn");
    productSidebar.classList.remove("translate-x-full");
    productSidebar.classList.add("duration-300");
} ;

export const closeSidebarBtnHandler = () => {
    productSidebar.classList.add("translate-x-full");
    
}

export const checkoutHandler = () => {
    console.log("u checkout");
    window.print();
}