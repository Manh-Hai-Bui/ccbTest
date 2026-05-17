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
  
  sdk.setSuperContent(`${JSON.stringify(newsletterJSON1, null, 2)}`)
  console.log('Setting supercontent')

  sdk.setContent(`SET @JsonData = ${JSON.stringify(newsletterJSON1, null, 2)}`)
  console.log('Setting setContent')
  
  }, 1000);