import request from '@/utils/request'

// 查询供应商非招标项目列表
export function listPro(query) {
    return request({
        url: '/basic/pro/list',
        method: 'get',
        params: query
    })
}

export function check(query) {
    return request({
        url: '/basic/pro/checkIsJoin',
        method: 'get',
        params: query
    })
}

// 查询供应商非招标项目详细
export function getPro(gfId) {
    return request({
        url: '/basic/pro/' + gfId,
        method: 'get'
    })
}

// 新增供应商非招标项目
export function addPro(data) {
    return request({
        url: '/basic/pro',
        method: 'post',
        data: data
    })
}

// 修改供应商非招标项目
export function updatePro(data) {
    return request({
        url: '/basic/pro',
        method: 'put',
        data: data
    })
}

// 删除供应商非招标项目
export function delPro(gfId) {
    return request({
        url: '/basic/pro/' + gfId,
        method: 'delete'
    })
}
