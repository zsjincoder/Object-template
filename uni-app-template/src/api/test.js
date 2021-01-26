import http from "@/plugins/js_sdk/request/requestConfig";

/**
 * test
 * @param data
 * @return {*}
 */
export const test = (data) => {
    return http.request({
        url:'/test/test',
        method: 'get',
        data
    })
}
