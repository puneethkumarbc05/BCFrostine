const { createProxyMiddleware } = require("http-proxy-middleware");

const proxy = {
    target: "https://ce.abbott.com",
    changeOrigin: true
}

const proxy2 = {
    target: "https://dog.ceo",
    changeOrigin: true
}

module.exports = function (app) {
    app.use("/micro/scheme",
        createProxyMiddleware(proxy)
    );
    app.use("/api/breeds",
        createProxyMiddleware(proxy2)
    )
}