import data from "../Pages/data";

const NewsList = {
    render() {
        return /* html */ `
    <div>
    <h2 class="font-semibold text-2xl uppercase text-blue-800 mt-6">Tin tức học tập</h2>
    <div class="grid grid-cols-3 gap-8 mt-4">
    ${data.map((post) => `
    <div class="border p-4">
    <a href="/news/${post.id}"><img src="${post.img}" class="h-[220px]"></a>
    <h3 class="my-3"><a href="/news/${post.id}" class="font-semibold text-lg text-red-600">${post.title}</a></h3>
    <p>${post.desc}</p>
    </div>
    `).join("")}
    </div>
    `;
    },
};
export default NewsList;