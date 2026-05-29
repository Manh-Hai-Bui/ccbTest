let sdk = new window.sfdc.BlockSDK({
tabs: [/*{
    key : "bauhausProductPicker",
    name : "Bauhaus Product Picker",
    url : ""
}*/]
,blockEditorWidth: 425
});

let saveData;

if (window.self === window.top) { //temp remove to view in browser
//if (1 === 0) { //temp add to view in browser

	document.body.innerText = CONSTANTS.callRestriction;

} else {

    console.log('Call block...');
    //let sdk = new SDK(); //initalize SDK

    let blockData = {
        sku: document.getElementById('sku').value,
        label: document.getElementById('label').value,
        productName: document.getElementById('productName').value,
        selectedImage: document.querySelector('input[name="productImage"]:checked').value,
        selectedImageId: document.querySelector('input[name="productImage"]:checked').id,
        productMainImage: document.getElementById('productMainImage').value,
        additionalImage01: document.getElementById('additionalImage01').value,
        additionalImage02: document.getElementById('additionalImage02').value,
        additionalImage03: document.getElementById('additionalImage03').value,
        additionalImage04: document.getElementById('additionalImage04').value,
        description: document.getElementById('description').value,
        productLink: document.getElementById('productLink').value,
        usps: document.getElementById('usps').value,
        brand: document.getElementById('brand').value,
        brandLogo: document.getElementById('brandLogo').value,
        productRating: document.getElementById('productRating').value,
        ratingCount: document.getElementById('ratingCount').value,
        price: document.getElementById('price').value,
        centPrice: document.getElementById('centPrice').value,
        strikePrice: document.getElementById('strikePrice').value,
        strikeCentPrice: document.getElementById('strikeCentPrice').value,
        unit: document.getElementById('unit').value,
        energyLabelClass: document.getElementById('energyLabelClass').value,
        productNameLinesIndex : document.getElementById('productNameLines').value,
        descriptionLinesIndex : document.getElementById('descriptionLines').value,
        groundPrice : document.getElementById('priceSwitch').dataset.prices,
        priceBgColor : document.getElementById('priceBgColor').value,
        priceFontColor : document.getElementById('priceFontColor').value,
        productQuantitySelect : document.getElementById('productQuantitySelect').value,
        productQuantityJSON : document.getElementById('productQuantityJsonInput').value,
        productQuantityHeadline : document.getElementById('productQuantityHeadline').value,
    };

    sdk.setSuperContent(makeContent(true, true, blockData));

    saveData = () => {
        console.log('Saving data...');
        console.log(blockData)

        blockData.sku = document.getElementById('sku').value,
        blockData.label = document.getElementById('label').value,
        blockData.productName = document.getElementById('productName').value,
        blockData.productNameLines = document.getElementById('productNameLines').value,
        blockData.selectedImage = document.querySelector('input[name="productImage"]:checked').value,
        blockData.selectedImageId = document.querySelector('input[name="productImage"]:checked').id,
        blockData.productMainImage = document.getElementById('productMainImage').value,
        blockData.additionalImage01 = document.getElementById('additionalImage01').value,
        blockData.additionalImage02 = document.getElementById('additionalImage02').value,
        blockData.additionalImage03 = document.getElementById('additionalImage03').value,
        blockData.additionalImage04 = document.getElementById('additionalImage04').value,
        blockData.description = document.getElementById('description').value,
        blockData.descriptionLines = document.getElementById('descriptionLines').value,
        blockData.productLink = document.getElementById('productLink').value,
        blockData.usps = document.getElementById('usps').value,
        blockData.brand = document.getElementById('brand').value,
        blockData.brandLogo = document.getElementById('brandLogo').value,
        blockData.productRating = document.getElementById('productRating').value,
        blockData.ratingCount = document.getElementById('ratingCount').value,
        blockData.price = document.getElementById('price').value,
        blockData.centPrice = document.getElementById('centPrice').value,
        blockData.strikePrice = document.getElementById('strikePrice').value,
        blockData.strikeCentPrice = document.getElementById('strikeCentPrice').value,
        blockData.unit = document.getElementById('unit').value,
        blockData.energyLabelClass = document.getElementById('energyLabelClass').value,
        blockData.energyLabelImage = document.getElementById('energyLabelImage').value,
        blockData.groundPrice = document.getElementById('priceSwitch').dataset.prices,
        blockData.priceBgColor = document.getElementById('priceBgColor').value,
        blockData.priceFontColor = document.getElementById('priceFontColor').value,
        blockData.productQuantitySelect = document.getElementById('productQuantitySelect').value,
        blockData.productQuantityJSON = document.getElementById('productQuantityJsonInput').value,
        blockData.productQuantityHeadline = document.getElementById('productQuantityHeadline').value,

        sdk.setData(blockData, () => {

            let sanitizedUsps = blockData.usps.replace(/"/g, '""');
            let sanitizedProductName = blockData.productName.replace(/"/g, '""');
            let sanitizedDesc = blockData.description.replace(/"/g, '""');

            // Assemble "blocksToDisplay" with multiple modules
            let mainProductBlock = "%%=ContentBlockByID('12205')=%%";
            let productQuantityBlock = "%%=ContentBlockByID('38301')=%%";

            let blocksToDisplay = mainProductBlock;
            if( blockData.productQuantitySelect  == 'true' && blockData.productQuantityHeadline != ""){
                blocksToDisplay += productQuantityBlock;
            }

            let content = `
                %%[
                    SET @label = "${blockData.label}"
                    SET @brandName = "${blockData.brand}"
                    SET @productDescription = "${sanitizedDesc}"
                    SET @brandLogo = "${blockData.brandLogo}"
                    SET @usps = "${sanitizedUsps}"
                    SET @productName = "${sanitizedProductName}"
                    SET @productRating = "${blockData.productRating}"
                    SET @productRatingCount = "${blockData.ratingCount}"
                    SET @price = "${blockData.price}"
                    SET @centPrice = "${blockData.centPrice}"
                    SET @unit = "${blockData.unit}"
                    SET @productLink = "${blockData.productLink}"
                    SET @strikePrice = "${blockData.strikePrice}"
                    SET @strikeCentPrice = "${blockData.strikeCentPrice}"
                    SET @energyLabelClass = "${blockData.energyLabelClass}"
                    SET @productMainImage = "${blockData.selectedImage}"
                    SET @energyLabelImage = "${blockData.energyLabelImage}"
                    SET @productNameLines = "${blockData.productNameLines}"
                    SET @descriptionLines = "${blockData.descriptionLines}"
                    SET @priceBgColor = "${blockData.priceBgColor}"
                    SET @priceFontColor = "${blockData.priceFontColor}"
                    SET @productQuantitySelect = "${blockData.productQuantitySelect}"
                    SET @productQuantityJSON = '${blockData.productQuantityJSON}'
                    SET @productQuantityHeadline = "${blockData.productQuantityHeadline}"
                ]%%

                ${blocksToDisplay}
            `

            //check for ampscript
            if (content.search('%%') === -1) {
                superContent = content;
            }

            sdk.setSuperContent(makeContent(true, true, blockData));
            sdk.setContent(content);

        });
    }

    // Prefills the input boxes with previous (saved) data
    let fetchData = () => {
        console.log('Loading data...');

        sdk.getData((data) => {
            if (Object.keys(data).length > 0) {
                let blockData = data;

                document.getElementById('sku').value = blockData.sku;
                document.getElementById('label').value = blockData.label;
                document.getElementById('productName').value = blockData.productName;
                document.getElementById('productMainImage').value = blockData.productMainImage;
                document.getElementById('additionalImage01').value = blockData.additionalImage01;
                document.getElementById('additionalImage02').value = blockData.additionalImage02;
                document.getElementById('additionalImage03').value = blockData.additionalImage03;
                document.getElementById('additionalImage04').value = blockData.additionalImage04;
                document.getElementById('productMainImagePreview').src = blockData.productMainImage;
                document.getElementById('additionalImage01Preview').src = blockData.additionalImage01;
                document.getElementById('additionalImage02Preview').src = blockData.additionalImage02;
                document.getElementById('additionalImage03Preview').src = blockData.additionalImage03;
                document.getElementById('additionalImage04Preview').src = blockData.additionalImage04;
                document.getElementById(blockData.selectedImageId).checked = true;
                document.getElementById('description').value = blockData.description
                document.getElementById('productLink').value = blockData.productLink
                document.getElementById('usps').value = blockData.usps
                document.getElementById('brand').value = blockData.brand
                document.getElementById('brandLogo').value = blockData.brandLogo
                document.getElementById('productRating').value = blockData.productRating
                document.getElementById('ratingCount').value = blockData.ratingCount
                document.getElementById('price').value = blockData.price
                document.getElementById('centPrice').value = blockData.centPrice
                document.getElementById('strikePrice').value = blockData.strikePrice
                document.getElementById('strikeCentPrice').value = blockData.strikeCentPrice
                document.getElementById('unit').value = blockData.unit
                document.getElementById('energyLabelClass').value = blockData.energyLabelClass
                document.getElementById('energyLabelImage').value = blockData.energyLabelImage
                document.getElementById('productNameLines').value = blockData.productNameLines
                document.getElementById('descriptionLines').value = blockData.descriptionLines
                document.getElementById('priceSwitch').dataset.prices = blockData.groundPrice
                document.getElementById('priceBgColor').value = blockData.priceBgColor
                document.getElementById('priceBgColorPicker').value = blockData.priceBgColor
                document.getElementById('priceFontColor').value = blockData.priceFontColor
                document.getElementById('priceTextColorPicker').value = blockData.priceFontColor
                document.getElementById('productQuantitySelect').value = blockData.productQuantitySelect
                document.getElementById('productQuantitySelect').disabled = blockData.productQuantityHeadline && blockData.productQuantityJSON != "[]" ? false : true;
                document.getElementById('productQuantityJsonInput').value = blockData.productQuantityJSON
                document.getElementById('productQuantityHeadline').value = blockData.productQuantityHeadline

                sdk.setSuperContent(makeContent(true, true, blockData));
            }
        });
    }

    // Save data after every input change
    document.querySelectorAll('input, select').forEach( element => {
        element.addEventListener('change', () => {
            saveData();
        })

        element.addEventListener('blur', () => {
            saveData();
        })
    })

    window.onload = fetchData;
    //window.onchange = saveData;
    //window.onclick = saveData;
    //window.onscroll = saveData;

} 


export {saveData}