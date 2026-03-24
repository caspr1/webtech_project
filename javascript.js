// Print/screen visibility handlers
var noprint_display_styles = [];
var noprint_elements = document.getElementsByClassName("noprint");
var noscreen_elements = document.getElementsByClassName("noscreen");

addEventListener('beforeprint', (e) => {
  for (let ele of noprint_elements) {
    noprint_display_styles.push(ele.style.display);
    ele.style.display = "none";
  }
  for (let _ele of noscreen_elements) {
    _ele.style.display = "block";
  }
});

addEventListener('afterprint', (e) => {
  for (let i = 0; i < noprint_elements.length; i++) {
    noprint_elements[i].style.display = noprint_display_styles[i];
  }
  for (let j = 0; j < noscreen_elements.length; j++) {
    noscreen_elements[j].style.display = "none";
  }
  noprint_display_styles = [];
});

// Global page variables
var canonical_url   = "http://www.gutenberg.org/ebooks/84";
var lang            = "nl_NL";
var msg_load_more   = "Load More Results…";
var page_mode       = "screen";
var dialog_title    = "";
var dialog_message  = "";

// Carousel scroll - source: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Overflow/Carousels
function scrollCarousel(id, dir) {
  var el = document.getElementById(id);
  if (el) el.scrollBy({ left: dir * 250, behavior: 'smooth' });
}

// Search bar (collections page) - source: W3schools
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
    }
  }

  if (firstMatch && input) {
    firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}