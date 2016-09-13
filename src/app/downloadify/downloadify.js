/**
 * Created by yaoshining on 16/9/13.
 */

function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}

function download(target) {
    let content, url = null;
    if(target instanceof HTMLElement) {
        content = target.outerHTML;
    }
    if(typeof target === 'string') {
        content = target;
    }
    if(content) {
        url = `data:application/octet-stream;base64,${b64EncodeUnicode(content)}`;
        window.open(url);
    }
}

export default download;