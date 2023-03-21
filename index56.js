// page 5

      // page 5


function fn2() {
  let selectedNumber = 0;
  const table = document.querySelector('table');
  const rows = document.querySelectorAll('.question');

  for (let i = 0; i < rows.length; i++) {
    const inputs = rows[i].querySelectorAll('input[type="radio"]');
    
    for (let j = 0; j < inputs.length; j++) {
      if (inputs[j].checked) {
        selectedNumber++;
        console.log(selectedNumber);
      }
    }
  }

  if (selectedNumber < (rows.length-2)) {
    alert("Please make sure all sections are filled in.");
    console.log(selectedNumber);
  } 

  if (selectedNumber === (rows.length-1)) {
    // All questions have been answered;
    window.location.href = "index5i.html";
  } else {
    console.log("fail")
  }
}



