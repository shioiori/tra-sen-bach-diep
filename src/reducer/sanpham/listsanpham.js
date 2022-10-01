import * as type from "../../constants/ActionTypes";


const initState = [
    {
        image: './images/san-pham/sanpham1.png',
        name: 'Trà Shan Tuyết',
        price: "50,000",
        rate: 17,
        tag: 'trashantuyet'
    },
    {
        image: './images/san-pham/sanpham2.png',
        name: 'Trà Oolong',
        price: "70,000",
        rate: 27,
        tag: 'traoolong'
    },
    {
        image: './images/san-pham/sanpham3.png',
        name: 'Trà Búp',
        price: "70,000",
        rate: 27,
        tag: 'trabup'
    },{
        image: './images/san-pham/sanpham1.png',
        name: 'Trà Shan Tuyết',
        price: "50,000",
        rate: 17,
        tag: 'trashantuyet'
    },
    {
        image: './images/san-pham/sanpham2.png',
        name: 'Trà Oolong',
        price: "70,000",
        rate: 27,
        tag: 'traoolong'
    },
    {
        image: './images/san-pham/sanpham3.png',
        name: 'Trà Búp',
        price: "70,000",
        rate: 27,
        tag: 'trabup'
    },{
        image: './images/san-pham/sanpham1.png',
        name: 'Trà Shan Tuyết',
        price: "50,000",
        rate: 17,
        tag: 'trashantuyet'
    },
    {
        image: './images/san-pham/sanpham2.png',
        name: 'Trà Oolong',
        price: "70,000",
        rate: 27,
        tag: 'traoolong'
    },
    {
        image: './images/san-pham/sanpham3.png',
        name: 'Trà Búp',
        price: "70,000",
        rate: 27,
        tag: 'trabup'
    },{
        image: './images/san-pham/sanpham1.png',
        name: 'Trà Shan Tuyết',
        price: "50,000",
        rate: 17,
        tag: 'trashantuyet'
    },
    {
        image: './images/san-pham/sanpham2.png',
        name: 'Trà Oolong',
        price: "70,000",
        rate: 27,
        tag: 'traoolong'
    },
    {
        image: './images/san-pham/sanpham3.png',
        name: 'Trà Búp',
        price: "70,000",
        rate: 27,
        tag: 'trabup'
    },
]

const filterTag = (tagName, state) => {
    if (tagName.length == 0) return state;
    let showList = [];
    for (let i = 0; i < state.length; i++){
        for (let j = 0; j < tagName.length; j++)
            if (state[i].tag == tagName[j]) {
                showList.push(state[i]);
            }
    }
    return showList;
}

const filterPrice = (price, state) => {
    let showList = [];
    for (let index = 0; index < state.length; index++){
        if (parseInt(state[index].price) == price) {
            showList.push(state[index]);
        }
    }
    return showList;
}

const listsanpham = (state = initState, action) => {
    let showList = [...initState];
    switch (action.type) {
        case type.FILTER_TAG:
            let {tag} = action;
            return filterTag(tag,showList);    
        case type.FILTER_PRICE:
            let {price} = action;
            console.log(price);
            return filterPrice(price,showList);          
        default:
            break;
    }
    return state;
} 

export default listsanpham;