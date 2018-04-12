import util from '@/libs/util.js'

let ajaxApi = {};

ajaxApi.getShopInfo = function (id) {
    return util.ajax.get("/web/shop/v1/shop/" + id)
};

export default ajaxApi;