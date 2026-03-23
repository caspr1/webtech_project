//search bar collectinos page source: W3schools//

function searchLists() {
  let input = document.getElementById('searchbar').value.toUpperCase();
  let items = document.querySelectorAll('li');
  let firstMatch = null; 

  for (let i = 0; i < items.length; i++) {
    let a = items[i].getElementsByTagName("a")[0];
    let txtValue = a.textContent || a.innerText;
     items[i].style.backgroundColor = "";
     
     if (txtValue.toUpperCase().indexOf(input) > -1) {
      items[i].style.display = "list-item"; 

      if (!firstMatch) firstMatch = items[i];      
      items[i].style.backgroundColor = "#fff30d50";              
      if (!firstMatch) firstMatch = items[i];
    }
  }

  if (firstMatch && input) {                                      
    firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }                                                              
}