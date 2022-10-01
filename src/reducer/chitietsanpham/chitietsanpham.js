import * as type from "../../constants/ActionTypes";


const initState = [
    {
        name: 'Trà Shan Tuyết',
        image: '/images/chitietsanpham/main.jpg',
        price: "50,000",
        content: "Trà Shan Tuyết (Chè Shan Tuyết) hay còn được gọi là trà tuyết. Đây là loại trà đặc sản của các đồng bào tộc người Tày, Giao, Mông và là đặc sản của các tỉnh như Hà Giang, Điện Biên, Lào Cai.||Đặc điểm của trà Shan Tuyết là búp trà (cánh trà) rất to và màu trắng, dưới cánh trà phủ 1 lớp lông tơ mịn mầu trắng.||Cây trà Shan Tuyết cổ thụ rất lớn, có khi vài người lớn vòng tay ôm. Mọc ở trên núi cao hơn 1200m, quanh năm mây mù và lạnh. Sự chênh lệch nhiệt độ giữa ngày và đêm là rất lớn, chính bởi có điều kiện tự nhiên thú vị như vậy nên đó là nét độc đáo tạo ra một hương vị trà shan tuyết cổ thụ thơm ngon."
    },
    {
        name: 'Trà Búp',
        image: '/images/chitietsanpham/main2.jpg',
        price: "70,000",
        content: "Chè búp là loại chè chỉ thu với 1 búp non của cây chè, trên búp non đó có nhiều chất dinh dưỡng nên giá thành cũng rất cao, thời gian thu hoạch búp non đó dao động từ 22 - 25 ngày của cây chè, quy cách thu hái sẽ quyết định giá của sản phẩm trà như: 1 đinh (búp), 1 đinh 1 lá, 1 đinh 2 lá, 1 đinh 3 lá. ||Với hương vị chát hậu ngọt đậm đà trà búp đã trở thành thức uống quen của người dân Việt. Điều tạo nên sự khác biệt của các loại trà Thái nguyên chính là trạng thái cánh trà khi thu hoạch. Với chè búp, các nghệ nhân sẽ hái 1 búp hoặc 1 búp 1 lá liền kề để làm trà. Những búp trà tươi này được hái tại các đồi chè Thái Nguyên, nơi được thiên nhiên ưu ái."
    },
    {
        name: 'Trà Oolong',
        image: '/images/chitietsanpham/main3.jpg',
        price: "70,000",
        content: "Trà Ô Long có nguồn gốc từ Phúc Kiến-Trung Quốc, được du nhập sang Đài Loan và phát triển cực thịnh tại đây trước khi giống cây trồng này chính thức được đưa về Việt Nam, trồng thành công ở vùng đất Lâm Đồng và một số tỉnh miền núi phía Bắc.||Có nhiều câu chuyện ly kỳ về nguồn gốc của Ô Long ở Trung Quốc. ||Giống trà được trồng ở Việt Nam hiện nay hầu như toàn bộ là giống Ô Long Cao Sơn của Đài Loan, đây là giống trà núi cao lá nhỏ, giàu phẩm chất, sản lượng tập trung ở các giống thuần chủng, Kim Tuyên, Tứ Quý, Thúy Ngọc."
    }
]

const showItem = (name) => {
    
    for (let i = 0; i < initState.length; ++i){
        if (name == initState[i].name) return initState[i];
    }
    return initState[0];
}

const chitietsanpham = (state = initState, action) => {
    // console.log(state);
    // console.log(action);
    switch (action.type){
        case type.SHOW_ITEM:
            return showItem(action.name);
        case type.UPDATE_ITEM:
            return showItem(action.name);
        default:
            return state;
    }
} 

export default chitietsanpham;