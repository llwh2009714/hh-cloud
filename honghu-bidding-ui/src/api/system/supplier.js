import request from '@/utils/request'

// 查询合格供应商列表
export function listSupplier(query) {
    return request({
        url: '/basic/supplier/list',
        method: 'get',
        params: query
    })
}

export function listSupplier1(query) {
    return request({
        url: '/basic/supplier/noSupplierList',
        method: 'get',
        params: query
    })
}

export function listSupplier2(query) {
    return request({
        url: '/basic/supplier/supplierBadList',
        method: 'get',
        params: query
    })
}

// 查询供应商详细
export function getSupplier(hid) {
    return request({
        url: '/basic/supplier/' + hid,
        method: 'get'
    })
}

export function getSupplierByZrId(zrId) {
    return request({
        url: '/basic/supplier/access/' + zrId,
        method: 'get'
    })
}

// 新增供应商
export function addSupplier(data) {
    return request({
        url: '/system/supplier',
        method: 'post',
        data: data
    })
}

// 修改供应商
export function updateSupplier(data) {
    return request({
        url: '/basic/supplier',
        method: 'put',
        data: data
    })
}

// 删除供应商
export function delSupplier(hid) {
    return request({
        url: '/system/supplier/' + hid,
        method: 'delete'
    })
}

// 查询非招标
export function listNoBid(query) {
    return request({
        url: '/basic/supplier/noBidList',
        method: 'get',
        params: query
    })
}

export function getNobid(query) {
    return request({
        url: '/basic/supplier/fromCode',
        method: 'get',
        params: query
    })
}

export function listDev(query) {
    return request({
        url: '/basic/supplier/listDev',
        method: 'get',
        params: query
    })
}

export function listSubmission(query) {
    return request({
        url: '/basic/supplier/listSubmission',
        method: 'get',
        params: query
    })
}

export function onlyHCreditCode(query) {
    return request({
        url: '/basic/supplier/onlyHCreditCode',
        method: 'get',
        params: query
    })
}
