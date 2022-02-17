const customFetch = (timeout, data) => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve(data)
            }, timeout)
        } else {
            reject('ERROR')
        }
    })
}

export default customFetch;
