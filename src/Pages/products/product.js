import Headers from "../../Components/header";
import footer from "../../Components/footer";
import { get } from "../../api/posts";

const newlist = {
    async render(id) {
        const { data } = await get(id);
        return /* html */ `
          <header>
        ${Headers.render()}
        </header> 
            <article class=" mx-auto w-[1200px] ">
     <div class="mx-auto w-[1200px] my-10">
        <main class="container mx-auto ">
            <div>
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
                            <p class="text-[15px] text-[red]">${post.content}</p>
                            
                        </div>
                        <div class="conten-item text-center">
                        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[red] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Thêm vào giỏ hàng</button>
                        </div>
                    </div>
                </form>

     `).join("")}

            </div>
                <div class="col-span-4 ">
                    <div class=" font-serif text-xl mb-4">
                        <h3 class="my-[20px]">Sản phẩm khác</h3>
                    </div>
                    
                </div>
            </div>
        </main>

            </div>
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863981044334!2d105.74459841476343!3d21.03812778599329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1645168252911!5m2!1svi!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" class="my-[30px]"></iframe>
        </article>
                <footer class="bg-[#f3f3f3] min-w-full m-auto w-[1200px]">
                ${footer.render()}
                </footer>



        `;
    },
    afterRender() {
        Headers.afterRender();
    },
};
export default newlist;