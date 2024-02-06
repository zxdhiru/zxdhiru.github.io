const fpBtn = document.getElementById("f-p-name");

fpBtn.addEventListener("click", function (e) {  
  let inputValue = document.getElementById("fpname").value;
  let newInputValue = inputValue.toUpperCase();
  console.log(newInputValue);
  localStorage.setItem('fpName',newInputValue);
});