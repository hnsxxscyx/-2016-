function Observer(obj) {
    let proxy = {}
    proxy.data = new Proxy(obj, {
        get: function(target, property) {
            if (property in target) {
                if (typeof property === 'object') {

                } else {
                    console.log('你访问了' + property)
                    return target[property]
                }

            } else {
                console.log('没有' + property)
            }
        },
        set: function(target, key, value, receiver) {
            console.log('你设置了' + key)
            target[key] = value
        }
    })
    return proxy
}