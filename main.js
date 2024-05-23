function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

var myButton = document.getElementById('myButton');

function handleClick() {

}


myButton.addEventListener('click', debounce(handleClick, 250));

document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;


    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);

    alert('Thông tin người dùng đã được lưu.');
    displayUserInfo();
});


const name = localStorage.getItem('userName');
const email = localStorage.getItem('userEmail');


if (name && email) {
    document.getElementById('userInfo').innerHTML = `<p>Tên: ${name}</p><p>Email: ${email}</p>`;
} else {
    document.getElementById('userInfo').innerHTML = '<p>Chưa có thông tin người dùng.</p>';
}