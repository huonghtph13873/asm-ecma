import Navigo from "navigo";
import Homepage from "./Pages/home";
import Dashboard from "./Pages/Admin/dashboard";
import NewPage from "./Pages/Admin/New/index";
import newlist from "./Pages/newlist";
import AddnewPage from "./Pages/Admin/New/add";
import Editnews from "./Pages/Admin/New/edit";
import singup from "./Pages/singup";
import Singin from "./Pages/singin";
import Blog from "./Pages/blog/index";
import ProductPage from "./Pages/products/index";
import ProductsList from "./Pages/Admin/products";
import CartPase from "./Pages/cart";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};
router.on({
    "/": () => print(Homepage),
    "/cart": () => print(CartPase),

    "/new/:id": ({ data }) => print(newlist, data.id),

    "/admin/dashboard": () => print(Dashboard),
    "/admin/products": () => print(ProductsList),

    "/admin/news": () => print(NewPage),
    "/admin/news/add": () => print(AddnewPage),
    "/admin/news/:id/edit": ({ data }) => print(Editnews, data.id),
    "/singup": () => print(singup),
    "/singin": () => print(Singin),
    "/blog": () => print(Blog),
    "/products": () => print(ProductPage),
});
router.resolve();
// fetch("https://6203e391c6d8b20017dc3315.mockapi.io/Post")
//     .then((response) => response.json())
//     .then((data) => console.log(data));