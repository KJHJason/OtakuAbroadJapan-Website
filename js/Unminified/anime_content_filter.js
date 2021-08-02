// locating each of anime genres divs for filtering using DOM and getElementsByClassName
const scifi_content = document.getElementsByClassName("SF");
const romance_content = document.getElementsByClassName("R");
const action_content = document.getElementsByClassName("A");
const fantasymagic_content = document.getElementsByClassName("FM");
const sliceoflife_content = document.getElementsByClassName("SoL");

// executes the function filterContent when user changes the select input
function filterContent(){
	// retrieves the value of the option in the select html
	let user = document.getElementById("contentFiltering").value;
	// declare variable i for the for loop since getElementsByClassName will return an object HTML collection which is an array-like list of HTML elements
	var i;
	// switch case statment to match the select html option values
	switch (user){
		case "all":
			// display all genres
			for (i=0; i < scifi_content.length; i++) {
				scifi_content[i].style.display="block";
			}
			for (i=0; i < romance_content.length; i++) {
				romance_content[i].style.display="block";
			}
			for (i=0; i < action_content.length; i++) {
				action_content[i].style.display="block";
			}
			for (i=0; i < fantasymagic_content.length; i++) {
				fantasymagic_content[i].style.display="block";
			}
			for (i=0; i < sliceoflife_content.length; i++) {
				sliceoflife_content[i].style.display="block";
			}
			break;
		case "SF":
			// display only the sci-fi genre
			for (i=0; i < scifi_content.length; i++) {
				scifi_content[i].style.display="block";
			}
			for (i=0; i < romance_content.length; i++) {
				romance_content[i].style.display="none";
			}
			for (i=0; i < action_content.length; i++) {
				action_content[i].style.display="none";
			}
			for (i=0; i < fantasymagic_content.length; i++) {
				fantasymagic_content[i].style.display="none";
			}
			for (i=0; i < sliceoflife_content.length; i++) {
				sliceoflife_content[i].style.display="none";
			}
			break;
		case "R":
			// display only the romance genre
			for (i=0; i < scifi_content.length; i++) {
				scifi_content[i].style.display="none";
			}
			for (i=0; i < romance_content.length; i++) {
				romance_content[i].style.display="block";
			}
			for (i=0; i < action_content.length; i++) {
				action_content[i].style.display="none";
			}
			for (i=0; i < fantasymagic_content.length; i++) {
				fantasymagic_content[i].style.display="none";
			}
			for (i=0; i < sliceoflife_content.length; i++) {
				sliceoflife_content[i].style.display="none";
			}
			break;
		case "A":
			// display only the action genre
			for (i=0; i < scifi_content.length; i++) {
				scifi_content[i].style.display="none";
			}
			for (i=0; i < romance_content.length; i++) {
				romance_content[i].style.display="none";
			}
			for (i=0; i < action_content.length; i++) {
				action_content[i].style.display="block";
			}
			for (i=0; i < fantasymagic_content.length; i++) {
				fantasymagic_content[i].style.display="none";
			}
			for (i=0; i < sliceoflife_content.length; i++) {
				sliceoflife_content[i].style.display="none";
			}
			break;
		case "FM":
			// display only the Fantasy/Magic genre
			for (i=0; i < scifi_content.length; i++) {
				scifi_content[i].style.display="none";
			}
			for (i=0; i < romance_content.length; i++) {
				romance_content[i].style.display="none";
			}
			for (i=0; i < action_content.length; i++) {
				action_content[i].style.display="none";
			}
			for (i=0; i < fantasymagic_content.length; i++) {
				fantasymagic_content[i].style.display="block";
			}
			for (i=0; i < sliceoflife_content.length; i++) {
				sliceoflife_content[i].style.display="none";
			}
			break;
		case "SoL":
			// display only the slice of life genre
			for (i=0; i < scifi_content.length; i++) {
				scifi_content[i].style.display="none";
			}
			for (i=0; i < romance_content.length; i++) {
				romance_content[i].style.display="none";
			}
			for (i=0; i < action_content.length; i++) {
				action_content[i].style.display="none";
			}
			for (i=0; i < fantasymagic_content.length; i++) {
				fantasymagic_content[i].style.display="none";
			}
			for (i=0; i < sliceoflife_content.length; i++) {
				sliceoflife_content[i].style.display="block";
			}
			break;
	}
}
