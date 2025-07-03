//* Пошук елементу за допомогою методу querySelector
const magicBtn = document.querySelector(".magic-btn"); //* Пошук елементу за класом
//* Пошук елементу за допомогою методу getElementById
const magicBtn2 = document.getElementById("magic-btn");
//* Пошук елементів за допомогою методу getElementsByClassName
const magicBtns = document.getElementsByClassName("magic-btn");
//* Пошук елементів за допомогою методу <getElementsByTagName>
const magicBtns2 = document.getElementsByTagName("button");
//* Пошук елементів за допомогою методу querySelectorAll
const magicBtns3 = document.querySelectorAll(".magic-btn");
//* Пошук елементів за допомогою методу getElementsByName
const magicBtns4 = document.getElementsByName("magic-btn");
//* Пошук елементів за допомогою методу querySelectorAll з псевдокласом :nth-child
const magicBtns5 = document.querySelectorAll(".magic-btn:nth-child(2)");
//* Пошук елементів за допомогою методу querySelectorAll з псевдокласом :nth-of-type
const magicBtns6 = document.querySelectorAll(".magic-btn:nth-of-type(2)");
//* Пошук елементів за допомогою методу querySelectorAll з псевдокласом :first-child
const magicBtns7 = document.querySelectorAll(".magic-btn:first-child");

//* Властивості "навігації" по DOM
const navEl = document.querySelector(".nav"); //де .nav - це клас елемента навігації
//* Пошук батьківського елемента
const navParent = navEl.parentElement; //* Пошук батьківського елемента, який має певний клас */
//* Пошук наступного сусіднього елемента
const navNextSibling = navEl.nextElementSibling;
//* Пошук попереднього сусіднього елемента
const navPreviousSibling = navEl.previousElementSibling;
//* Пошук першого дочірнього елемента
const navFirstChild = navEl.firstElementChild;
//* Пошук останнього дочірнього елемента
const navLastChild = navEl.lastElementChild;
//* Пошук всіх дочірніх елементів
const navChildren = navEl.children;
//* Пошук всіх дочірніх елементів з певним класом
const navChildrenWithClass = navEl.querySelectorAll(".nav-item");
//* Пошук всіх дочірніх елементів з певним тегом
const navChildrenWithTag = navEl.querySelectorAll("li");
//* Пошук всіх дочірніх елементів з певним атрибутом
const navChildrenWithAttribute = navEl.querySelectorAll("[data-nav]");
//* Пошук всіх дочірніх елементів з певним псевдокласом
const navChildrenWithPseudoClass = navEl.querySelectorAll(":nth-child(2)");

//* Текстова нода
const textNode = document.createTextNode("Hello, World!");
//* Додавання текстової ноди до елемента
const textContainer = document.querySelector(".text-container");
textContainer.appendChild(textNode);
//* Додавання текстової ноди до елемента з класом
const textContainerWithClass = document.querySelector(
  ".text-container-with-class"
);
textContainerWithClass.appendChild(textNode.cloneNode(true));
//* Додавання текстової ноди до елемента з тегом
const textContainerWithTag = document.querySelector(".text-container-with-tag");
textContainerWithTag.appendChild(textNode.cloneNode(true));
//* Додавання текстової ноди до елемента з атрибутом
const textContainerWithAttribute = document.querySelector(
  ".text-container-with-attribute"
);
textContainerWithAttribute.appendChild(textNode.cloneNode(true));
//* Додавання текстової ноди до елемента з псевдокласом
const textContainerWithPseudoClass = document.querySelector(
  ".text-container-with-pseudo-class"
);
textContainerWithPseudoClass.appendChild(textNode.cloneNode(true));

//* Властивості елемента (hero)
//* Властивості зоборження
const heroImage = document.querySelector(".hero-image"); //
//* Властивість src
const heroImageSrc = heroImage.src;
//* Властивість alt
const heroImageAlt = heroImage.alt;
//* Властивість width
const heroImageWidth = heroImage.width;
//* Властивість height
const heroImageHeight = heroImage.height;
//* Властивість naturalWidth
const heroImageNaturalWidth = heroImage.naturalWidth;
//* Властивість naturalHeight
const heroImageNaturalHeight = heroImage.naturalHeight;
//* Властивість complete
const heroImageComplete = heroImage.complete;
//* Властивість currentSrc
const heroImageCurrentSrc = heroImage.currentSrc;
//* Властивість crossOrigin
const heroImageCrossOrigin = heroImage.crossOrigin;
//* Властивість decoding
const heroImageDecoding = heroImage.decoding;
//* Властивість loading
const heroImageLoading = heroImage.loading;
//* Властивість referrerPolicy
const heroImageReferrerPolicy = heroImage.referrerPolicy; //* Властивість sizes
//* Властивість <srcset></srcset>

//* Текс та textContent
const heroText = document.querySelector(".hero-text");
//* Властивість innerText
const heroInnerText = heroText.innerText; //властивість innerText повертає текстовий вміст елемента, враховуючи CSS стилі, такі як display: none;
//* Властивість textContent
const heroTextContent = heroText.textContent;
//* Властивість outerText
const heroOuterText = heroText.outerText; // властивість outerText повертає текстовий вміст елемента, включаючи сам елемент, але без CSS стилів;
//* Властивість innerHTML
const heroInnerHTML = heroText.innerHTML; // властивість innerHTML повертає HTML вміст елемента, включаючи всі дочірні елементи;
//* Властивість outerHTML
const heroOuterHTML = heroText.outerHTML; // властивість outerHTML повертає HTML вміст елемента, включаючи сам елемент та всі дочірні елементи;

//* Атрибути елемента
const heroLink = document.querySelector(".hero-link"); // Пошук елемента за класом
//* Властивість href
const heroLinkHref = heroLink.href; // властивість href повертає URL посилання
//* Властивість target
const heroLinkTarget = heroLink.target; // властивість target повертає значення атрибута target
//* Властивість rel
const heroLinkRel = heroLink.rel; // властивість rel повертає значення атрибута rel
//* Властивість type
const heroLinkType = heroLink.type; // властивість type повертає значення атрибута type
//* Властивість download
const heroLinkDownload = heroLink.download; // властивість download повертає значення атрибута download
//* Властивість hreflang
const heroLinkHreflang = heroLink.hreflang; // властивість hreflang повертає значення атрибута hreflang
//* Властивість media
const heroLinkMedia = heroLink.media; // властивість media повертає значення атрибута media
//* Властивість charset
const heroLinkCharset = heroLink.charset; // властивість charset повертає значення атрибута charset
//* Властивість referrerPolicy
const heroLinkReferrerPolicy = heroLink.referrerPolicy; // властивість referrerPolicy повертає значення атрибута referrerPolicy
//* Властивість integrity
const heroLinkIntegrity = heroLink.integrity; // властивість integrity повертає значення атрибута integrity
//* Властивість crossorigin
const heroLinkCrossorigin = heroLink.crossOrigin; // властивість crossorigin повертає значення атрибута crossorigin

//* Атрибути 
//get(name) - отримання значення атрибута за його назвою
const heroLinkAttributes = heroLink.attributes; // властивість attributes повертає колекцію всіх атрибутів елемента
//* set(name, value) - встановлення значення атрибута
heroLink.setAttribute("data-hero", "true"); // встановлення значення атрибута data-hero
//* remove(name) - видалення атрибута
heroLink.removeAttribute("data-hero"); // видалення атрибута data-hero
//* has(name) - перевірка наявності атрибута
//const hasHeroLinkDataHero = heroLink.hasAttribute("data-hero"); // перевірка наявності атрибута data-hero
//* toggle(name, value) - перемикання значення атрибута
heroLink.toggleAttribute("data-hero", true); // перемикання значення атрибута data-hero
//* getNamedItem(name) - отримання атрибута за його назвою
const heroLinkDataHeroAttr = heroLink.attributes.getNamedItem("data-hero"); // отримання атрибута data-hero
//* setNamedItem(attr) - встановлення атрибута
const newAttr = document.createAttribute("data-hero");
newAttr.value = "true"; // створення нового атрибута data-hero
heroLink.attributes.setNamedItem(newAttr); // встановлення нового атрибута data-hero
//* removeNamedItem(name) - видалення атрибута за його назвою
heroLink.attributes.removeNamedItem("data-hero"); // видалення атрибута data-hero
//* hasNamedItem(name) - перевірка наявності атрибута за його назвою
const hasHeroLinkDataHeroNamed = heroLink.attributes.hasNamedItem("data-hero"); // перевірка наявності атрибута data-hero
//* toggleNamedItem(name, value) - перемикання значення атрибута за його назвою
heroLink.attributes.toggleNamedItem("data-hero", true); // перемикання значення атрибута data-hero
//* getNamedItemNS(namespace, name) - отримання атрибута за його просторовим іменем та назвою
const heroLinkDataHeroNS = heroLink.attributes.getNamedItemNS(
  "http://www.w3.org/1999/xhtml",
  "data-hero"
); // отримання атрибута data-hero з просторовим іменем http://www.w3.org/1999/xhtml
//* setNamedItemNS(attr) - встановлення атрибута з просторовим іменем
const newAttrNS = document.createAttributeNS(
  "http://www.w3.org/1999/xhtml",
  "data-hero"
);  // створення нового атрибута data-hero з просторовим іменем http://www.w3.org/1999/xhtml
newAttrNS.value = "true"; // встановлення значення атрибута data-hero
heroLink.attributes.setNamedItemNS(newAttrNS); // встановлення нового атрибута data-hero з просторовим іменем http://www.w3.org/1999/xhtml  


//* removeNamedItemNS(namespace, name) - видалення атрибута з просторовим іменем та назвою
heroLink.attributes.removeNamedItemNS(
  "http://www.w3.org/1999/xhtml",
  "data-hero"
); // видалення атрибута data-hero з просторовим іменем http://www.w3.org/1999/xhtml  
//* hasNamedItemNS(namespace, name) - перевірка наявності атрибута з просторовим іменем та назвою
const hasHeroLinkDataHeroNS = heroLink.attributes.hasNamedItemNS(
  "http://www.w3.org/1999/xhtml",
  "data-hero"
); // перевірка наявності атрибута data-hero з просторовим іменем http://www.w3.org/1999/xhtml

//* Data-атрибути
//* Властивість dataset
const heroLinkDataset = heroLink.dataset; // властивість dataset повертає об'єкт з усіма data-атрибутами елемента
//* Доступ до data-атрибутів  
const heroLinkDataHero = heroLink.dataset.hero; // доступ до data-атрибута data-hero
//* Встановлення data-атрибута
heroLink.dataset.hero = "true"; // встановлення значення data-атрибута data-hero
//* Видалення data-атрибута
delete heroLink.dataset.hero; // видалення data-атрибута data-hero
//* Перевірка наявності data-атрибута
const hasHeroLinkDataHeroDataset = "hero" in heroLink.dataset; // перевірка наявності data-атрибута data-hero
//* Перебір data-атрибутів
for (const key in heroLink.dataset) {
  console.log(`${key}: ${heroLink.dataset[key]}`); // перебір всіх data-атрибутів
}
//* Додавання нового data-атрибута
heroLink.dataset.newAttribute = "newValue"; // додавання нового data-атрибута data-new-attribute
//* Видалення нового data-атрибута
delete heroLink.dataset.newAttribute; // видалення нового data-атрибута data-new-attribute
//* Перевірка наявності нового data-атрибута
const hasHeroLinkNewAttribute = "newAttribute" in heroLink.dataset; // перевірка наявності нового data-атрибута data-new-attribute
//* Перебір всіх data-атрибутів з новим data-атрибутом
for (const key in heroLink.dataset) {
  console.log(`${key}: ${heroLink.dataset[key]}`); // перебір всіх data-атрибутів з новим data-атрибутом
}
//* Додавання нового data-атрибута з просторовим іменем
heroLink.dataset.newAttributeNS = "newValue"; // додавання нового data-атрибута data-new-attribute з просторовим іменем http://www.w3.org/1999/xhtml
//* Видалення нового data-атрибута з просторовим іменем 
delete heroLink.dataset.newAttributeNS; // видалення нового data-атрибута data-new-attribute з просторовим іменем http://www.w3.org/1999/xhtml
//* Перевірка наявності нового data-атрибута з просторовим іменем
const hasHeroLinkNewAttributeNS = "newAttributeNS" in heroLink.dataset; // перевірка наявності нового data-атрибута data-new-attribute з просторовим іменем http://www.w3.org/1999/xhtml
//* Перебір всіх data-атрибутів з новим data-атрибутом з просторовим іменем
for (const key in heroLink.dataset) {
  console.log(`${key}: ${heroLink.dataset[key]}`); // перебір всіх data-атрибутів з новим data-атрибутом з просторовим іменем
} 
//* Додавання нового data-атрибута з просторовим іменем та назвою
const newAttrNS2 = document.createAttributeNS(
  "http://www.w3.org/1999/xhtml",
  "data-new-attribute"
); // створення нового data-атрибута data-new-attribute з просторовим іменем http://www.w3.org/1999/xhtml

//* Інтерфейс classList

const heroElement = document.querySelector(".hero"); // Пошук елемента за класом 
//* Додавання класу
heroElement.classList.add("new-class"); // додавання класу new-class
//* Видалення класу
heroElement.classList.remove("new-class"); // видалення класу new-class
//* Перевірка наявності класу
const hasHeroNewClass = heroElement.classList.contains("new-class"); // перевірка наявності класу new-class
//* Перемикання класу
heroElement.classList.toggle("new-class"); // перемикання класу new-class
//* Додавання класу, якщо його немає, або видалення, якщо він є
heroElement.classList.toggle("new-class", true); // додавання класу new-class, якщо його немає, або видалення, якщо він є
//* Додавання класу, якщо його немає, або видалення, якщо він є
heroElement.classList.toggle("new-class", false); // видалення класу new-class, якщо він є, або додавання, якщо його немає
//* Отримання всіх класів
const heroClasses = heroElement.classList; // отримання всіх класів елемента
//* Перебір всіх класів
heroElement.classList.forEach((className) => {
  console.log(className); // перебір всіх класів елемента
});
//* Додавання декількох класів
heroElement.classList.add("class1", "class2", "class3"); // додавання декількох класів class1, class2, class3
//* Видалення декількох класів
heroElement.classList.remove("class1", "class2", "class3"); // видалення декількох класів class1, class2, class3
//* Перевірка наявності декількох класів
const hasHeroClasses = heroElement.classList.contains("class1") && heroElement.classList.contains("class2") && heroElement.classList.contains("class3"); // перевірка наявності декількох класів class1, class2, class3
//* Перемикання декількох класів
heroElement.classList.toggle("class1", true); // перемикання класу class1

herroElement.classList.replace("class1", "class2"); // заміна класу class1 на class2
//* Додавання класу, якщо його немає, або видалення, якщо він є 
heroElement.classList.toggle("class1", true); // додавання класу class1, якщо його немає, або видалення, якщо він є
//* Додавання класу, якщо його немає, або видалення, якщо він є
heroElement.classList.toggle("class1", false); // видалення класу class1, якщо він є, або додавання, якщо його немає
//* Отримання всіх класів з просторовим іменем
const heroClassesNS = heroElement.classList; // отримання всіх класів елемента з просторовим іменем
//* Перебір всіх класів з просторовим іменем
heroElement.classList.forEach((className) => {
  console.log(className); // перебір всіх класів елемента з просторовим іменем
});
//* Додавання декількох класів з просторовим іменем
heroElement.classList.add("class1", "class2", "class3"); // додавання декількох класів class1, class2, class3 з просторовим іменем
//* Видалення декількох класів з просторовим іменем
heroElement.classList.remove("class1", "class2", "class3"); // видалення декількох класів class1, class2, class3 з просторовим іменем
//* Перевірка наявності декількох класів з просторовим іменем
const hasHeroClassesNS = heroElement.classList.contains("class1") && heroElement.classList.contains("class2") && heroElement.classList.contains("class3"); // перевірка наявності декількох класів class1, class2, class3 з просторовим іменем
//* Перемикання декількох класів з просторовим іменем
heroElement.classList.toggle("class1", true); // перемикання класу class1 з просторовим іменем
//* Замінити клас з просторовим іменем
heroElement.classList.replace("class1", "class2"); // заміна класу class1 на class2 з просторовим іменем
//* Додавання класу, якщо його немає, або видалення, якщо він є
heroElement.classList.toggle("class1", true); // додавання класу class1, якщо його немає, або видалення, якщо він є

//* Створення та додавання елементів
const newElement = document.createElement("div"); // створення нового елемента div
//* Встановлення класу
newElement.className = "new-element"; // встановлення класу new-element
//* Встановлення id
newElement.id = "new-element-id"; // встановлення id new-element-id
//* Встановлення атрибутів
newElement.setAttribute("data-new-attribute", "newValue"); // встановлення атрибута data-new-attribute
//* Встановлення текстового вмісту
newElement.textContent = "Hello, World!"; // встановлення текстового вмісту
//* Встановлення HTML вмісту
newElement.innerHTML = "<p>Hello, World!</p>"; // встановлення HTML вмісту
//* Додавання елемента до DOM
const container = document.querySelector(".container"); // Пошук контейнера для додавання нового елемента
container.appendChild(newElement); // додавання нового елемента до контейнера
//* Додавання елемента перед іншим елементом
const referenceElement = document.querySelector(".reference-element"); // Пошук елемента, перед яким буде додано новий елемент
container.insertBefore(newElement, referenceElement); // додавання нового елемента перед іншим елементом
//* Додавання елемента в кінець контейнера
container.appendChild(newElement); // додавання нового елемента в кінець контейнера
//* Додавання елемента на початок контейнера
container.insertBefore(newElement, container.firstChild); // додавання нового елемента на початок контейнера
//* Додавання елемента в кінець контейнера з використанням insertAdjacentHTML
container.insertAdjacentHTML("beforeend", "<div class='new-element'>Hello, World!</div>"); // додавання нового елемента в кінець контейнера з використанням insertAdjacentHTML
//* Додавання елемента на початок контейнера з використанням insertAdjacentHTML
container.insertAdjacentHTML("afterbegin", "<div class='new-element'>Hello, World!</div>"); // додавання нового елемента на початок контейнера з використанням insertAdjacentHTML
//* Додавання елемента перед іншим елементом з використанням insertAdjacentHTML
container.insertAdjacentHTML("beforebegin", "<div class='new-element'>Hello, World!</div>"); // додавання нового елемента перед іншим елементом з використанням insertAdjacentHTML
//* Додавання елемента після іншого елемента з використанням insertAdjacentHTML
container.insertAdjacentHTML("afterend", "<div class='new-element'>Hello, World!</div>"); // додавання нового елемента після іншого елемента з використанням insertAdjacentHTML
//* Додавання елемента в кінець контейнера з використанням insertAdjacentElement
container.insertAdjacentElement("beforeend", newElement); // додавання нового елемента в кінець контейнера з використанням insertAdjacentElement
//* Додавання елемента на початок контейнера з використанням insertAdjacentElement
container.insertAdjacentElement("afterbegin", newElement); // додавання нового елемента на початок контейнера з використанням insertAdjacentElement
//* Додавання елемента перед іншим елементом з використанням insertAdjacentElement
container.insertAdjacentElement("beforebegin", newElement); // додавання нового елемента перед іншим елементом з використанням insertAdjacentElement

//* Створенн заголовку
const newHeading = document.createElement("h1"); // створення нового заголовку
newHeading.textContent = "New Heading"; // встановлення текстового вмісту заголовку
//* Додавання заголовку до контейнера
container.appendChild(newHeading); // додавання заголовку до контейнера
//* Додавання заголовку перед іншим елементом
container.insertBefore(newHeading, referenceElement); // додавання заголовку перед іншим елементом
//* Додавання заголовку в кінець контейнера
container.appendChild(newHeading); // додавання заголовку в кінець контейнера
//* Додавання заголовку на початок контейнера
container.insertBefore(newHeading, container.firstChild); // додавання заголовку на початок контейнера
//* Додавання заголовку в кінець контейнера з використанням insertAdjacentHTML
container.insertAdjacentHTML("beforeend", "<h1>New Heading</h1>"); // додавання заголовку в кінець контейнера з використанням insertAdjacentHTML
//* Додавання заголовку на початок контейнера з використанням insertAdjacentHTML
container.insertAdjacentHTML("afterbegin", "<h1>New Heading</h1>"); // додавання заголовку на початок контейнера з використанням insertAdjacentHTML
//* Додавання заголовку перед іншим елементом з використанням insertAdjacentHTML
container.insertAdjacentHTML("beforebegin", "<h1>New Heading</h1>"); // додавання заголовку перед іншим елементом з використанням insertAdjacentHTML
//* Додавання заголовку після іншого елемента з використанням insertAdjacentHTML
container.insertAdjacentHTML("afterend", "<h1>New Heading</h1>"); // додавання заголовку після іншого елемента з використанням insertAdjacentHTML
document.body.append(newHeading); // Додавання заголовку в кінець контейнера з використанням append
document.body.insertAdjacentElement("beforeend", newHeading);

const img = document.createElement("img"); // створення нового зображення
img.src = "https://example.com/image.jpg"; // встановлення джерела зображення
img.alt = "Example Image"; // встановлення альтернативного тексту зображення
imgEl.width = 300; // встановлення ширини зображення
imgEl.height = 200; // встановлення висоти зображення 
//* Додавання зображення до контейнера
container.appendChild(img); // додавання зображення до контейнера

heroElement.append(imgEl, titleEl);// Додавання зображення та заголовку до елемента hero
const newItemEl = document.createElement("li"); // створення нового елемента списку
newItemEl.classList.add("new-item"); // встановлення класу нового елемента списку
const newlinkEl = document.createElement("a"); // створення нового посилання
new
newLinkEl.textContent = "New Item"; // встановлення текстового вмісту нового посилання
newItemEl.append(newLinkEl); // додавання нового посилання до нового елемента списку

//* Властивість innerHTML
const containerWithHTML = document.querySelector(".container-with-html"); // Пошук контейнера з HTML вмістом
//* Встановлення HTML вмісту
containerWithHTML.innerHTML = "<p>Hello, World!</p>"; // встановлення HTML вмісту контейнера
//* Додавання HTML вмісту до контейнера
containerWithHTML.insertAdjacentHTML("beforeend", "<p>New HTML Content</p>"); // додавання нового HTML вмісту до контейнера
//* Додавання HTML вмісту перед іншим елементом
containerWithHTML.insertAdjacentHTML("beforebegin", "<p>New HTML Content Before</p>"); // додавання нового HTML вмісту перед іншим елементом
//* Зчитування HTML вмісту
const containerWithHTMLContent = containerWithHTML.innerHTML; // зчитування HTML вмісту контейнера
//* Зчитування HTML вмісту з використанням outerHTML
const containerWithHTMLOuterContent = containerWithHTML.outerHTML; // зчитування HTML вмісту контейнера з використанням outerHTML
//* Запис HTML вмісту
containerWithHTML.outerHTML = "<div class='new-container'>New HTML Content</div>"; // запис нового HTML вмісту контейнера з використанням outerHTML
//* Додавання HTML вмісту до контейнера з використанням insertAdjacentHTML
containerWithHTML.insertAdjacentHTML("afterbegin", "<p>New HTML Content at Start</p>"); // додавання нового HTML вмісту на початок контейнера з використанням insertAdjacentHTML
//* Додавання HTML вмісту в кінець контейнера з використанням insertAdjacentHTML
//* Видалення HTML вмісту
containerWithHTML.innerHTML = ""; // видалення HTML вмісту контейнера
//* Видалення HTML вмісту з використанням outerHTML
containerWithHTML.outerHTML = ""; // видалення HTML вмісту контейнера з використанням outerHTML
//* Вставвка розмітка за допомогою insertAdjacentHTML
containerWithHTML.insertAdjacentHTML("beforeend", "<p>New HTML Content at End</p>"); // вставка нового HTML вмісту в кінець контейнера з використанням insertAdjacentHTML
//* Вставка розмітки перед іншим елементом з використанням insertAdjacentHTML
containerWithHTML.insertAdjacentHTML("beforebegin", "<p>New HTML Content Before</p>"); // вставка нового HTML вмісту перед іншим елементом з використанням insertAdjacentHTML
//* Вставка розмітки після іншого елемента з використанням insertAdjacentHTML
containerWithHTML.insertAdjacentHTML("afterend", "<p>New HTML Content After</p>"); // вставка нового HTML вмісту після іншого елемента з використанням insertAdjacentHTML
//* Властивість insertAdjacentElement
containerWithHTML.insertAdjacentElement("beforeend", newItemEl); // вставка нового елемента в кінець контейнера з використанням insertAdjacentElement
//* Властивість insertAdjacentText
containerWithHTML.insertAdjacentText("beforeend", "New Text Content"); // вставка нового текстового вмісту в кінець контейнера з використанням insertAdjacentText
//* Властивість insertAdjacentHTML з просторовим іменем
containerWithHTML.insertAdjacentHTML("beforeend", "<p>New HTML Content with Namespace</p>"); // вставка нового HTML вмісту з просторовим іменем в кінець контейнера з використанням insertAdjacentHTML
