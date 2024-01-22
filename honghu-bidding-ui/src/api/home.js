import service from "@/utils/request";

export function getList(query) {
    return service({
        url: '/bidding/notice/list',
        method: 'get',
        params: query
    })
}

export function findAllByEndTime() {
    return service({
        url: '/bidding/notice/find',
        method: 'post'
    })
}

export function findTwoInfo(uid) {
    return service({
        url: '/bidding/notice/findTwoInfo/'+uid,
        method: 'get',
    })
}

export function downloadZip(data) {
    return service({
        url: '/bidding/tenderFile/downloadZip',
        method: 'post',
       data: data
    })
}


