import request from '@/utils/request'

// 查询合同列表
export function listContract(query) {
    return request({
        url: '/basic/contract/list',
        method: 'get',
        params: query
    })
}
