import Header from "../components/header";
import Footer from "../components/footer";

const AboutPage = {
    render() {
        return /* html */ `
        ${Header.render()}
        <h2 class="font-semibold text-2xl uppercase text-blue-800 mt-4">Tuyển sinh khóa 16.3</h2>
    <div class=" gap-8 mt-2">
    <div class="border p-4">
    <a href="about">
    <img class="m-auto h-[300px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLdGBQkytEyNFNYAm42nOtBOxo8GvdNmb95PuPUtM0r5sa8h1fUkdUWtEXAxz3mMVMUKc&usqp=CAU">
    </a>
    <h3 class="my-3"><a class="font-semibold text-lg text-red-600">Vinh danh 295 sinh viên FPT Polytechnic học kì Spring 2018</a></h3>
    <p>Tối ngày 16/06/2018 , Cao đăng FPT Polytechnic Hà Nội đã tổ chức lễ tôn vinh
    "ong vàng Poly" , tuyên dương 295 cá nhân và tập thể có thành tích xuất sắc trong học tập cũng như hoạt động
    tập thể . Buổi lễ tôn vinh “Ong vàng Poly” học kỳ Spring 2018 của Cao đẳng FPT Polytechnic Hà Nội lần này có sự tham gia của thầy Vũ Chí Thành – Giám đốc khối Đào tạo Cao đẳng – FPT Polytechnic, thầy Lã Ngọc Quang – Trưởng ban Đào tạo khối Đào tạo Cao đẳng, anh Lê Quốc Nam – Trưởng phòng Marketting –  FPT Polytechnic,  chị Khổng Thị Minh Hòa- Trưởng phòng Đào tạo, chị Tạ Thị Mai- Trưởng phòng Quan hệ doanh nghiệp, anh Bùi Quang Hùng- Trưởng phòng Tuyển sinh của cơ sở FPT Polytechnic Hà Nội cùng đông đảo cán bộ phòng ban, giảng viên và các bạn sinh viên.

    </p>
    </div>
    ${Footer.render()}
            `;
    },
};
export default AboutPage;