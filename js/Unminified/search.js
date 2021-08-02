//retrieves the query string data
let searchData = location.search;

//to remove the ? from the query string
searchData =  searchData.substring(1, searchData.length);

//make it readable from hi+world to text=hi world
while ( searchData.indexOf("+") != -1) searchData =  searchData.replace("+", " ");

//to decode any special characters or other languages such as Japanese in the string if needed
searchData = decodeURI( searchData);

//split by & and create a new array
let searchArray = searchData.split("&");
let searchQuery = [];

//to split the array string from [q=hello world] to ["q", "hello world"]
searchQuery = searchArray[0].split("=");
console.log(searchQuery);
if (searchQuery[0] == "q"){
  document.getElementById("searched").innerHTML=searchQuery[1];
}
