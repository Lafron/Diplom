/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/services */ \"./modules/services.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/accordeon */ \"./modules/accordeon.js\");\n/* harmony import */ var _modules_scrollUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scrollUp */ \"./modules/scrollUp.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/carousel */ \"./modules/carousel.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_services__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_scrollUp__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/accordeon.js":
/*!******************************!*\
  !*** ./modules/accordeon.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst accordeon = () => {\r\n    const selection = document.querySelector(\".accordeon-section\");\r\n    const accElements = selection.querySelectorAll(\".element\");\r\n    const elements = document.querySelectorAll(\".element\");\r\n\r\n    const handleMenu = e =>{\r\n        closeAccordion();\r\n\r\n        const element = e.target.parentNode;\r\n        const title = element.querySelector(\".title\");\r\n        const content = element.querySelector(\".element-content\");\r\n        \r\n        element.classList.toggle(\"active\");\r\n        title.classList.toggle(\"active\");\r\n\r\n        content.style.display = \"block\";\r\n    };\r\n\r\n    const closeAccordion = () => {\r\n        accElements.forEach(acc => {\r\n            let title = acc.querySelector(\".title\");\r\n            let content = acc.querySelector(\".element-content\");\r\n\r\n            acc.classList.remove(\"active\");\r\n            title.classList.remove(\"active\");\r\n            content.style.display = \"none\";\r\n        });\r\n    };\r\n\r\n\r\n    selection.addEventListener(\"click\", e => {\r\n        //console.log(\"selection\");\r\n        if(e.target.closest(\".title\")){\r\n            handleMenu(e);            \r\n        }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack:///./modules/accordeon.js?");

/***/ }),

/***/ "./modules/carousel.js":
/*!*****************************!*\
  !*** ./modules/carousel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst carousel = () => {\r\n    const rowServices = document.querySelector(\".services-carousel\");\r\n    const elements = rowServices.querySelectorAll(\".col-sm-6\");\r\n    const arrow = document.querySelector(\".services-arrow\");\r\n\r\n    const modWind = document.querySelector(\"div[class='modal-callback']\");\r\n    const backWind = document.querySelector(\".modal-overlay\");\r\n\r\n    const handleMenu = e =>{\r\n        e.preventDefault();\r\n\r\n        backWind.style.display = \"block\";\r\n        modWind.style.display = \"block\";\r\n    }; \r\n\r\n    let currentSlide = 0;\r\n\r\n    elements.forEach((elem, ind) => {\r\n        if(ind > 2){\r\n            elem.remove();\r\n        }\r\n    });\r\n\r\n    const moveRight = (elements, index) => {\r\n        if(index > 3){\r\n            index = index - 6;\r\n        }\r\n        let arrElem = rowServices.querySelectorAll(\".col-sm-6\");\r\n\r\n        rowServices.replaceChild(arrElem[1], arrElem[0]);\r\n        rowServices.appendChild(elements[index + 2]);\r\n\r\n    };\r\n\r\n     const moveLeft = (elements, index) => {\r\n        if(index < 0){\r\n            index = index + 6;\r\n        }\r\n        let arrElem = rowServices.querySelectorAll(\".col-sm-6\");\r\n\r\n        rowServices.replaceChild(arrElem[1], arrElem[2]);\r\n        rowServices.prepend(elements[index]);\r\n    };\r\n\r\n    arrow.addEventListener(\"click\", e => {\r\n        e.preventDefault();\r\n\r\n        if(!e.target.closest(\"img\")){\r\n            return;\r\n        }\r\n\r\n        if(e.target.matches(\".arrow-right\")){\r\n            currentSlide++;\r\n            moveRight(elements, currentSlide);\r\n        }\r\n        else if(e.target.matches(\".arrow-left\")){\r\n            currentSlide--;\r\n            moveLeft(elements, currentSlide);\r\n        }\r\n        \r\n        if(currentSlide >= elements.length){\r\n            currentSlide = 0;\r\n        }\r\n        if(currentSlide < 0){\r\n            currentSlide = elements.length - 1 ;\r\n        }\r\n        \r\n    });\r\n\r\n    rowServices.addEventListener(\"click\", e => {\r\n        if(e.target.closest(\"a\")){\r\n            handleMenu(e);            \r\n        }\r\n    });\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel);\n\n//# sourceURL=webpack:///./modules/carousel.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\"use strick\";\r\n\r\nconst modal = () => {\r\n    const modWind = document.querySelector(\"div[class='modal-callback']\");\r\n    const backWind = document.querySelector(\".modal-overlay\");\r\n    \r\n    const modalCallback = document.querySelector(\".modal-callback\");\r\n    const main = document.querySelector(\".main-wrapper\");\r\n\r\n    const handleMenu = e =>{\r\n        e.preventDefault();\r\n        backWind.style.display = \"block\";\r\n        modWind.style.display = \"block\";\r\n\r\n    }; \r\n\r\n    const closeMenu = e =>{\r\n        e.preventDefault();\r\n        backWind.style.display = \"none\";\r\n        modWind.style.display = \"none\";\r\n    }; \r\n\r\n    main.addEventListener(\"click\", e => {\r\n        if(e.target.closest(\".callback-btn\")){\r\n            handleMenu(e);            \r\n        }\r\n        \r\n    });\r\n\r\n    modalCallback.addEventListener(\"click\", e => {\r\n        if(e.target.closest(\".modal-close\")){\r\n            closeMenu(e);\r\n        }\r\n    });\r\n\r\n    backWind.addEventListener(\"click\", e => {\r\n         closeMenu(e);\r\n    });\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scrollUp.js":
/*!*****************************!*\
  !*** ./modules/scrollUp.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scrollUp = () => {\r\n    const arr = document.querySelector(\".up\");\r\n\r\n    arr.addEventListener(\"click\", e => {\r\n        let aim = document.querySelector(\".main-wrapper\");\r\n        aim.scrollIntoView({behavior: \"smooth\"});\r\n        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {\r\n            arr.style.display = \"none\";\r\n        }\r\n        else{\r\n            arr.style.display = \"block\";\r\n        }\r\n    });\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollUp);\n\n//# sourceURL=webpack:///./modules/scrollUp.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = () => {\r\n    const form = document.querySelector(\"form\");\r\n    const modWind = document.querySelector(\"div[class='modal-callback']\");\r\n    const backWind = document.querySelector(\".modal-overlay\");\r\n    const submit = form.querySelector(\"input[type='submit']\");\r\n\r\n    const statusBlock = document.createElement(\"div\");\r\n\r\n    const loadText = \"идет отправка\";\r\n    const errorText = \"Ошибка\";\r\n    const successText = \"отправлено\";\r\n    \r\n    const validate = list =>{\r\n        let success = true;\r\n\r\n        list.forEach(input => {\r\n            if(input.name == \"fio\"){                \r\n                const letters = /^[А-Яа-яёЁ]+$/;\r\n                if(!input.value.match(letters)){\r\n                    success = false;\r\n                    return success;\r\n                }    \r\n            }\r\n            else if(input.name == 'tel'){\r\n                const letters = /[^0-9\\+]+$/;\r\n                if(input.value.match(letters)){\r\n                    success = false;\r\n                    return success;\r\n                }\r\n            }\r\n        });\r\n\r\n        return success;\r\n    };\r\n\r\n    const sendForm = data => {\r\n        return fetch(\"https://jsonplaceholder.typicode.com/posts\", {\r\n            method: \"POST\",\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                \"Content-Type\": \"aplication/json\"\r\n            }\r\n        }).then(res => res.json());\r\n    };\r\n\r\n    const submitForm = () =>{\r\n        const formElems = form.querySelectorAll(\"input\");\r\n        const formData = new FormData(form);\r\n        const formBody = {};\r\n\r\n        if(validate(formElems)){\r\n            statusBlock.textContent = loadText;\r\n            form.after(statusBlock);\r\n        }\r\n        \r\n        formData.forEach((val, key) => {\r\n            formBody[key] = val;\r\n        });\r\n\r\n        if(validate(formElems)){\r\n            sendForm(formBody).then(data => {\r\n                statusBlock.textContent = successText;\r\n                \r\n                formElems.forEach(input => {\r\n                    input.value = \"\";\r\n                    submit.value = \"Отправить\";\r\n                });\r\n                setTimeout(() => {\r\n                   statusBlock.textContent = \"\";\r\n                   backWind.style.display = \"none\";\r\n                   modWind.style.display = \"none\";      \r\n                }, 2000);\r\n            }).catch(error => {\r\n                statusBlock.textContent = errorText;\r\n            });\r\n        }\r\n        else{\r\n            alert(\"данные невалидны!\");\r\n        }\r\n    };\r\n   \r\n    try{\r\n         if(!form){\r\n            throw new Error(\"Верните форму на место!\");\r\n        }\r\n\r\n        form.addEventListener(\"submit\", e => {\r\n            e.preventDefault();\r\n            submitForm();\r\n        });\r\n    }\r\n    catch(error){\r\n        console.log(error.message);\r\n    }\r\n    \r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\r\n\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/services.js":
/*!*****************************!*\
  !*** ./modules/services.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst services = () =>{\r\n    const selection = document.querySelector(\".quest-section\");\r\n    const modWind = document.querySelector(\"div[class='modal-callback']\");\r\n    const backWind = document.querySelector(\".modal-overlay\");\r\n\r\n       const handleMenu = e =>{\r\n        e.preventDefault();\r\n        backWind.style.display = \"block\";\r\n        modWind.style.display = \"block\";\r\n\r\n    }; \r\n\r\n    selection.addEventListener(\"click\", e => {\r\n        if(e.target.closest(\".button-services\")){\r\n            handleMenu(e);            \r\n        }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (services);\n\n//# sourceURL=webpack:///./modules/services.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n    //const sliderBlock = document.querySelector(\".top-slider\");\r\n    const slides = document.querySelectorAll(\".item\");\r\n\r\n//    console.log(sliderBlock);\r\n  //  console.log(slides.length);\r\n\r\n    let currentSlide = 0;\r\n    let interval;\r\n    //let timeInterval = 2000;\r\n\r\n    const prevSlide = (elements, index, strClass) => {\r\n        elements[index].classList.remove(strClass);\r\n        elements[index].classList.add(\"table\");\r\n        elements[index].style.display = \"none\";\r\n    };\r\n\r\n    const nextSlide = (elements, index, strClass) => {\r\n        elements[index].classList.add(strClass);\r\n        elements[index].classList.remove(\"table\");\r\n        elements[index].style.display = \"block\";\r\n    };\r\n\r\n    const autoSlide = () => {\r\n        prevSlide(slides, currentSlide, \"table.active\");\r\n        //prevSlide(dots, currentSlide, \"dot-active\");\r\n        currentSlide++;\r\n\r\n        if(currentSlide >= slides.length){\r\n            currentSlide = 0;\r\n        }\r\n        nextSlide(slides, currentSlide, \"table.active\");\r\n        //nextSlide(dots, currentSlide, \"dot-active\");\r\n    };\r\n\r\n    const startSlide = (timer = 3000) => {\r\n        // if(dots.length == 0){\r\n        //     addDots();\r\n        // }\r\n        interval = setInterval(autoSlide, timer);\r\n    };\r\n\r\n    const stopSlide = () => {\r\n        clearInterval(interval);\r\n    };\r\n\r\n    startSlide(3000);\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\r\n    const form = document.querySelector(\"form\");\r\n\r\n    const formElems = form.querySelectorAll(\"input\");\r\n\r\n    // calcInputArr.forEach(input => {\r\n    //     input.addEventListener(\"input\", e => {\r\n    //         e.target.value = e.target.value.replace(/\\D+/, \"\");\r\n    //     });\r\n    // });\r\n\r\n    formElems.forEach(input => {\r\n            if(input.name == \"fio\"){                \r\n                const letters =/[^А-Яа-яёЁ]+$/;\r\n                input.addEventListener(\"input\", e => {\r\n                    e.target.value = e.target.value.replace(letters, \"\");\r\n                });\r\n            }\r\n            else if(input.name == 'tel'){\r\n                const letters = /[^0-9\\+]+$/;\r\n                input.addEventListener(\"input\", e => {\r\n                    e.target.value = e.target.value.replace(letters, \"\");\r\n                });\r\n            }\r\n        });\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack:///./modules/validation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;