const CONSTANTS = {
    callRestriction : 'This application is for use in the Salesforce Marketing Cloud Content Builder Editor only.',
    noSKU : 'Please enter a SKU',
    wrongSKU : 'No product data found for SKU'
}

const PATTERNS = {
    productPreviewHeader :`<table cellpadding="0" 
                    cellspacing="0" 
                    width="100%" 
                    role="presentation" 
                    style="background-color: #E9E9E9; 
                            min-width: 100%;" 
                    class="stylingblock-content-wrapper">
                    <tbody>
                        <tr><td style="padding: 0px 20px 20px; " class="stylingblock-content-wrapper camarker-inner">
                        <h1 style="color:#808080;font-family:Arial,helvetica,sans-serif;font-size:28px;font-style:normal;font-weight:bold;line-height:1;">
                            Product Preview</h1> </td><tr></table>`,
}

const product0 = {
"status": "OK",
"report": "Successful request",
"dataExtension": "LIVE_productCatalog",
"productId" : "19044160",
"brandName" : "",
"productDescription" : "Fassungsverm\u00f6gen: 120 l, Grau, 10 Stk.",
"brandLogo" : "",
"usps" : "Starkes Material||Gro\u00dfes Fassungsverm\u00f6gen||Vielf\u00e4ltige Einsatzm\u00f6glichkeiten",
"productName" : "M\u00fcllbeutel",
"productRating" : "5.0",
"productRatingCount" : "1",
"price" : "3",
"centPrice" : "85",
"unit" : "Rolle",
"productLink" : "https://www.bauhaus.info/muellsaecke/muellbeutel/p/19044160",
"availability" : "IN_STOCK",
"groundPrice" : "",
"deliveryTime" : "",
"strikePrice" : "",
"strikeCentPrice" : "",
"scalePriceFlag" : "True",
"promotionalPrice" : "",
"primaryProductId" : "19044160",
"energyLabelClass" : "",
"energyLabelRange" : "",
"productMainImage" : "https://media.cdn.bauhaus/m/713749/12.webp",
"additionalImage01" : "https://media.cdn.bauhaus/m/713749/prod_medium_square.webp",
"additionalImage02" : "",
"additionalImage03" : "",
"additionalImage04" : "",
"label" : "",
"energyLabelImage" : "",
"productQuantityData" : "[{'unit': 'Rolle', 'quantity': 1, 'quantityPrice': '3', 'quantityCentPrice': '85', 'currency': '€'}, {'unit': 'Rollen', 'quantity': 10, 'quantityPrice': '3', 'quantityCentPrice': '60', 'currency': '€'}]"
}

const product1 = {
"status": "OK",
"report": "Successful request",
"dataExtension": "LIVE_productCatalog",
"productId" : "30539583",
"brandName" : "Beauflor",
"productDescription" : "Holzoptik, Breite: 400 cm, Braun",
"brandLogo" : "",
"usps" : "Besonders pflegeleichter Bodenbelag||F\u00fcr geringe private Nutzung||Schaumstoffr\u00fccken mit schallabsorbierenden Eigenschaften",
"productName" : "PVC-Boden Meterware Start",
"productRating" : "",
"productRatingCount" : "",
"price" : "7",
"centPrice" : "95",
"unit" : "m²",
"productLink" : "https://www.bauhaus.info/vinyl-auslegeware/beauflor-pvc-boden-meterware-start/p/30539583",
"availability" : "OUT_OF_STOCK",
"groundPrice" : "7,95 € pro 1 m²",
"deliveryTime" : "",
"strikePrice" : "",
"strikeCentPrice" : "",
"scalePriceFlag" : "",
"promotionalPrice" : "",
"primaryProductId" : "30539583",
"energyLabelClass" : "",
"energyLabelRange" : "",
"productMainImage" : "https://media.cdn.bauhaus/m/1480304/12.webp",
"additionalImage01" : "https://media.cdn.bauhaus/m/2740756/prod_medium_square.webp",
"additionalImage02" : "https://media.cdn.bauhaus/m/2737938/prod_medium_square.webp",
"additionalImage03" : "https://media.cdn.bauhaus/m/1480304/prod_medium_square.webp",
"additionalImage04" : "",
"label" : "",
"energyLabelImage" : "",
"productQuantityData" : "[]"
}

const product2 = {
"status": "OK",
"report": "Successful request",
"dataExtension": "LIVE_productCatalog",
"productId" : "28575005",
"brandName" : "",
"productDescription" : "Eiche Bremberg, Landhausdiele, 1.292 x 193 x 7 mm",
"brandLogo" : "",
"usps" : "Vintage Optik||Landhausdielendesign||Leimfrei und einfach zu verlegen mit CLIC It! Verlegesystem||Pflegeleicht, hygienisch und allergikerfreundlich||Qualit\u00e4t und Sicherheit f\u00fcr viele Jahre",
"productName" : "Laminat",
"productRating" : "4.6",
"productRatingCount" : "65",
"price" : "21",
"centPrice" : "07",
"unit" : "Karton",
"productLink" : "https://www.bauhaus.info/laminat/laminat/p/28575005",
"availability" : "IN_STOCK",
"groundPrice" : "8,45 € pro 1 m²",
"deliveryTime" : "",
"strikePrice" : "",
"strikeCentPrice" : "",
"scalePriceFlag" : "True",
"promotionalPrice" : "",
"primaryProductId" : "28575005",
"energyLabelClass" : "",
"energyLabelRange" : "",
"productMainImage" : "https://media.cdn.bauhaus/m/795084/12.webp",
"additionalImage01" : "https://media.cdn.bauhaus/m/988059/prod_medium_square.webp",
"additionalImage02" : "https://media.cdn.bauhaus/m/795084-1/prod_medium_square.webp",
"additionalImage03" : "https://media.cdn.bauhaus/m/989172/prod_medium_square.webp",
"additionalImage04" : "https://media.cdn.bauhaus/m/1692272/prod_medium_square.webp",
"label" : "",
"energyLabelImage" : "",
"productQuantityData" : "[{'unit': 'm²', 'quantity': 2.494, 'quantityPrice': '8', 'quantityCentPrice': '45', 'currency': '€'}, {'unit': 'm²', 'quantity': 129.688, 'quantityPrice': '7', 'quantityCentPrice': '95', 'currency': '€'}, {'unit': 'm²', 'quantity': 389.064, 'quantityPrice': '7', 'quantityCentPrice': '45', 'currency': '€'}]"
}

const product3 = {
"status": "OK",
"report": "Successful request",
"dataExtension": "LIVE_productCatalog",
"productId" : "79120962",
"brandName" : "Piardino",
"productDescription" : "Anthurium x andreanum Hot Lips, Topfgr\u00f6\u00dfe: 12 cm, Rot/Wei\u00df",
"brandLogo" : "https://media.cdn.bauhaus/m/116161/logo_small_flex.png",
"usps" : "Dekorative Zimmerpflanze||Exotische Bl\u00fctenpracht||Gr\u00fcn gl\u00e4nzende Bl\u00e4tter und leuchtend rote Bl\u00fcten||Langanhaltende Bl\u00fctezeit||Ideal f\u00fcr sonnig-halbschattige Pl\u00e4tze",
"productName" : "Flamingoblume Hot Lips",
"productRating" : "",
"productRatingCount" : "",
"price" : "9",
"centPrice" : "99",
"unit" : "Stück",
"productLink" : "https://www.bauhaus.info/bluehpflanzen/piardino-flamingoblume-hot-lips/p/79120962",
"availability" : "IN_STOCK",
"groundPrice" : "9,99 € pro 1 Stück",
"deliveryTime" : "",
"strikePrice" : "",
"strikeCentPrice" : "",
"scalePriceFlag" : "",
"promotionalPrice" : "",
"primaryProductId" : "79120962",
"energyLabelClass" : "",
"energyLabelRange" : "",
"productMainImage" : "https://media.cdn.bauhaus/m/649823/12.webp",
"additionalImage01" : "https://media.cdn.bauhaus/m/453487/prod_medium_square.webp",
"additionalImage02" : "https://media.cdn.bauhaus/m/649825-1/prod_medium_square.webp",
"additionalImage03" : "https://media.cdn.bauhaus/m/649823/prod_medium_square.webp",
"additionalImage04" : "https://media.cdn.bauhaus/m/3604863-1/prod_medium_square.webp",
"label" : "",
"energyLabelImage" : "",
"productQuantityData" : "[]"
}