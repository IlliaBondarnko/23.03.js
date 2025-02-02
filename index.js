// Створити галерею зображень, яку можна прогортати за допомогою клавіш клавіатури (наприклад, вліво / вправо)

// ДРУГЕ

// 2. Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. При натисканні на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає 1 параметр amount - число. Функція створює стільки div, скільки вказано в amount і додає їх в div#boxes.
// Кожен створений div:
// Має випадковий rgb колір фону
// Розміри найпершого div - 30px на 30px
// Кожен наступний div після першого, повинен бути ширше і вище попереднього на   10px
// Створи функцію destroyBoxes(), яка очищає div#boxes.
// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Створити</button>
//   <button type="button" data-action="destroy">Очистити</button>
// </div>

// <div id="boxes"></div>

document.addEventListener("keydown", (event) => {
  // preventDefault - забороняє дії за заовчуванням
  event.preventDefault();

  console.log(event);
  if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
    document.body.style.backgroundColor = "#000000";
  }

  if (event.shiftKey && event.code === "KeyQ") {
    console.log("keyQ");
  }
});


var img = document.getElementById("myImage");
img.addEventListener("ArrowRight", function(){
  if(img.src != "images/pic2.png"){
    img.src = "images/pic2.png";}
  else{
    img.src = "images/pic1.png";}});