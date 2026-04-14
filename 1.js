// 1.js —— 托管在 GitHub（raw 链接）
const newUrl = $request.url.replace(/(\/course\/)app\//, "$1pc/v5/");
$done({ url: newUrl });
