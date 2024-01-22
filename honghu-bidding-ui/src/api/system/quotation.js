import request from '@/utils/request'

// 查询报价单列表
export function listQuotation(query) {
    return request({
        url: '/basic/quotation/list',
        method: 'get',
        params: query
    })
}

// 查询报价单详细
export function getQuotation(bjId) {
    return request({
        url: '/basic/quotation/' + bjId,
        method: 'get'
    })
}

// 新增报价单
export function addQuotation(data) {
    return request({
        url: '/basic/quotation',
        method: 'post',
        data: data
    })
}

// 修改报价单
export function updateQuotation(data) {
    return request({
        url: '/basic/quotation',
        method: 'put',
        data: data
    })
}

// 删除报价单
export function delQuotation(bjId) {
    return request({
        url: '/basic/quotation/' + bjId,
        method: 'delete'
    })
}

export function oneQuo(query) {
    return request({
        url: '/basic/quotation/oneQuo',
        method: 'get',
        params: query
    })
}
