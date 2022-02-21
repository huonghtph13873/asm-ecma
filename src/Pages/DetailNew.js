import data from "./data";
import Header from "../Components/header";
import Footer from "../Components/footer";

const DetailNewPage = {
    render(id) {
        const found = data.find((element) => element.id === id);
        return /* html */`
        ${Header.render()}
        <h2 class="font-semibold text-2xl uppercase text-blue-800 mt-4">Tin tức học tập</h2>
        <div class="border-solid border-4 divide-slate-400 px-px ">
        <div class="max-w-5xl mx-auto p-[20px]">
        <img class="h-[300px] m-auto" src="${found.img}">
        <h1  class="font-semibold text-lg text-red-600 mt-3">${found.title}</h1>
        <p>${found.desc}</p>
        </div>
        ${Footer.render()}
    `;
    },
};
export default DetailNewPage;