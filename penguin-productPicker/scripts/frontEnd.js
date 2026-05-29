// Make a fetch call to backend
// Backend uses credentials to get the data from cloudpage and returns value to frontend

const allModules = document.querySelectorAll('.module')
const allButtons = document.querySelectorAll('input[type="button"]');
const menu = document.querySelector('#menu');

function init (){

	// Initialize Drop Down Function
	menu.addEventListener('change', (e) => {
		allModules.forEach(module => {
			module.classList.remove('active');
		})

		let selectValue = e.target.value;
		if (selectValue) document.querySelector(`[data-menu="${selectValue}"]`).classList.add('active');

		if (e.isTrusted) {
        	resetInputs();
    	}
	})

	// Initialize Buttons
	allButtons.forEach( button => {
		button.addEventListener('click', async (e) => {

			let currentRowContainer = e.target.closest('.row-container');
			let statusMessage = currentRowContainer.querySelector('.statusMessage');
			let linkInput = currentRowContainer.querySelector('.link-input');
			let titleInput = currentRowContainer.querySelector('.title-input');
			let copyInput = currentRowContainer.querySelector('.copy-input');
			let ctaInput = currentRowContainer.querySelector('.cta-input');
			let imagePlaceholder = currentRowContainer.querySelector('.image-group .imagePlaceholder');
			let image = currentRowContainer.querySelector('.image-group img');
			let ean = currentRowContainer.querySelector('.ean');

			// Reset
			statusMessage.innerHTML = "";
			linkInput.value = "";
			if(titleInput) titleInput.value = "";
			if(copyInput) copyInput.value = "";
			if(ctaInput) ctaInput.value = "";
			imagePlaceholder.classList.remove('hidden');
			image.src = "";
			ean.innerHTML = "";

			// Check ISBN
			let isbn = e.target.parentNode.querySelector('input[type="text"]')?.value;
			if(!isbn) {
				saveBlockData(); // When everything is deleted, then save empty fields 
				return;
			};
			console.log('ISBN found:', isbn);

			let productData = await getProductData(isbn.trim());
			console.log("productData",productData)

			statusMessage.innerHTML = productData.status;
			statusMessage.classList.toggle('err', productData.status != 'OK');

			if(!productData.productUrl || !productData.imageUrl || productData.status != 'OK') return; 

			linkInput.value = productData.productUrl;
			//if(titleInput) titleInput.value = productData.productTitle; // Product data doesn't have any text (yet)
			//if(copyInput) copyInput.value = productData.productCopy; // Product data doesn't have any text (yet)
			//if(ctaInput) ctaInput.value = productData.productCta; // Product data doesn't have any text (yet)
			imagePlaceholder.classList.add('hidden');
			image.src = productData.imageUrl;
			ean.innerHTML = "EAN: " + productData.ean;

			saveBlockData();
		})
	})

	// Save data after every input change // input, select
	document.querySelectorAll('input[type="text"]').forEach( element => {
		element.addEventListener('input', () => {
			saveBlockData();
		})
	})

}

function resetInputs(){
	let isbnInputs = document.querySelectorAll('.isbn-input');
	let linkInputs = document.querySelectorAll('.link-input');
	let titleInputs = document.querySelectorAll('.title-input');
	let copyInputs = document.querySelectorAll('.copy-input');
	let ctaInputs = document.querySelectorAll('.cta-input');
	let eanSpans = document.querySelectorAll('.ean');
	let imagePlaceholders = document.querySelectorAll('.imagePlaceholder');
	let images = document.querySelectorAll('.image-group img');

	isbnInputs.forEach( input => {input.value = "" })
	linkInputs.forEach( input => {input.value = "" })
	titleInputs.forEach( input => {input.value = "" })
	copyInputs.forEach( input => {input.value = "" })
	ctaInputs.forEach( input => {input.value = "" })
	eanSpans.forEach( span => {span.innerHTML = "" })
	imagePlaceholders.forEach( placeholder => {placeholder.classList.remove('hidden')})
	images.forEach( image => {image.src = "" })

	saveBlockData();
}

function getProductData(isbn) {

	let product = product0;

	if(isbn == 1){ product = product1 }
	if(isbn == 2){ product = product2 }
	if(isbn == 3){ product = product3 }
	if(isbn == 4){ product = product4 }
	if(isbn == 5){ product = product5 }

	return product;
}


init();

