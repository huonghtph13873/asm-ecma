import toastr from "toastr";
import Headers from "../Components/header";
import footer from "../Components/footer";
import { get } from "../api/product";
import { $ } from "../utils";
import { addToCart } from "../utils/cart";
import "toastr/build/toastr.min.css";

const newlist = {
    async render(id) {
        const { data } = await get(id);
        return /* html */ `
          <header>
        ${Headers.render()}
        </header> 
            <article class=" mx-auto w-[1200px] ">
     <div class="mx-auto w-[1200px] my-10">
   
            <div class="grid grid-cols-2 mb-3">
                <h2 class="font-bold text-xl ">${data.title}</h2>
                <div class="mt-2 flex justify-end">
                    <a href="" class="mt-1">
            <ul class="flex ">
                <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                    </svg>
                </li>
                <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                    </svg>
                </li>
                <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                    </svg>
                </li>
                <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                    </svg>
                </li>
                <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                    </svg>
                </li>
            </ul>
        </a>
                    <a href="" class="ml-2 text-sky-600 hover:underline relative hover:font-semibold">13 ????nh gi??</a>
                    <a href="" class="ml-1 text-sky-600 hover:underline relative hover:font-semibold">| 4110 H???i &amp; ????p</a>
                </div>
            </div>
            <hr>
            <div class="grid grid-cols-2 mt-7">
                <div class="mr-3">
                    <div class="border-[1px]">
                        <a href="">
                            <img src="${data.image}">
                        </a>
                    </div>
                    
                    <div class="flex mt-3 justify-center">
                        <div class="flex mr-2">
                            <i class="fas fa-award text-red-700  mr-2"></i>
                            <p class="text-sm">H??ng ch??nh h??ng</p>
                        </div>
                        <div class="flex">
                            <i class="fas fa-shipping-fast text-red-700  mr-2"></i>
                            <p class="text-sm">Giao h??ng to??n qu???c</p>
                        </div>
                    </div>
                </div>
                <div class="detail">
                    <div class="flex ">
                        <span class="text-red-700 font-semibold text-2xl mr-5 mt-2">${data.price}</span>
                        
                    </div>
                    
                    <div class="box-Promo">
                      <div class="endow py-[20px]">
                            <span class="bg-[#e9ecef] px-3 font-bold">??u ????i th??m</span>
                        </div>
                        <ul class="content-promo">
                            <li class="inline-flex">
                                <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                <div>
                                    <span>
                                        Gi???m 10% cho kh??ch h??ng c?? th??? th??nh vi??n
                                    </span>
                                    <a href="" class="text-blue-600 hover:underline">Xem chi ti???t</a>
                                </div>
                            </li>
                            <li class="inline-flex">
                                <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                <div>
                                    <span>
                                        B???o h??nh ?????i tr??? trong v??ng 3 ng??y
                                    </span>
                                    <a href="" class="text-blue-600 hover:underline">Xem chi ti???t</a>
                                </div>
                            </li>
                            <li class="inline-flex">
                                <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                <div>
                                    <span>
                                        Mi???n ph?? ship to??n qu???c
                                    </span>
                                    <a href="" class="text-blue-600 hover:underline">Xem chi ti???t</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="btn-buy ">
                        <button class="w-full bg-red-700 mt-4 rounded-md text-white hover:bg-red-800" id="btnAddToCart">
                            <div>
                                <strong>MUA NGAY</strong>
                            </div>
                            <p class="text-sm">Giao h??ng mi???n ph?? ho???c nh???n t???i shop</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class =""> 
              <h1 class="uppercase text-[16px] font-bold border-b-[1px] mt-2 pl-1"> Th??ng tin chi ti????t sa??n ph????m </h1>
   
              <p class="text-[14px] leading-[1.8] mb-3">${data.posts}
                </p>
        </div>
         
                    <div class="conten my-[20px]">
                <h1 class="font-bold text-[20px] py-[20px]">New Arrivals</h1>
                <div class="product grid grid-cols-4 gap-5 ">
                <form action="">
                <div class=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg  ">
                    <div class=" w-[100%] ">
                        <a href="#"> <img src="https://cms.domy.vn/images/image/01-12-2018/le-labo/le-labo.jpg" alt=""></a>
                    </div>
                    <div class="py-[10px] px-[10px] leading-8">
                        <a href="#">
                            <h4 class="font-bold hover:underline">N?????c hoa hoa l??</h4>
                        </a>
                        <p class="text-[15px] text-[red]">$4.000</p>
                        <p>4,000,000 l??????t xem</p>
                    </div>
                    <div class="conten-item text-center">
                    <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[red] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Th??m v??o gi??? h??ng</button>
                    </div>
                </div>
            </form>
            <form action="">
            <div class=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg  ">
                <div class=" w-[100%] ">
                    <a href="#"> <img src="https://cms.domy.vn/images/image/01-12-2018/le-labo/le-labo.jpg" alt=""></a>
                </div>
                <div class="py-[10px] px-[10px] leading-8">
                    <a href="#">
                        <h4 class="font-bold hover:underline">N?????c hoa hoa l??</h4>
                    </a>
                    <p class="text-[15px] text-[red]">$4.000</p>
                    <p>4,000,000 l??????t xem</p>
                </div>
                <div class="conten-item text-center">
                <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[red] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Th??m v??o gi??? h??ng</button>
                </div>
            </div>
        </form>
        <form action="">
        <div class=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg  ">
            <div class=" w-[100%] ">
                <a href="#"> <img src="https://cms.domy.vn/images/image/01-12-2018/le-labo/le-labo.jpg" alt=""></a>
            </div>
            <div class="py-[10px] px-[10px] leading-8">
                <a href="#">
                    <h4 class="font-bold hover:underline">N?????c hoa hoa l??</h4>
                </a>
                <p class="text-[15px] text-[red]">$4.000</p>
                <p>4,000,000 l??????t xem</p>
            </div>
            <div class="conten-item text-center">
            <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[red] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Th??m v??o gi??? h??ng</button>
            </div>
        </div>
    </form>
    <form action="">
    <div class=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg  ">
        <div class=" w-[100%] ">
            <a href="#"> <img src="https://cms.domy.vn/images/image/01-12-2018/le-labo/le-labo.jpg" alt=""></a>
        </div>
        <div class="py-[10px] px-[10px] leading-8">
            <a href="#">
                <h4 class="font-bold hover:underline">N?????c hoa hoa l??</h4>
            </a>
            <p class="text-[15px] text-[red]">$4.000</p>
            <p>4,000,000 l??????t xem</p>
        </div>
        <div class="conten-item text-center">
        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[red] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Th??m v??o gi??? h??ng</button>
        </div>
    </div>
</form>
                </div>
            </div>
        </article>
                <footer class="bg-[#f3f3f3] min-w-full m-auto w-[1200px]">
                ${footer.render()}
                </footer>



        `;
    },
    afterRender(id) {
        Headers.afterRender();
        $("#btnAddToCart").addEventListener("click", async () => {
            const { data } = await get(id);
            console.log(data);
            addToCart(
                { ...data, quantity: 1 },

                () => {
                    toastr.success(`Them san pham ${data.name} Thanh cong`);
                },
            );
        });
    },
};
export default newlist;