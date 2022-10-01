import * as type from "../../constants/ActionTypes";


const initState = [
    {
        image: '/images/san-pham/sanpham3.png',
        name: 'Trà Búp',
        price: "70,000",
        rate: 27
    },
    {
        image: '/images/san-pham/sanpham1.png',
        name: 'Trà Shan Tuyết',
        price: "50,000",
        rate: 17
    },
    {
        image: '/images/san-pham/sanpham2.png',
        name: 'Trà Oolong',
        price: "70,000",
        rate: 27
    },{
        image: '/images/san-pham/sanpham3.png',
        name: 'Trà Búp',
        price: "70,000",
        rate: 27
    }
]

const sanphamtuongtu = (state = initState, action) => {
    return state;
} 

export default sanphamtuongtu;