

export const searchProducts = (query) => {
    let searchUrl = search;
    if (query) {
        searchUrl + query
    }
    try {
        axios.get(searchUrl).then(res => {
            if (res) {
                return res.data;
            }
        })
    }
    catch (err) {

    }
}