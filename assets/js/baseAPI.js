// 注意：每次调用$.get() 或 $.post()或$.ajax() 的时候
// 会先调用 ajaxPrefilter 这个函数
// 在这个函数中，可以拿到我们给Ajax提供的配置对象
$.ajaxPrefilter(function (options) {
    // console.log(options.url)
    // 在发起真正的 Ajax 请求之前，统一拼接请求的根路径
    // options.url = 'http://www.liulongbin.top:3007' + options.url
    // http://big-event-api-t.itheima.net
    // options.url = 'http://big-event-api-t.itheima.net' + options.url
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url
    http://api-breakingnews-web.itheima.net
  
   
    // console.log(options.url)
    // 统一为有权限的接口，设置headers 请求头
    if(options.url.indexOf('/my/') !== -1){
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }
   
})