Shopify.queryParams = {};

// Preserve existing query parameters
if (location.search.length) {
    let params = location.search.substr(1).split('&');

    for (let i = 0; i < params.length; i++) {
        let keyValue = params[i].split('=');

        if (keyValue.length) {
            Shopify.queryParams[decodeURIComponent(keyValue[0])] =
                decodeURIComponent(keyValue[1]);
        }
    }
}

// Update sort_by query parameter on select change
document.querySelector('#sortBy').addEventListener('change', function (e) {
    let value = e.target.value;

    Shopify.queryParams.sort_by = value;
    location.search = new URLSearchParams(Shopify.queryParams).toString();
});
