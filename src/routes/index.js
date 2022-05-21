import Header from "../templates/header";
import Navbar from "../templates/navbar";

const router = async ()=>{
    const header = null || document.querySelector('#header');
    const navbar = null || document.querySelector('#main-navbar');

    header.innerHTML = await Header();
    navbar.innerHTML = await Navbar();

};
export default router;