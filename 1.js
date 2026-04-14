// [Script]
// name=Redirect /app/ to /pc/
// enabled=true
// description=Rewrite https://a.com/app/* → https://a.com/pc/*
// type=http-request
// timeout=10

// 获取原始请求 URL
const url = $request.url;

// 匹配 https://a.com/app/... 并替换为 https://a.com/pc/...
const newUrl = url.replace(/^https?:\/\/api\.yikao88\.com\/api-shop\/course\/app\//i, 'https://api.yikao88.com/api-shop/course/pc/v5/');

// ✅ 关键：使用 $done({url: newUrl}) 实现请求重写（QX 特性）
if (newUrl !== url) {
  $done({ url: newUrl });
} else {
  $done({});
}
