import Headers from "../Components/header";
import content from "../Components/Conten";
import footer from "../Components/footer";

const Homepage = {
    async render() {
        return /* html */ `
        <header>
        ${Headers.render()}
        </header> 
            <article class=" mx-auto w-[1200px] ">
              ${await content.render()}
        </article>
                <footer class="  min-w-full m-auto">
                ${footer.render()}
                </footer>
        `;
    },
    afterRender() {
        Headers.afterRender();
    },
};
export default Homepage;