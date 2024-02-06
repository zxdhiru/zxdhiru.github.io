const spBtn = document.getElementById("s-p-name");

spBtn.addEventListener("click", function (e) {  
  let inputValue = document.getElementById("spname").value;
  let newInputValue = inputValue.toUpperCase();
  console.log(newInputValue);
  localStorage.setItem('spName',newInputValue);
});