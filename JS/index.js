var sendBtn = document.getElementById('send');
var searchInput = document.getElementById('search');

sendBtn.onclick = function(params) {
    if (searchInput.value) {
        renderDom('mine', searchInput.value);
        AJAX({
            method: 'get',
            url: 'https://developer.duyiedu.com/edu/turing/chat',
            data: {
                text: searchInput.value
            },
            success: function(res) {
                renderDom('robot', res.text);
            }
        });
        searchInput.value = '';
    }
}

searchInput.onkeydown = function(e) {
    if (e.keyCode === 13) {
        sendBtn.onclick();
    }
}

/**
 * 
 * @param {string} who  代表谁说的话，那就创建谁的dom
 * @param {string} text 说话的内容
 */

function renderDom(who, text) {
    var content = document.getElementsByClassName('content')[0];
    var dom = document.createElement('div');
    dom.className = 'clearfix';
    dom.classList.add(who);
    dom.innerHTML = '<img src="./img/' + who + '.jpg" alt="">';
    var textDom = document.createElement('div');
    textDom.className = 'text';
    textDom.innerText = text;
    dom.appendChild(textDom);
    content.appendChild(dom);
    // 设置滚动条滚动的距离  scrollHeight 获取的是当没有滚动条被自己的内容去撑开的时候内容的高度
    content.scrollTop = content.scrollHeight;
}