let emptyArray = [];
let stockArray = ['peanuts', 'apples', 'water', 'eggs', 'milk'];
console.log(stockArray);

//assigning foodInput to the text box element to enter foods in
const foodInput = document.querySelector('#TB');
//assinging foodAdd to submit the food we typed in to foodInput
const addFood = document.querySelector('#txtButton');

const submitFood = document.querySelector('#btn')

//create js element that corresponds to id='preDB' html element
let preDB = document.querySelector('#preDB');
//create js element that corresponds to id='usrDB' html element
let usrDB = document.querySelector('#usrDB');
//create js elemenmt that is an h2 html element
const h2 = document.createElement('h2');
//create js element that creates a ul html element
let ul = document.createElement('ul');
//create js element that creates a li html elment
let li = document.createElement('li');


//makes scriptUL a ul html element
let scriptUL = document.createElement('ul');
//give scriptUL the id of scriptFill
scriptUL.id = 'scriptFill';

//makes usrFill a ul html element
let usrFill = document.createElement('ul');
//set id of usrFill to usrFill
usrFill.id = 'usrFill';

//create new html elemnt that is h2 element title of usrFill 
const usrTitle = document.createElement('h2');
//sets title of the usrFill title section
usrTitle.innerText = 'User Filled Foods:';
//create child elment of usrDB element to be title h2 element
usrDB.appendChild(usrTitle);

//create new html element that is an h2 element
const preTitle = h2;
//fill that newly created h2 element with new text
preTitle.innerText = 'No Foods Yet';
//create child element of the preDB element
preDB.appendChild(preTitle);

//create a child html element in the preDB element with a UL element
//	defined by the scriptUL and has id of 'scriptFill'. 
//		this is added after the preTitle h2.
preDB.appendChild(scriptUL);

//function that creates an unordered list in the preDB html element
function stockArrayFiller(){
	preTitle.innerText = 'Foods are Filled:'
	for(let i of stockArray){
		let li = document.createElement('li');
		scriptUL.appendChild(li);
		li.innerHTML +=i;
		// console.log(i);
	}
}



setTimeout(stockArrayFiller, 1500);


foodInput.addEventListener('keyup', onSubmit);

function onSubmit(e){
	if(e.keyCode === 13){
		e.preventDefault();
		emptyArray.push(`${foodInput.value}`);
		console.log(emptyArray);
		createListFromArray(usrFill, `${foodInput.value}`);
		foodInput.value = '';
	}

}


usrDB.appendChild(usrFill);

//function that creates an unordered list in the preDB html element
function createListFromArray(ulToEdit, inputFood){
	// preTitle.innerText = 'Foods are Filled:'
	// for(let i of stockArray){
		let li = document.createElement('li');
		ulToEdit.appendChild(li);
		li.innerHTML +=inputFood;
		// console.log(findCommonElements(emptyArray, stockArray));
		console.log(stockArray.includes(`${inputFood}`));
		// console.log(i);
	// }
}



//returns true or false if the two array's have a similar item
function findCommonElements(arr1, arr2){
	return arr1.some(item => arr2.includes(item));
}

