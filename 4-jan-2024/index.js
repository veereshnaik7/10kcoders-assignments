var password = "aA$%hjgjsy2";
function iscorrect(password) {
  var uppercase1 = /[A-Z]/.test(password);
  var lowercase1 = /[A-Z]/.test(password);
  var number1 = /[0-9]/.test(password);
  var special1 = /[~@!$%^&*()-]/.test(password);
  var length = password.length >= 8 && password.length <= 16;
  return uppercase1 && lowercase1 && number1 && special1 && length;
}
console.log(iscorrect(password));

// phone number

function number(n) {
  var pattern = /(?=.*[0-9])[0-9.]/;
  var len = n.length == 10;
  res = pattern.test(n);
  return res && len;
}
console.log(number("7702513376"));

var pwd = "ASdshfu@5njkjthh";
function ispass(pwd) {
  var pattern =
    /(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[!@#$%^&*()_+=><,.{}?:;])[a-zA-Z\d!@#$%^&*()_+=><,.?{}:;~|]{8,16}$/;
  var res = pattern.test(pwd);
  return res;
}
console.log(ispass(pwd));

// ip adress
function ipAdress(add) {
  var pattern = /(?=.*^[\d])(?=.*[.])[\d.]{7,15}$/;
  res = pattern.test(add);
  return res;
}
console.log(ipAdress("255.255.255.375"));
