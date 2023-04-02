// quy ước nhỏ: tất cả biến lư phần tử html đều có dấu $ đằng tước

// truy xuất phần tử thông qua id
const $title =document.getElementById('Big-title');

console.log($title);

// truy xuat phan tu thong qua class
const $paragraphs = document.getElementsByClassName('red-paragraph');
    for (const $paragraph of $paragraphs) {
        console.log($paragraph);
}


//lay ra thuoc tinh 1 phan tu
let titleAttributeValue = $title.getAttributes('id');
console.log(titleAttributeValue);

// truy xuat phan tu thong qua ten the
const $image = document.getElementsByTagName('img'); //tra ve html
 console.log($image);

 //xoa thuoc tinh 1 phan tu 
 $title.removeAttribute('data-goodbye');

 //them moi/thay doi thuoc tin mot phan tu
 $title.setAttribute('data-goodbye','This is goodbye');
 $title.setAttribute('data-goodbye','This is hello');

 //thay doi dinh dang cua phan tu
 $title.style.color = 'red';
 $title.style.backgroundColor = 'black';
 $title.style.display = 'flex';


 //them phan tu vao trang web
 const $link = document.createElement('a');
 $link.innerHTML = 'This is a link to somewhere';
 $link.setAttribute('href', 'http://google.com/');

 document.body.append($link);
// document.body.prepend($link);


$title.before($link); //them link vao truoc title
$title.after($link_); //them link vao sau title

// Khai bao listen la khai bao function
// listener sau ghi de listioner truoc
// $title.onclick = handleClickTitle1;
// $title.onclick = handleClickTitle2;

$title.addEventListener('click', handleClickTitle1);
$title.addEventListener('click', handleClickTitle2);

function handleClickTitle1 () {
    console.log('hello')
};

function handleClickTitle2 () {
    console.log('gooobye')
};

const $emailInput = document.getElementById('my-email');
$emailInput.oncharge = function () {
    let email = $emailInput.value; // lay gia tri user nhap vao o input
    let emailValid = isEmailValid(email);
    if (isEmailValid(email)) alert('Hay nhap lai email');
};

function isEmailValid(email){

}