// ヘッダー　ハンバーガーメニュー
const $menuBtn = document.getElementById("menu-button");
const $menu = document.getElementById("menu");
const $closeBtn = document.getElementById("close-button");
const $menuItem = document.getElementsByClassName("menu-item");

$menuBtn.addEventListener("click", () => {
  $menu.classList.toggle("is-active");
});

$closeBtn.addEventListener("click", () => {
  $menu.classList.toggle("is-active");
});

for (let i = 0; i < $menuItem.length; i++) {
  $menuItem[i].addEventListener("click", () => {
    $menu.classList.toggle("is-active");
  });
}


// BBBが選ばれる理由、受講生の声
// 画面に表示されると要素が現れる
const $reasonLeft = document.getElementById("reason-box-left");
const $reasonRight = document.getElementById("reason-box-right");
const $fb1 = document.getElementById("feedback1");
const $fb2 = document.getElementById("feedback2");
const $fb3 = document.getElementById("feedback3");

window.addEventListener("scroll", () => {
  let onceLeft = false;
  const leftPosition = $reasonLeft.getBoundingClientRect().top;
  if (leftPosition <= window.innerHeight && onceLeft !== true) {
    onceLeft = true;
    $reasonLeft.classList.add("slide-left");
  }

  let onceRight = false;
  const rightPosition = $reasonRight.getBoundingClientRect().top;
  if (rightPosition <= window.innerHeight && onceRight !== true) {
    onceRight = true;
    $reasonRight.classList.add("slide-right");
  }

  let onceFb1 = false;
  const fb1Position = $fb1.getBoundingClientRect().top;
  if (fb1Position <= window.innerHeight && onceFb1 !== true) {
    onceFb1 = true;
    $fb1.classList.add("fb1-zoomin");
  }

  let onceFb2 = false;
  const fb2Position = $fb2.getBoundingClientRect().top;
  if (fb2Position <= window.innerHeight && onceFb2 !== true) {
    onceFb2 = true;
    $fb2.classList.add("fb2-zoomin");
  }

  let onceFb3 = false;
  const fb3Position = $fb3.getBoundingClientRect().top;
  if (fb3Position <= window.innerHeight && onceFb3 !== true) {
    onceFb3 = true;
    $fb3.classList.add("fb3-zoomin");
  }
});
