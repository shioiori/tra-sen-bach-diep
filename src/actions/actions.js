import * as types from "../constants/ActionTypes";
export const act_list_product = () => {
    return {
        type: types.LIST_PRODUCT
    }
};

export const act_show_item = (name) => {
    return {
        type: types.SHOW_ITEM,
        name
    }
};

export const act_update_item = (name) => {
    return {
        type: types.UPDATE_ITEM,
        name
    }
};

export const act_slider_item = (name) => {
    return {
        type: types.SLIDER_ITEM,
        name
    }
};

export const act_remove_item = (product) => {
    return {
        type: types.REMOVE_ITEM,
        product,
    }
};

export const act_filter_tag = (tag) => {
    return {
        type: types.FILTER_TAG,
        tag,
    }
};

export const act_filter_price = (price) => {
    return {
        type: types.FILTER_PRICE,
        price,
    }
};