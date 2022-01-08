function getData() {
    $.ajax({
    // 将Ajax请求设置为同步进行的
    async: false,
    // 请求地址
    url: "http://127.0.0.1:8000/data",
    // 请求类型为GET
    type: "GET",
    // 设置返回数据为json格式
    dataType: "json",
    // 请求成功回调函数
    success: function(data) {
        console.log("请求成功");
        infomation = data;
        console.log(data);
    },
})
}
getData();
// setInterval(getData, 1000);