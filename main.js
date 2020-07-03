let userArray = [];
let stockArray = ['peanuts', 'apples', 'water', 'eggs', 'milk'];

const allergenObject = {
	dairy: {
		milk: 	['Butter','Buttermilk','Casein','Casein hydrolysate',
				'Caseinates','Cheese','Cottage cheese','Cream','Curds',
				'Custard','Diacetyl','Ghee','Half-and-half',
				'half and half','Lactalbumin','Lactoferrin','Lactose',
				'Lactulose','Milk protein hydrolysate','Pudding',
				'Recaldent','Rennet casein','Sour cream','Tagatose',
				'Whey','hydrolysate','Yogurt'],
		egg: 	['Albumin ','albumen','egg white','egg yolk','Eggnog',
				'Lysozyme','Mayonnaise','Meringue','Ovalbumin','Surimi'],
	nut: {
		peanut: 	['Arachis oil','Artificial nuts','Beer nuts',
					'Goobers','Ground nuts','Lupin','lupin','Mandelonas',
					'Monkey nuts','Nut meat','Nut pieces',
					'Peanut butter','Peanut flour','Peanut oil'],
		tree_nut: 	['Almond','Beechnut','Black walnut','Brazil',
					'Cashew','Chestnut','Chinquapin','Filbert',
					'hazelnut','Gianduja','Ginkgo','Hickory','Litchi',
					'lichee','lychee','Macadamia','Nangai','Pecan',
					'Pesto','Pili','Pine','pignoli','pignon',
					'pinyon ','Pistachio','Praline','Shea','Walnut']
		}
	}

}

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




/////////STOCK LIST///////////////
//create new html element that is an h2 element
const preTitle = h2;
//fill that newly created h2 element with new text
preTitle.innerText = 'No Foods Yet';
//create child element of the preDB element
preDB.appendChild(preTitle);

//makes scriptUL a ul html element
let scriptUL = document.createElement('ul');
//give scriptUL the id of scriptFill
scriptUL.id = 'scriptFill';
//create a child html element in the preDB element with a UL element
//	defined by the scriptUL and has id of 'scriptFill'. 
//		this is added after the preTitle h2.
preDB.appendChild(scriptUL);

//waits for 1.5s for the stock li to fill
setTimeout(stockArrayFiller, 1500);

//function that creates an unordered list in the preDB html element
function stockArrayFiller(){
	//gives the a new title after a given time
	preTitle.innerText = 'Foods are Filled:'
	//loops though the stock array add all list elements
	for(let foodName of stockArray){
		//create a li element
		let li = document.createElement('li');
		//append the scriptUL element with the li
		scriptUL.appendChild(li);
		//changes the html with the foodName
		li.innerHTML +=foodName;
	}
	// pluralizeStock();
}





////////USER CREATED LIST//////////
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

//append the usrDB div with a ul that's filled by the user
usrDB.appendChild(usrFill);

//event listener that listens to the textbox (#TB) of the DOM
//	when the any key is pushed, it queries onSubmit
foodInput.addEventListener('keyup', onSubmit);

//if the key pressed was the Enter key, add food to array
function onSubmit(e){
	//keycode for 'Enter' key is 13
	if(e.keyCode === 13){
		e.preventDefault();
		//pushes the value we wrote in the TB to the userArray
		userArray.push(`${foodInput.value}`);
		console.log(userArray);
		//creates a list item that's inserted into the DOM with the
		//	value entered and in the UL location usrFill
		createListFromArray(usrFill, `${foodInput.value}`);
		foodInput.value = '';
	}
}


//function that creates an unordered list in the chosen html element
//	the ulToEdit is the desired element the function appendsChild to
//	inputFood is the food that's input from the user input
function createListFromArray(ulToEdit, inputFood){
	//creates an list element variable		
	let li = document.createElement('li');
	//appends the passed in html element with a list element
	ulToEdit.appendChild(li);
	//changes the li element just appended with the value passed in
	li.innerHTML +=inputFood;
	//boolean logs if the stockArray has the passed in inputFood 
	//	allows for the user entering in the plural
	const singularChecker = 
		stockArray.includes(`${inputFood}`) || 
		stockArray.includes(`${inputFood}s`);
	// console.log(stockArray.includes(`${inputFood}`));
	console.log(singularChecker);
	const objectChecker = () =>{
		// allergenObject.includes(`${inputFood}`);
		allergenObject.find(food => food.dairy.milk.includes(`${foodInput}`));
		console.log(`AllergenObject returned ${foodInput}`);
	}
	console.log(objectChecker());


}

// let plurlaStockArray = [];

// function pluralizeStock(){
// 	for(item in stockArray){
// 		if(item[-1] == 's'){
// 			plurlaStockArray[item] = stockArray[item] + 's';
// 		}else{
// 			plurlaStockArray[item] = stockArray[item];
// 		}
// 	}
// }


// console.log('Plural Stock' + plurlaStockArray);

//returns true or false if the two array's have a similar item
function findCommonElements(arr1, arr2){
	return arr1.some(item => arr2.includes(item));
}

