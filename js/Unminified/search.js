// for displaying the user's search query from the url onto the html document on search.html

// retrieves the query string data
let searchData = location.search;

// to remove the ? from the query string
searchData =  searchData.substring(1, searchData.length);

// now to make it readable from "hi+world" to "hi world"
/*
* how it works:
* basically the line below (line 16), the searchData.indexOf() will return the position of the first occurrence of the "+" in the searchData string
* afterwards, it will replace the "+" with " ", aka a whitespace character
* it will keep looping until the indexOf() returns -1 which means that the "+" has all been replaced by " "
*/
while (searchData.indexOf("+") != -1) searchData =  searchData.replace("+", " ");

// to decode any special characters or other languages such as Japanese in the string if needed
searchData = decodeURI( searchData);

// split the string by = which would create an array
let searchArray = searchData.split("=");

// checks if the first element is "q" and if so, put in the 2nd element which would be the searched keywords into the span tags with the id, "searched"
// it will also update the search.html title to the search query. E.g. Searched for "Vivy"
if (searchArray[0] == "q"){
  document.getElementById("searched").innerText = searchArray[1];
  document.title = 'Search results for "' + searchArray[1] + '"';
}
