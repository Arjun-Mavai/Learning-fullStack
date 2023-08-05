async function fetchUserDetails() {
  try {
    let data = await fetch("https://randomuser.me/api/");
    let result = await data.json();
    return result;
  } catch (error) {
    console.error("Error in fetching", error);
    return null;
  }
}

{
  /* <h2>${location.city}<h2/>
<h2>${timezone.description}<h2/>
<h3>${dob.age}<h3/> */
}

function renderUserData(userData) {
  const appElement = document.getElementById("demo");

  if (userData) {
    const { name, email, picture, phone, city, description, dob } =
      userData.results[0]; // here this results is related to the object returned by the API not related to fetchUserdetails function ; take only userdata from there : use analogy of bag returned bythis function inside this is the object array put by the api response

    const userHTML = ` 
            <div>
            <img className="border-wrapper" src ="${picture.large}" alt = "no image found"  style="border-width:5px; border-color:red;
            
            height: 12.5rem;
            width: 12.5rem;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            border: 1px solid black;
            border-color: purple green blue cyan;
            border-style: solid;
            border-width: 0.313rem;
            
            
            
            
            
            ">

            <p style = "font-size : 1.25rem;"> Name : ${name.first}  <p/>

           
            <i class="fa-solid fa-phone fa-shake "></i>
            <h2>Phone# : ${phone}<h2/>
            <h3 style = "font-size : 0.625rem;">Age: ${dob.age}<h3/>
            <i class="fa-solid fa-bell fa-shake fa-lg"></i>
           
            
            </div>
         `;
    appElement.innerHTML = userHTML;
  } else {
    appElement.innerHTML = "<p>Error fetching data : user data not found<p/>";
  }
}

async function fetchingData() {
  let userData = await fetchUserDetails();
  renderUserData(userData);
}

fetchingData();



function handleAddition() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = num1 + num2;
  document.getElementById("result").innerText = "Result: " + result;
}

function handleSubtraction() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = num1 - num2;
  document.getElementById("result").innerText = "Result: " + result;
}

function handleMultiplication() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = num1 * num2;
  document.getElementById("result").innerText = "Result: " + result;
}

function handleDivision() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = num1 / num2;
  document.getElementById("result").innerText = "Result: " + result;
}

function isEvenOrOdd() {
  const num1 = parseInt(document.getElementById("num1").value);
  const result = num1 % 2 === 0 ? "Even" : "Odd";
  document.getElementById("result").innerText = "Result: " + result;
}

function isPrimeOrComposite() {
  const num1 = parseInt(document.getElementById("num1").value);
  if (num1 <= 1) {
    document.getElementById("result").innerText = "Result: Composite";
  } else {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num1); i++) {
      if (num1 % i === 0) {
        isPrime = false;
        break;
      }
    }
    const result = isPrime ? "Prime" : "Composite";
    document.getElementById("result").innerText = "Result: " + result;
  }
}

 
