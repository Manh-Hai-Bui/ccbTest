let sdk = new window.sfdc.BlockSDK({
tabs: [/*{
    key : "key",
    name : "name",
    url : ""
}*/]
,blockEditorWidth: 425
});

console.log('Testing block')

setTimeout(()=>{
  
  sdk.setSuperContent("<div>Test</div>")
  console.log('Setting supercontent')

  sdk.setContent("<div>Test</div>")
  console.log('Setting setContent')
  
  }, 3000);