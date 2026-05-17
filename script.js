let sdk = new window.sfdc.BlockSDK({
tabs: [/*{
    key : "bauhausProductPicker",
    name : "Bauhaus Product Picker",
    url : ""
}*/]
,blockEditorWidth: 425
});


setTimeout(()=>{
  
  sdk.setSuperContent("<div>Test</div>")
  console.log('Setting supercontent')

  sdk.setContent("<div>Test</div>")
  console.log('Setting setContent')
  
  }, 3000);