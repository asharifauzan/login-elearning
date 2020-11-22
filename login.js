let form     = document.getElementsByTagName('form')[0];
let email    = document.querySelector("[name='email']");
let password = document.querySelector("[name='password']");

form.addEventListener('submit', function(e) {
  e.preventDefault();
  // let email    = email.value;
  // let password = password.value;
  // console.log(email);
  // console.log(password);
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://asharifauzan.rf.gd/auth/login');
  xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      console.log(this.response);
    }
  }
  xhr.send('user_name='+email.value+'&userpass='+password.value);
});
