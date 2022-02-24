import { getAll } from "../api/product";

const content = {
    async render() {
        const { data } = await getAll();
        return /* html */ `
            <div class="flex">
                <div class="grid w-[200px] h-[100%]">
                    <ul class="border-solid border-2 border[#f3f3f3]">
                        <li class="px-[30px] py-[10px]  hover:bg-[#f3f3f3] "><a class="" href="">Nước hoa gucci</a></li>
                        <hr>
                        <li class="px-[30px] py-[10px]  hover:bg-[#f3f3f3]   "><a class="" href="">Nước hoa dior</a></li>
                        <hr>
                        <li class="px-[30px] py-[10px]  hover:bg-[#f3f3f3]  "><a class="" href="">Nước hoa luiviton</a></li>
                        <hr>
                        <li class="px-[30px] py-[10px]  hover:bg-[#f3f3f3]  "><a class="" href="">Nước hoa chanel</a></li>
                        <hr>
                        <li class="px-[30px] py-[10px]   hover:bg-[#f3f3f3] "><a class="" href="">Nước hoa hoa lê</a></li>
                        <hr>
                    </ul>
                </div>
                <div class="banner bg-[white] w-[1000px] scroll-mb-[10px]">
                    <img style="" id='anh' src='https://theme.hstatic.net/200000054624/1000554591/14/banner_top_2.jpg' alt="" width='100%'><br>
                </div>
            </div>
            
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
            
            <div class="banner2 bg-[white] w-[1200px] scroll-mb-[10px]">
                    <img style="" id='anh' src='https://sites.google.com/site/shopnuochoaoctieu/_/rsrc/1510819593002/home/467485_banner-nuoc-hoa-charme-1366x440.jpg' alt="" width='100%'><br>
                </div>
      
      `;
    },
};
export default content;