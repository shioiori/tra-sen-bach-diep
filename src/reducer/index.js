import {combineReducers} from 'redux'
import spnoibat from './trangchu/spnoibat'
import nghenhantradao from './trangchu/nghenhantradao'
import tintuc from './tintuc/tintuc'
import listsanpham from './sanpham/listsanpham'
import sanphamtuongtu from './chitietsanpham/sanphamtuongtu'
import slider from './chitietsanpham/slider'
import chitietsanpham from './chitietsanpham/chitietsanpham'

export const reducer = combineReducers({
    spnoibat,
    nghenhantradao,
    tintuc,
    listsanpham,
    sanphamtuongtu,
    slider,
    chitietsanpham
})