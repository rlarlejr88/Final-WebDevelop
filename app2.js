function invalidCheck() {
    var inputIdObj = document.querySelector("input[name=id]");
    var inputPwdObj = document.querySelector("input[name=pwd]");
    if (inputIdObj.value.length > 10) {
        alert("ID Error.");
        inputIdObj.focus();
        return false;
    }
    var rePwd1 = /\W/; 
    var rePwd2 = /\w/; 
    if (!rePwd1.test(inputPwdObj.value)) {
        alert("password error.");
        inputPwdObj.focus();
        return false;
    }
    if (!rePwd2.test(inputPwdObj.value)) {
        alert("english.")
        inputPwdObj.focus();
        return false;
    }
    return true;
}
function init() {
    var btLoginObj = document.querySelector("#btLogin");
    var formObj = document.querySelector("form");
    formObj.addEventListener("submit", function () {
        var requestURL = "login.do";
        this.action = requestURL;
        this.method = 'post';
        this.submit();
    });
    
}
window.addEventListener("load", init);