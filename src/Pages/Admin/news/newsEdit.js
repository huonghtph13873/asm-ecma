import data2 from "../../data2";
import NavAdmin from "../../../components/NavAdmin";

const newsEditPage = {
    render(id) {
        const found = data2.find((element) => element.id === id);
        return /* html */ `
        
        <div class="min-h-full">
        ${NavAdmin.render()}
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900">
        Dashboard
      </h1>
    </div>
  </header>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="border-4 border-dashed border-gray-200 rounded-lg h-116">
        <div class="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="name" class="block text-sm font-medium text-gray-700">Tiêu đề</label>
                <input type="text" name="name" id="name" autocomplete="name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" value="${
    found.name
}">
              </div>


             
              <div class="col-span-9 sm:col-span-6">
                <label for="title" class="block text-sm font-medium text-gray-700">Nội dung</label>
                <input type="text" name="title" rows="3" id="title" autocomplete="title" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" value="${
    found.title
}">
                </div>
                    <div>
                <label for="img" class="block text-sm font-medium text-gray-700">Ảnh</label>

                        <a href="/admin/news/${found.id}"><img src="${
    found.img
}" alt="" width="150" height="130"></a>
                    </div>
              <div class="col-span-9 sm:col-span-6">
              <input type="file" name="img" rows="3" id="img" autocomplete="img" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
            </div>
            
          </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button class=" inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Lưu
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  </main>
</div>
        
         

        `;
    },
};
export default newsEditPage;