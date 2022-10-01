import * as type from "../../constants/ActionTypes";


const initState = [
    {
        name: 'Trà Shan Tuyết',
        image: '/images/chitietsanpham/img-1.jpg'
    },
    {
        name: 'Trà Oolong',
        image: '/images/chitietsanpham/img-2.jpg'
    },
    {
        name: 'Trà Búp',
        image: '/images/chitietsanpham/img-3.jpg'
    }
]

const slider = (state = initState, action) => {
    return state;
} 

export default slider;