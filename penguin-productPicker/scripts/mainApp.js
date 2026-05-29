let sdk = new window.sfdc.BlockSDK({
tabs: [/*{
    key : "penguinCoverPicker",
    name : "Penguin Product Picker",
    url : ""
}*/]
,blockEditorWidth: 450
});

let blockData = {
    "module": "",
    "productData" : [
        {
            "isbn": "",
            "link": "",
            "title": "",
            "copy": "",
            "cta": "",
            "imageSrc": "",
            "imageIsHidden": false,
            "ean" : ""
        },{
            "isbn": "",
            "link": "",
            "title": "",
            "copy": "",
            "cta": "",
            "imageSrc": "",
            "imageIsHidden": false,
            "ean" : ""
        },{
            "isbn": "",
            "link": "",
            "title": "",
            "copy": "",
            "cta": "",
            "imageSrc": "",
            "imageIsHidden": false,
            "ean" : ""
        },{
            "isbn": "",
            "link": "",
            "title": "",
            "copy": "",
            "cta": "",
            "imageSrc": "",
            "imageIsHidden": false,
            "ean" : ""
        }
    ]
};

function getSavedBlockData(){
            
    // Fill UI with previous values (if there is any previous data)
    sdk.getData((data) => {
        if (Object.keys(data).length == 0) return;

            blockData = data;
            menu.value = blockData.module;
            menu.dispatchEvent(new Event('change'));

            let allActiveRowContainers = document.querySelectorAll('.module.active .row-container');
            blockData.productData.forEach( (productData, i) => {

                if (!allActiveRowContainers[i]) return;
                let rowContainer = allActiveRowContainers[i];

                rowContainer.querySelector('.isbn-input').value = productData.isbn;
                rowContainer.querySelector('.link-input').value = productData.link;
                if (rowContainer.querySelector('.title-input')) rowContainer.querySelector('.title-input').value = productData?.title || "";
                if (rowContainer.querySelector('.copy-input')) rowContainer.querySelector('.copy-input').value = productData?.copy  || "";
                if (rowContainer.querySelector('.cta-input')) rowContainer.querySelector('.cta-input').value = productData?.cta || "";
                rowContainer.querySelector('.image-group img').src = productData.imageSrc;
                if(productData.imageIsHidden) rowContainer.querySelector('.imagePlaceholder').classList.add('hidden');
                rowContainer.querySelector('.ean').innerHTML = productData.ean;

            })
            
            let previewContent = createPreviewHTML(blockData);
            sdk.setSuperContent(previewContent);
        
    });

    // Create Preview
    //sdk.setSuperContent(createPreviewHTML);
}

function saveBlockData() {

    blockData.module = menu.value;
    
    let allActiveRowContainers = document.querySelectorAll('.module.active .row-container');
    allActiveRowContainers.forEach((rowContainer, i) => {
        console.log(blockData)
        blockData.productData[i].isbn = rowContainer.querySelector('.isbn-input').value.trim();
        blockData.productData[i].link = rowContainer.querySelector('.link-input').value.trim();
        blockData.productData[i].title = rowContainer.querySelector('.title-input')?.value?.trim() || "";
        blockData.productData[i].copy = rowContainer.querySelector('.copy-input')?.value?.trim() || "";
        blockData.productData[i].cta = rowContainer.querySelector('.cta-input')?.value?.trim() || "";
        blockData.productData[i].imageSrc = rowContainer.querySelector('.image-group img').getAttribute('src');
        blockData.productData[i].imageIsHidden = rowContainer.querySelector('.imagePlaceholder').classList.contains('hidden') ? true : false;
        blockData.productData[i].ean = rowContainer.querySelector('.ean').innerHTML;
    })

    sdk.setData(blockData, () => {

        let content = `%%[
                SET @ccbProductUrl0 = "${ blockData.productData[0].link || "" }"
                SET @ccbProductTitle0 = "${ blockData.productData[0].title || "" }" 
                SET @ccbProductCopy0 = "${ blockData.productData[0].copy || "" }"
                SET @ccbProductCta0 = "${ blockData.productData[0].cta || "" }" 
                SET @ccbImageUrl0 = Lookup("ENT.ccbProductData", "imageUrl","isbn", "${ blockData.productData[0].isbn }")
            ]%%`

        let content2 = `%%[
                SET @ccbProductUrl1 = "${ blockData.productData[1].link || "" }"
                SET @ccbProductTitle1 = "${ blockData.productData[1].title || "" }" 
                SET @ccbProductCopy1 = "${ blockData.productData[1].copy || "" }" 
                SET @ccbProductCta1 = "${ blockData.productData[1].cta || "" }" 
                SET @ccbImageUrl1 = Lookup("ENT.ccbProductData", "imageUrl","isbn", "${ blockData.productData[1].isbn }")
            ]%%`

        let content3 = `%%[
                SET @ccbProductUrl2 = "${ blockData.productData[2].link || "" }"
                SET @ccbProductTitle2 = "${ blockData.productData[2].title || "" }" 
                SET @ccbProductCopy2 = "${ blockData.productData[2].copy || "" }"
                SET @ccbProductCta2 = "${ blockData.productData[2].cta || "" }" 
                SET @ccbImageUrl2 = Lookup("ENT.ccbProductData", "imageUrl","isbn", "${ blockData.productData[2].isbn }")
            ]%%`

        let content4 = `%%[
                SET @ccbProductUrl3 = "${ blockData.productData[3].link || "" }"
                SET @ccbProductTitle3 = "${ blockData.productData[3].title || "" }" 
                SET @ccbProductCopy3 = "${ blockData.productData[3].copy || "" }"
                SET @ccbProductCta3 = "${ blockData.productData[3].cta || "" }" 
                SET @ccbImageUrl3 = Lookup("ENT.ccbProductData", "imageUrl","isbn", "${ blockData.productData[3].isbn }")
            ]%%`

        console.log('blockdata', blockData)

        if (blockData.module == "duo_layout"){
            content += content2
            content += "%%=ContentBlockByKey('haiCCB3_module2')=%%"
            
        }

        if (blockData.module == "gallery_manual"){
            content += content2
            content += content3
            content += content4
            content += `%%=ContentBlockByKey('haiCCB3_module3')=%%`
        }

        if (blockData.module == "cover_image"){
            content += "%%=ContentBlockByKey('haiCCB3_module1')=%%"
        }

        if (blockData.module == "layout_recommendation"){
            //content += "%%=ContentBlockById('35690')=%%" 
        }        

        // Check for ampScript -> No ampScript allowed in preview
        if (content.search('%%') === -1) {
            superContent = content;
        }

        //console.log('content', content);

        let previewContent = createPreviewHTML(blockData);
        sdk.setSuperContent(previewContent); // Preview content
        sdk.setContent(content); // Rendered content
    });

}

function createPreviewHTML(blockData){

    let html = `<div style="line-height: 28px;font-size:20px;text-align:center;padding:12px;margin-bottom: 8px;font-family:Arial,sans-serif;background-color:#d9d5d5;">
    Custom Content Block: ${blockData.module}
    <div style="font-size:14px;">Info: Vorschaubilder sind nicht tagesaktuell. Beim Versand sind die Bilder tagesaktuell.</div>
    </div>`;

    if(blockData.module == "gallery_manual"){
        html +=  `
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px; font-size:12px; font-family: Arial,sans-serif;" width="100%">
                <tr>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;" width="100%">
                        <tr>
                            <td align="left" valign="bottom">
                                <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-spacing:0;max-width:600px;" width="100%">
                                    <tr>
                                        <td valign="bottom" align="center" style="padding: 0 0 20px;" width="25%">
                                            <img alt="4colImage1" src="${ blockData.productData[0].imageSrc}" style="display: block; padding: 0px; height: auto; width: 100%; max-width: 270px; text-align: center; border: 0px;" width="125">
                                        </td>
                                        <td style="padding: 0 5px;">&nbsp;</td>
                                        <td valign="bottom" align="center" style="padding: 0 0 20px;" width="25%">
                                            <img alt="4colImage2" src="${ blockData.productData[1].imageSrc}" style="display: block; padding: 0px; height: auto; width: 100%; max-width: 270px; text-align: center; border: 0px;" width="125">
                                        </td>
                                        <td style="padding: 0 5px;">&nbsp;</td>
                                        <td valign="bottom" align="center" style="padding: 0 0 20px;" width="25%">
                                            <img alt="4colImage3" src="${ blockData.productData[2].imageSrc}" style="display: block; padding: 0px; height: auto; width: 100%; max-width: 270px; text-align: center; border: 0px;" width="125">
                                        </td>
                                        <td style="padding: 0 5px;">&nbsp;</td>
                                        <td valign="bottom" align="center" style="padding: 0 0 20px;" width="25%">
                                            <img alt="4colImage4" src="${ blockData.productData[3].imageSrc}" style="display: block; padding: 0px; height: auto; width: 100%; max-width: 270px; text-align: center; border: 0px;" width="125">
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </tr>
            </table>
        `
    } else if (blockData.module == "cover_image") {
        html += `
       <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
            <tr>
                <td align="center" style="padding-top:10px;padding-bottom:20px;">
                   <img alt="coverImage1" border="0" height="auto" src="${ blockData.productData[0].imageSrc}" style="max-width: 200px; border: 0px;" width="200">
                </td>
            </tr>
        </table>
        `
    } else if (blockData.module == "duo_layout") {
        html += `
       <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px; font-size:12px; font-family: Arial,sans-serif;" width="100%">
            <tr>
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;" width="100%">
                    <tr>
                        <td align="left" valign="top">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-spacing:0;max-width:600px; padding-bottom: 20px;" width="100%">
                                <tr>
                                    <td valign="bottom" align="center" style="padding-left:0;padding-right:10px; padding-top: 0;" width="50%">
                                        <img alt="4colImage1" src="${blockData.productData[0].imageSrc}" style="display: block; padding: 0px; height: auto; width: 80%; max-width: 270px; text-align: center; border: 0px;" width="125"><br>
                                        
                                    </td>
                                    <td valign="bottom" align="center" style="padding-left:10px;padding-right:0; padding-top: 0;" width="50%">
                                        <img alt="4colImage2" src="${blockData.productData[1].imageSrc}" style="display: block; padding: 0px; height: auto; width: 80%; max-width: 270px; text-align: center; border: 0px;" width="125"><br>
                                    </td>
                                </tr>
                                <tr>
                                    <td valign="top" align="center" style="padding-left:10px; padding-right:0; padding-top: 0;" width="50%">
                                        <span style="text-align: center; font-family: 'Arial', 'Source Sans 3', sans-serif; font-size: 16px; padding: 12px 12px 0; font-weight:bold;">${blockData.productData[0].title}</span><br>
                                        <span style="text-align: center; font-family: 'Arial', 'Source Sans 3', sans-serif; font-size: 16px; padding: 12px 12px 0;">${blockData.productData[0].copy}</span>
                                    </td>
                                    <td valign="top" align="center" style="padding-left:10px; padding-right:0; padding-top: 0;" width="50%">
                                        <span style="text-align: center; font-family: 'Arial', 'Source Sans 3', sans-serif; font-size: 16px; padding: 12px 12px 0; font-weight:bold;">${blockData.productData[1].title}</span><br>
                                        <span style="text-align: center; font-family: 'Arial', 'Source Sans 3', sans-serif; font-size: 16px; padding: 12px 12px 0;">${blockData.productData[1].copy}</span>                             
                                    </td>
                                </tr>
                                <tr>
                                    <td valign="top" align="center" style="padding-left:10px; padding-right:0; padding-top: 0;" width="50%">
                                        <br><span style="text-align: center; font-family: 'Arial', 'Source Sans 3', sans-serif; font-size: 16px; padding: 12px 12px 0; text-decoration: underline;">${blockData.productData[0].cta}</span>
                                    </td>
                                    <td valign="top" align="center" style="padding-left:10px; padding-right:0; padding-top: 0;" width="50%">
                                        <br><span style="text-align: center; font-family: 'Arial', 'Source Sans 3', sans-serif; font-size: 16px; padding: 12px 12px 0; text-decoration: underline;">${blockData.productData[1].cta}</span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </tr>
        </table>
        `
    }

    return html;

    
}

getSavedBlockData();