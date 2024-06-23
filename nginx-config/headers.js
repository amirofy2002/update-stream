function headers_json(r) {
    r.log("TEST")
    return JSON.stringify(r.headersIn)
}

export default { headers_json };