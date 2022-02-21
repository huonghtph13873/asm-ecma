import { reRender } from "../utils/index";

const Headers = {
    render() {
        return /* html */ `
     
            <div class="header-top flex justify-between h-[80px] w-[1200px] m-auto">
                <figure class="logo pt-5">
                    <a href="/">
                        <img src="https://i.pinimg.com/236x/5d/7e/76/5d7e7602868cf3dcf6b8e8abef3b5568.jpg" width="70px">
                    </a>
                </figure>
                <div>
                    <ul class="w-[800px] mt-5 pl-10 flex ">
                        <li><a class="px-[20px]" href="/">Trang chủ</a></li>
                        <li><a class="px-[20px]" href="/">Tin tức</a></li>
                        <li><a class="px-[20px]" href="">Sản phẩm</a></li>
                        <li><a class="px-[20px]" href="">Bài viết</a></li>
                        <!-- <li class="px-[20px]">
                        <a href="#">Home <span><i class="las la-angle-down"></i></span></a>
                        <ul class="subnav">
                            <li><a href="index-1.html">Home page 1 </a></li>
                            <li><a href="index-2.html">Home page 2</a></li>
                            <li><a href="index-3.html">Home page 3</a></li>
                        </ul>
                    </li> -->
                    </ul>
                </div>
                <div class="flex mt-5 text-center">
                    <span class="sm:ml-3">
    <a href="/singin">
  <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[red] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Đăng nhập </button>
    </a>
    </span>
                    <span class="sm:ml-3">
    <a href="/singup">
  <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[red] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Đăng ký</button>
    </a>
    </span>
                </div>

            </div>
            <div class="bg-[#fd3d57]">



                <div class="header-top bg-[#fd3d57] flex justify-between h-[80px] w-[1200px] m-auto">
                    <div class="nav pt-5">
                        <div>
                            <button class="text-[#ffffff] hover:text-[#ff0000] px-[20px] py-[8px] "></button>
                        </div>
                    </div>
                    <form action="" class="w-[700px] mt-5 pl-10 flex ">
                        <input type="text" class="h-10 w-10/12 pl-3 rounded-sm" placeholder="Nhập tên nước hoa... cần tìm">
                        <div>
                            <button class="bg-[#2b2d42] text-[#ffffff] hover:text-[#ff0000] px-[20px] py-[8px] rounded-r-lg">Tìm kiếm</button>
                        </div>
                    </form>
                    <div class="flex mt-5 text-center ">

                        <div class="signin pl-5">
                              
          <ul class="flex">
   ${localStorage.getItem("user") ? `
                        <li><a class="block px-4 py-3 hover:bg-indigo-500 hover:text-white " id="email"></a></li>
                        <li><a class="block px-4 py-3 hover:bg-indigo-500 hover:text-white" id="logout">Logout</a></li>
                    ` : ""}
                     </ul>
                        </div>
                    </div>
                </div>
            </div>
`;
    },
    afterRender() {
        const email = document.querySelector("#email");
        const logout = document.querySelector("#logout");
        email.innerHTML = JSON.parse(localStorage.getItem("user")).email;

        logout.addEventListener("click", () => {
            localStorage.removeItem("user");
            reRender(Headers, "header");
        });
    },
};
export default Headers;