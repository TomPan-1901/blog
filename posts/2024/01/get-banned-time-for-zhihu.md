---
title: 获取知乎用户的禁言时长
date: 2024-01-26
---

知乎前端做了SSR渲染，禁言信息放在标签js-initialData里，网页打开以后前端会把这个信息读出来，在顶部插入一个禁言提示的DOM。

createdAt是开始时间，expiredAt是结束时间，两个都是秒数需要乘以1000传进Date就能得到结束日期。 下面提供了一个TamperMonkey脚本来做这件事。问题中的用户被禁言到4月23号。

---

```js
// ==UserScript==
// @name         显示知乎用户禁言时间
// @namespace    http://tampermonkey.net/
// @version      2024-01-10
// @description  try to take over the world!
// @author       tompan-1901
// @match        https://www.zhihu.com/people/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zhihu.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const data = JSON.parse(document.getElementById("js-initialData").text)
    const result = document.createElement('div')
    const accountStatus = data.initialState.entities.users[document.URL.slice("https://".length).split('/')[2]].accountStatus[0]
    if (!accountStatus) {
        return
    }
    result.innerHTML = `<div style="position:absolute;left:0;top:0;z-index:1000;background-color:white;">
    <div>此用户被禁言到${new Date(accountStatus.createdAt*1000+accountStatus.expiredAt*1000).toLocaleDateString()}</div>
    </div>`
    const card = document.querySelector(".Card")
    card.style = "position: relative;"
    card.appendChild(result)
})();
```