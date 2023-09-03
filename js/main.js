$(document).ready(function () {
  $(".loadingPage").fadeOut(1000, function () {
    $(".loadingPage").remove();
    $("body").css("overflow", "auto");
    getMiscellaneousMealsData();
  });
});
function animateNavbar() {
  let navLeftWidth = $(".left").width();

  $("nav").css("left", `${-navLeftWidth}px`);
  $(".fa-bars").css("display", "block");
  $(".fa-xmark").css("display", "none");
  $("nav .left ul");
  $(".right .icons1").click(function () {
    if ($("nav").css("left") == `${-navLeftWidth}px`) {
      $(".fa-bars").hide(1000);
      $("nav").animate({ left: 0 }, 1000);
      $(".fa-xmark").show(1000);
      $("nav .left ul li").animate({ top: 0, opacity: 1 }, 1500);
    } else {
      $(".fa-bars").show(1000);
      $("nav").animate({ left: `${-navLeftWidth}px` }, 2000);
      $(".fa-xmark").hide(1000);
      $("nav .left ul li").animate({ top: `100px`, opacity: 0 }, 1500);
    }
  });
}
animateNavbar();
document.body.addEventListener("click", function () {
  $(".input1 div").animate({ top: "50%" }, 200);
});

let rowData = document.getElementById("rowData");
let category = document.getElementById("category");
let area = document.getElementById("area");
let ingredients = document.getElementById("ingredients");
let search = document.getElementById("search");
let mainDiv = document.querySelector(".mainDiv");
let searchName = document.getElementById("searchName");
let searchLetter = document.getElementById("searchLetter");
let searchBtn = document.getElementById("searchBtn");
let contact = document.getElementById("contact");

async function getCategoryData() {
  let myDataRequest = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  let myDataRequestReady = await myDataRequest.json();
  let realData = myDataRequestReady.categories;
  displayCategoryData(realData);
}
function displayCategoryData(arr1) {
  var cartona = "";
  for (var i = 0; i < arr1.length; i++) {
    var x = arr1[i].strCategoryDescription.split(" ").slice(0, 20).join(" ");
    cartona += `
        <div class="col-md-3 col-sm-6 overflow-hidden" id="${arr1[i].strCategory}">
                <div class="food position-relative overflow-hidden">
                    <div class="overlay">
                        <h3 class="text-center pt-2 text-capitalize">${arr1[i].strCategory}</h3>
                        <p class="d-block text-center px-1">${x}</p>
                    </div>
                    <img class="w-100 rounded-3" src="${arr1[i].strCategoryThumb}" alt="">
                    </div>
            </div>
            `;
  }
  rowData.innerHTML = cartona;
  let meal = document.querySelectorAll(".col-md-3");
  for (var i = 0; i < meal.length; i++) {
    meal[i].addEventListener("click", function () {
      var mealName = this.getAttribute("id");
      getMealData(mealName);
    });
  }
}

async function getMealData(meal) {
  let myMealDataRequest = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`
  );
  let myMealDataRequestReady = await myMealDataRequest.json();
  let realMealData = myMealDataRequestReady.meals;
  displayMealData(realMealData);
}
function displayMealData(arr2) {
  var cartona = "";
  for (var i = 0; i < arr2.length; i++) {
    cartona += `
            <div class="col-md-3  col-sm-6" id=${arr2[i].idMeal}>
                <div class="food position-relative overflow-hidden">
                    <div class="overlay d-flex justify-content-center align-items-center">
                        <h3 class="ps-2">${arr2[i].strMeal}</h3>
                    </div>
                    <img class="rounded-3 mealMenu w-100" src=${arr2[i].strMealThumb} alt="">
                </div>
            </div>
        `;
  }
  document.getElementById("rowData").innerHTML = cartona;
  getMealId();
}
async function getRecipeData(ID) {
  let mealRecipeRequest = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ID}`
  );
  let mealRecipeRequestReady = await mealRecipeRequest.json();
  let realRecipeData = mealRecipeRequestReady.meals[0];
  console.log(realRecipeData);
  displayRecipeData(realRecipeData);
}

function displayRecipeData(arr3) {
  var cartona = `
      <div class="col-md-4">
      <div class="photo">
          <img class="recipeImg rounded-3" src="${arr3.strMealThumb}" alt="">
          <h2 class="text-white">${arr3.strMeal}</h2>
      </div>
  </div>
  <div class="col-md-8">
      <div class="text">
          <h2 class="text-white">instructions</h2>
          <p class="text-white">${arr3.strInstructions}</p>
          <p class="area">Area: <span>${arr3.strArea}</span></p>
          <p class="area">Category: <span>${arr3.strCategory}</span></p>
          <h4 class="area text-white mb-4">Recipes:</h4>
          <div class="recipesData">
              <span>${arr3.strMeasure1} ${arr3.strIngredient1}</span>
              <span>${arr3.strMeasure2} ${arr3.strIngredient2}</span>
              <span>${arr3.strMeasure3} ${arr3.strIngredient3}</span>
              <span>${arr3.strMeasure4} ${arr3.strIngredient4}</span>
              <span>${arr3.strMeasure5} ${arr3.strIngredient5}</span>
              <span>${arr3.strMeasure6} ${arr3.strIngredient6}</span>
              <span>${arr3.strMeasure7} ${arr3.strIngredient7}</span>
              <span>${arr3.strMeasure8} ${arr3.strIngredient8}</span>
              <span>${arr3.strMeasure9} ${arr3.strIngredient9}</span>
              <span>${arr3.strMeasure10} ${arr3.strIngredient10}</span>
              <span>${arr3.strMeasure11} ${arr3.strIngredient11}</span>
              <span>${arr3.strMeasure12} ${arr3.strIngredient12}</span>
              <span>${arr3.strMeasure13} ${arr3.strIngredient13}</span>
              <span>${arr3.strMeasure14} ${arr3.strIngredient14}</span>
              <span>${arr3.strMeasure15} ${arr3.strIngredient15}</span>
              <span>${arr3.strMeasure16} ${arr3.strIngredient16}</span>
              <span>${arr3.strMeasure17} ${arr3.strIngredient17}</span>
              <span>${arr3.strMeasure18} ${arr3.strIngredient18}</span>
              <span>${arr3.strMeasure19} ${arr3.strIngredient19}</span>
              <span>${arr3.strMeasure20} ${arr3.strIngredient20}</span>
          </div>
          <h4 class="area my-4">Tags:</h4>
          <div class="tags">
              <span>${arr3.strTags}</span>
              <span>${arr3.strTags}</span>
          </div>
          <div class="my-3">
              <a href="${arr3.strSource}"><button class="btn  btn-success">Source</button></a>
              <a href="${arr3.strYoutube}"><button class="btn  btn-danger">Youtube</button></a>
          </div>
      </div>
  </div>
  </div>
      `;
  detectEmptySpan();
  detectEmptyTags();
  document.getElementById("rowData").innerHTML = cartona;
}
function detectEmptySpan() {
  let spans = document.querySelectorAll(".recipesData span");
  for (var i = 0; i < spans.length; i++) {
    if (spans[i].innerHTML == null) {
      // spans[i].style.display = "none" ;
      spans[i].classList.add("empty");
    }
  }
}
function detectEmptyTags() {
  let tags = document.querySelectorAll(".tags span");
  for (var i = 0; i < tags.length; i++) {
    if (tags[0].innerHTML == null && tags[1].innerHTML == null) {
      // tags[i].style.display = "none";
      tags[i].classList.add("empty");
    }
  }
}
function getMealId() {
  let idMeals = document.querySelectorAll(".col-md-3");
  for (var i = 0; i < idMeals.length; i++) {
    idMeals[i].addEventListener("click", function () {
      var mealId = this.getAttribute("id");
      getRecipeData(mealId);
    });
  }
}

//---------------------------------------------------------------------------------------------------------------

async function getAreaData() {
  let AreaRequest = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );
  let AreaRequestReady = await AreaRequest.json();
  let realAreaeData = AreaRequestReady.meals;
  console.log(realAreaeData);
  displayAreaData(realAreaeData);
}
function displayAreaData(realArr) {
  var cartona = "";
  for (var i = 0; i < realArr.length; i++) {
    cartona += `
        <div id="${realArr[i].strArea}" class="col-md-3 col-sm-6 text-white">
            <div class="icon d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-house"></i>
            </div>
            <h3 class="text-center p-3">${realArr[i].strArea}</h3>
        </div>
        `;
  }
  document.getElementById("rowData").innerHTML = cartona;
  getAreaName();
}
function getAreaName() {
  let areaName = document.querySelectorAll(".col-md-3");
  for (var i = 0; i < areaName.length; i++) {
    areaName[i].addEventListener("click", function () {
      var areaName = this.getAttribute("id");
      getAreaMeals(areaName);
    });
  }
}

async function getAreaMeals(name) {
  let AreaMealsRequest = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`
  );
  let AreaMealsRequestReady = await AreaMealsRequest.json();
  let realAreaeMealsData = AreaMealsRequestReady.meals;
  console.log(realAreaeMealsData);
  displayAreaMealData(realAreaeMealsData);
}
function displayAreaMealData(arr4) {
  var cartona = "";
  for (var i = 0; i < arr4.length; i++) {
    cartona += `
            <div class="col-md-3 col-sm-6" id=${arr4[i].idMeal}>
                <div class="food position-relative overflow-hidden">
                    <div class="overlay d-flex justify-content-center align-items-center">
                        <h3 class="ps-2">${arr4[i].strMeal}</h3>
                    </div>
                    <img class="rounded-3 mealMenu w-100" src=${arr4[i].strMealThumb} alt="">
                </div>
            </div>
        `;
  }
  document.getElementById("rowData").innerHTML = cartona;
  getMealId();
}
//---------------------------------------------------------------------------------------------------------------
async function getIngredients() {
  let ingredientsRequest = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );
  let ingredientsRequestReady = await ingredientsRequest.json();
  let ingredientsRequestsData = ingredientsRequestReady.meals.slice(0, 20);
  console.log(ingredientsRequestsData);
  displayIngredientsData(ingredientsRequestsData);
}
function displayIngredientsData(arr5) {
  var cartona = "";
  for (var i = 0; i < arr5.length; i++) {
    var x = arr5[i].strDescription.split(" ").slice(0, 20).join(" ");
    cartona += `
            <div id="${arr5[i].strIngredient}" class="col-md-3 col-sm-6 text-white">
                <div class="icon d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-drumstick-bite"></i>
                </div>
                <h3 class="text-center">${arr5[i].strIngredient}</h3>
                <p class="text-center">${x}</p>
            </div>
         `;
  }
  rowData.innerHTML = cartona;
  getIngredientsName();
}
function getIngredientsName() {
  let strIngredients = document.querySelectorAll(".col-md-3");
  for (var i = 0; i < strIngredients.length; i++) {
    strIngredients[i].addEventListener("click", function () {
      var strIngredient = this.getAttribute("id");
      getIngredientsMeal(strIngredient);
    });
  }
}

async function getIngredientsMeal(name) {
  let ingredientsMealRequest = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`
  );
  let ingredientsMealRequestReady = await ingredientsMealRequest.json();
  let ingredientsMealRequestsData = ingredientsMealRequestReady.meals;
  console.log(ingredientsMealRequestsData);
  displayIngredientsMealData(ingredientsMealRequestsData);
}
function displayIngredientsMealData(arr6) {
  var cartona = "";
  for (var i = 0; i < arr6.length; i++) {
    cartona += `
            <div class="col-md-3 col-sm-6" id=${arr6[i].idMeal}>
                <div class="food position-relative overflow-hidden">
                    <div class="overlay d-flex justify-content-center align-items-center">
                        <h3 class="ps-2">${arr6[i].strMeal}</h3>
                    </div>
                    <img class="rounded-3 mealMenu w-100" src=${arr6[i].strMealThumb} alt="">
                </div>
            </div>
        `;
  }
  rowData.innerHTML = cartona;
  getMealId();
}
//---------------------------------------------------------------------------------------------------------------

async function getMiscellaneousMealsData() {
  let MiscellaneousMealsRequest = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  );
  let MiscellaneousMealsRequestReady = await MiscellaneousMealsRequest.json();
  let MiscellaneousMealsRequestData = MiscellaneousMealsRequestReady.meals;
  console.log(MiscellaneousMealsRequestData);
  displayMiscellaneousMeals(MiscellaneousMealsRequestData);
}
function displayMiscellaneousMeals(arr7) {
  var cartona = "";
  for (var i = 0; i < arr7.length; i++) {
    cartona += `
            <div class="col-md-3 col-sm-6 overflow-hidden" id="${arr7[i].idMeal}">
                    <div class="food position-relative overflow-hidden">
                        <div class="overlay d-flex justify-content-start align-items-center">
                            <h3 class="text-center ps-2 pt-2 text-capitalize">${arr7[i].strMeal}</h3>
                        </div>
                        <img class="w-100 rounded-3" src="${arr7[i].strMealThumb}" alt="">
                        </div>
                        </div>
                `;
  }
  rowData.innerHTML = cartona;
  getMealId();
}

// Search
// let rowData1 = document.getElementById("rowData1");

// Contact Us
let rowData2 = document.getElementById("rowData2");

contact.addEventListener("click", function () {
  rowData2.classList.remove("d-none");
  rowData.classList.add("d-none");
  console.log("clicked");
});
ingredients.addEventListener("click", function () {
  // rowData.classList.add("d-none");
  // rowData1.classList.add("d-none");
  rowData2.classList.add("d-none");
  rowData.classList.remove("d-none");
  getIngredients();
});
area.addEventListener("click", function () {
  getAreaData();
});
category.addEventListener("click", function () {
  getCategoryData();
});

//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
// search.addEventListener("click", function () {

//   rowData1.classList.add("d-none");
//   rowData1.classList.remove("d-none");
// });

async function searchByName() {
  let name = "";
  let searchNameRequestData = [];

  if (document.getElementById("searchNameInput")?.value != null) {
    name = document.getElementById("searchNameInput").value;
    let searchName = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${name}`
    );
    let searchNameDataRequestReady = await searchName.json();
    searchNameRequestData = searchNameDataRequestReady.meals;
    console.log(searchNameRequestData);
  }
  displayBySearchName(searchNameRequestData);
}
function displaySearchHtml() {
  var cartona2 = `
    <div class="d-flex mainDiv">
      <div class="input1 w-50">
          <input type="text" id="searchName" placeholder="Search by Name">
          <button id="searchBtn" class="btn btn1 btn-outline-warning">Search</button>
      </div>
      <div class="input1 w-50">
          <input type="search"  onkeyup="searchByName()" id="searchNameInput" placeholder="Search by letter">

       </div>
   </div>
   `;
  searchHtml = document.getElementById("searchHtml");
  searchHtml.innerHTML = cartona2;
}


function displayBySearchName(arr8) {
  var cartona1 = "";
  // var cartona2 = `
  //   <div class="d-flex mainDiv">
  //     <div class="input1 w-50">
  //         <input type="search" id="searchName" placeholder="Search by Name">
  //         <button id="searchBtn" class="btn btn1 btn-outline-warning">Search</button>
  //     </div>
  //     <div class="input1 w-50">
  //         <input type="search" onkeyup="searchByName()" id="searchNameInput" placeholder="Search by letter">

  //      </div>
  //  </div>
  //  `;

  for (var i = 0; i < arr8.length; i++) {
    cartona1 += `

     <div class="col-md-3 overflow-hidden" id="${arr8[i].idMeal}">
             <div class="food position-relative overflow-hidden">
                 <div class="overlay d-flex justify-content-start align-items-center">
                     <h3 class="text-center ps-2 pt-2 text-capitalize">${arr8[i].strMeal}</h3>
                 </div>
                 <img class="w-100 rounded-3" src="${arr8[i].strMealThumb}" alt="">
                 </div>
             </div>
         `;
  }
  rowData.innerHTML = cartona1;
  getMealId();
}
search.addEventListener("click", function () {
  // searchByName();
  displaySearchHtml();
});
// function checkingSearchValue(arr8) {
//   let searchvalue = searchLetter.value;
//   for (var i = 0; i < arr8.length; i++) {
//     if (arr8[i].strMeal.includes(searchvalue) == true) {
//       searchByName(searchvalue);
//     }
//   }
// }
// searchLetter.addEventListener("input", checkingSearchValue);

// // searchLetter.addEventListener("input", searchByName(searchLetterValue))

// function createSearchInputs() {
//   let cartona = `
//     <div class="d-flex mainDiv">
//         <div class="input1 w-50">
//             <input type="search" id="searchName" placeholder="Search by Name">
//             <button id="searchBtn" class="btn btn-outline-warning">Search</button>
//         </div>
//         <div class="input1 w-50">
//             <input type="search" id="searchLetter" placeholder="Search by letter">

//         </div>
//     </div>
//     `;
//   rowData.innerHTML = cartona;

//   let mainDiv = document.querySelector(".mainDiv");
//   let searchName = document.getElementById("searchName");
//   let searchLetter = document.getElementById("searchLetter");
//   let searchBtn = document.getElementById("searchBtn");
//   searchBtn.addEventListener("click", function () {
//     // console.log(searchName.value);
//     searchByName(searchName.value);
//   });
// }
// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
let inputNameContact = document.getElementById("inputNameContact");
let inputNumberContact = document.getElementById("inputNumberContact");
let inputPassword1 = document.getElementById("inputPassword1");

let invalidName = document.getElementById("invalidName");
let invalidNumber = document.getElementById("invalidNumber");
let invalidPassword = document.getElementById("invalidPassword");

let inputEmail = document.getElementById("inputEmail");
let inputAge = document.getElementById("inputAge");

let invalidEmail = document.getElementById("invalidEmail");
let invalidAge = document.getElementById("invalidAge");

function validateName() {
  var regex = /^[A-Z][a-z]{3,14}/;
  if (regex.test(inputNameContact.value) == true) {
    inputNameContact.classList.add("bg-success");
    inputNameContact.classList.remove("bg-danger");
    invalidName.classList.replace("d-block", "d-none");
    return true;
  } else if (inputNameContact.value == "") {
    inputNameContact.classList.remove("bg-success");
    inputNameContact.classList.remove("bg-danger");
    invalidName.classList.replace("d-block", "d-none");
  } else {
    inputNameContact.classList.add("bg-danger");
    inputNameContact.classList.remove("bg-success");
    invalidName.classList.replace("d-none", "d-block");
    return false;
  }
}
inputNameContact.addEventListener("keyup", function () {
  console.log(inputNameContact.value);
  validateName();
});

function validateEmail() {
  var regexp = /@[a-z{5,10}(\.com)$]/;
  if (regexp.test(inputEmail.value) == true) {
    inputEmail.classList.add("bg-success");
    inputEmail.classList.remove("bg-danger");
    invalidEmail.classList.replace("d-block", "d-none");
    return true;
  } else if (inputEmail.value == "") {
    inputEmail.classList.remove("bg-success");
    inputEmail.classList.remove("bg-danger");
    invalidEmail.classList.replace("d-block", "d-none");
  } else {
    inputEmail.classList.add("bg-danger");
    inputEmail.classList.remove("bg-success");
    invalidEmail.classList.replace("d-none", "d-block");
    return false;
  }
}
inputEmail.addEventListener("keyup", function () {
  validateEmail();
});

function validatePassword() {
  var regexp = /.{8,15}$/;
  if (regexp.test(inputPassword1.value) == true) {
    inputPassword1.classList.add("bg-success");
    inputPassword1.classList.remove("bg-danger");
    invalidPassword.classList.replace("d-block", "d-none");
    return true;
  } else if (inputPassword1.value == "") {
    inputPassword1.classList.remove("bg-success");
    inputPassword1.classList.remove("bg-danger");
    invalidPassword.classList.replace("d-block", "d-none");
  } else {
    inputPassword1.classList.add("is-invalid");
    inputPassword1.classList.remove("is-valid");
    invalidPassword.classList.replace("d-none", "d-block");
    return false;
  }
}
inputPassword1.addEventListener("keyup", function () {
  validatePassword();
});

function validateAge() {
  if (inputAge.value > 18 && inputAge.value < 45) {
    inputAge.classList.add("bg-success");
    inputAge.classList.remove("bg-danger");
    invalidAge.classList.replace("d-block", "d-none");
    return true;
  } else if (inputAge.value == "") {
    inputAge.classList.remove("bg-success");
    inputAge.classList.remove("bg-danger");
    invalidAge.classList.replace("d-block", "d-none");
  } else {
    inputAge.classList.add("bg-danger");
    inputAge.classList.remove("bg-success");
    invalidAge.classList.replace("d-none", "d-block");
  }
}
inputAge.addEventListener("keyup", function () {
  validateAge();
});
function validateNumber() {
  let regexp = /^[0-9]+$/;
  if (regexp.test(inputNumberContact.value) == true) {
    inputNumberContact.classList.add("bg-success");
    inputNumberContact.classList.remove("bg-danger");
    invalidNumber.classList.replace("d-block", "d-none");
    return true;
  } else if (inputNumberContact.value == "") {
    inputNumberContact.classList.remove("bg-success");
    inputNumberContact.classList.remove("bg-danger");
    invalidNumber.classList.replace("d-block", "d-none");
  } else {
    inputNumberContact.classList.add("is-invalid");
    inputNumberContact.classList.remove("is-valid");
    invalidNumber.classList.replace("d-none", "d-block");
    return false;
  }
}
inputNumberContact.addEventListener("keyup", function () {
  validateNumber();
});
