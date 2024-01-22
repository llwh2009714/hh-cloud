import request from "@/utils/request";

export function login(query) {
    return request({
        url: '/basic/supplier/loginSupplier',
        method: 'post',
        params: query
    })
}
