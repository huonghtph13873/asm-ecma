import {
    getAll,
} from "../../api/product";
import Headers from "../../Components/header";
import footer from "../../Components/footer";

const ProductPage = {
    async render() {
        const {
            data,
        } = await getAll();
        return /* html */ `
        ${Headers.render()};
        <div class="conten my-[20px]">
                <h1 class="font-bold text-[20px] py-[20px]">Recomended For You</h1>
                <div class="product grid grid-cols-4 gap-5 ">
                 ${data.map((post) => `
                    <form action="">
                        <div class=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg  ">
                            <div class=" w-[100%] ">
                                <a href="/new/${post.id}"> <img src="${post.image}" alt="></a>
                            </div>
                            <div class="py-[10px] px-[10px] leading-8">
                                <a href="/new/${post.id}">
                                    <h4 class="font-bold hover:underline">${post.title}</h4>
                                </a>
                                <p class="text-[15px] text-[red]">${post.price}</p>
                                
                            </div>
                            <div class="conten-item text-center">
                            <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[red] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                    </form>

         `).join("")}
 
                </div>


            </div>
        ${footer.render()};

        `;
    },
    afterRender() {
        Headers.afterRender();
    },
};
export default ProductPage;