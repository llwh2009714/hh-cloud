import request from '@/utils/request'

// 新增供应商
export function addSupplier(data) {
    return request({
        url: '/basic/supplier',
        method: 'post',
        data: data
    })
}

// 修改供应商
export function updateSupplier(data) {
    return request({
        url: '/system/supplier',
        method: 'put',
        data: data
    })
}
