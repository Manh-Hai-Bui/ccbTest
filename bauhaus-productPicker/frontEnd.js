function makeContent(isCorrect, maStatus = true,  blockData = null) {
	return ''.concat(PATTERNS.productPreviewHeader,
			`<table>
				<tr><td>productid: ${blockData.sku}</td></tr>
				<tr><td style="font-size:12px; color:#000000;">Label: ${blockData.label || '-'}</td></tr>
				<tr><td style="font-size:12px; color:#000000;"><img src="${blockData.selectedImage}" style="width:100px"/></td></tr>
				<tr><td style="font-size:12px; color:#000000;">Brand: ${blockData.brand || '-'}</td></tr>
				<tr><td style="font-size:12px; color:#000000;">Name: ${blockData.productName || '-'}</td></tr>
				<tr><td style="font-size:12px; color:#000000;">Description: ${blockData.productDescription || '-'}</td></tr>
				<tr><td style="font-size:12px; color:#000000;">Rating: ${blockData.productRating || '-'}</td></tr>
				<tr><td style="font-size:12px; color:#000000;">Price: ${blockData.price || '-'}</td></tr>
				<tr><td style="font-size:12px; color:#000000;">Centprice: ${blockData.centPrice || '-'}</td></tr>
				<tr><td style="font-size:12px; color:#000000;">Strike Price: ${blockData.strikePrice || '-'}</td></tr>
				<tr><td style="font-size:12px; color:#000000;">Strike Centprice: ${blockData.strikeCentPrice || '-'}</td></tr>
				<tr><td style="font-size:12px; color:#000000;">Unit: ${blockData.unit || '-'}</td></tr>	
				<tr><td style="font-size:12px; color:#000000;">Usps: ${blockData.usps || '-'}</td></tr>	
				<tr><td style="font-size:12px; color:#000000;">productQuantity Price: ${blockData.productQuantitySelect || '-'}</td></tr>	
			</table>`
		);
}

function getProductData(productJSON) {

	if(productJSON){
		$("#response-div").html(status + " - " + productJSON.report);
		$("#label").val(productJSON.label);
		$("#productName").val(productJSON.productName);
		$("#productMainImage").val(productJSON.productMainImage);
		$("#additionalImage01").val(productJSON.additionalImage01);
		$("#additionalImage02").val(productJSON.additionalImage02);
		$("#additionalImage03").val(productJSON.additionalImage03);
		$("#additionalImage04").val(productJSON.additionalImage04);
		$("#productMainImagePreview").attr("src",productJSON.productMainImage);
		$("#additionalImage01Preview").attr("src",productJSON.additionalImage01);
		$("#additionalImage02Preview").attr("src",productJSON.additionalImage02);
		$("#additionalImage03Preview").attr("src",productJSON.additionalImage03);
		$("#additionalImage04Preview").attr("src",productJSON.additionalImage04);
		$("#description").val(productJSON.productDescription);
		$("#productLink").val(productJSON.productLink);
		$("#usps").val(productJSON.usps);
		$("#brand").val(productJSON.brandName);
		$("#brandLogo").val(productJSON.brandLogo);
		$("#productRating").val(productJSON.productRating);
		$("#ratingCount").val(productJSON.productRatingCount);
		$("#price").val(productJSON.price);
		$("#centPrice").val(productJSON.centPrice);
		$("#strikePrice").val(productJSON.strikePrice);
		$("#strikeCentPrice").val(productJSON.strikeCentPrice);
		$("#unit").val(productJSON.unit);
		$("#energyLabelClass").val(productJSON.energyLabelClass);
		$("#energyLabelImage").val(productJSON.energyLabelImage);

		// Breaking down the groundPrice string to smaller components
		// [0] Entire string, [1] EuroPrice, [2] CentPrice, [3] Unit String
		let groundPriceMatch = productJSON.groundPrice.replaceAll('.','').match(/(\d+),(\d{2})\s*€\s(.*)$/);
		if(groundPriceMatch && groundPriceMatch.length > 3) {
			$("#priceSwitch").attr('data-prices', JSON.stringify({ euroPrice: productJSON.price, centPrice: productJSON.centPrice, unitString: productJSON.unit, euroPrice_alt: groundPriceMatch[1], centPrice_alt: groundPriceMatch[2], unitString_alt: groundPriceMatch[3]}));
		} else {
			$("#priceSwitch").attr('data-prices', '')
		}

		// Load & validate product quantity price JSON
		let productQuantityData = "[]";
		let productQuantityHeadline = "";
		try {
		productQuantityData = productJSON.productQuantityData.replaceAll("'", '"');
		$("#productQuantityJsonInput").val(productQuantityData);

		let productQuantityJSON = JSON.parse(productQuantityData);
		if(productQuantityJSON.length > 0){
			productQuantityHeadline = `Mengenpreise ab ${productQuantityJSON[1].quantity?.toString().replaceAll('.',',')} ${productQuantityJSON[1].unit}`;
		}

		// Enable select element only if JSON is valid
		if(productQuantityHeadline && productQuantityData != "[]"){
			$("#productQuantityHeadline").val(productQuantityHeadline);
			$("#productQuantitySelect").prop('disabled', false);
		} else {
			$('#productQuantitySelect').val($('#productQuantitySelect option:first').val());
			$("#productQuantitySelect").prop('disabled', true);
		}
		
		} catch (err) {
			$('#productQuantitySelect').val($('#productQuantitySelect option:first').val());
			$("#productQuantitySelect").prop('disabled', true);
			console.log("productQuantityPrices assignment error: ", err);
			console.log("productQuantityData: ", productQuantityData);
			console.log("productQuantityHeadline: ", productQuantityHeadline);
		}
	} else {
		$("#response-div").html("Status: " + status + " <br /> Message: " + report);
	}
}