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
		$("#response-div").html(status + " - " + report);
		$("#label").val(result.label);
		$("#productName").val(result.productName);
		$("#productMainImage").val(result.productMainImage);
		$("#additionalImage01").val(result.additionalImage01);
		$("#additionalImage02").val(result.additionalImage02);
		$("#additionalImage03").val(result.additionalImage03);
		$("#additionalImage04").val(result.additionalImage04);
		$("#productMainImagePreview").attr("src",result.productMainImage);
		$("#additionalImage01Preview").attr("src",result.additionalImage01);
		$("#additionalImage02Preview").attr("src",result.additionalImage02);
		$("#additionalImage03Preview").attr("src",result.additionalImage03);
		$("#additionalImage04Preview").attr("src",result.additionalImage04);
		$("#description").val(result.productDescription);
		$("#productLink").val(result.productLink);
		$("#usps").val(result.usps);
		$("#brand").val(result.brandName);
		$("#brandLogo").val(result.brandLogo);
		$("#productRating").val(result.productRating);
		$("#ratingCount").val(result.productRatingCount);
		$("#price").val(result.price);
		$("#centPrice").val(result.centPrice);
		$("#strikePrice").val(result.strikePrice);
		$("#strikeCentPrice").val(result.strikeCentPrice);
		$("#unit").val(result.unit);
		$("#energyLabelClass").val(result.energyLabelClass);
		$("#energyLabelImage").val(result.energyLabelImage);

		// Breaking down the groundPrice string to smaller components
		// [0] Entire string, [1] EuroPrice, [2] CentPrice, [3] Unit String
		let groundPriceMatch = result.groundPrice.replaceAll('.','').match(/(\d+),(\d{2})\s*€\s(.*)$/);
		if(groundPriceMatch && groundPriceMatch.length > 3) {
			$("#priceSwitch").attr('data-prices', JSON.stringify({ euroPrice: result.price, centPrice: result.centPrice, unitString: result.unit, euroPrice_alt: groundPriceMatch[1], centPrice_alt: groundPriceMatch[2], unitString_alt: groundPriceMatch[3]}));
		}

		// Load & validate product quantity price JSON
		let productQuantityData = "[]";
		let productQuantityHeadline = "";
		try {
		productQuantityData = result.productQuantityData.replaceAll("'", '"');
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