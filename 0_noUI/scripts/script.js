let sdk = new window.sfdc.BlockSDK({
tabs: [{
    key : "key",
    name : "User Interface",
    url : "https://manh-hai-bui.github.io/ccbTest/ui/"
}]
,blockEditorWidth: 600
});

console.log('Testing block')

/*setTimeout(()=>{
  
  sdk.setSuperContent(`${JSON.stringify(newsletterJSON1, null, 2)}`)
  console.log('Setting supercontent')

  sdk.setContent(`%%[ SET @JsonData = '${JSON.stringify(newsletterJSON1, null, 2)}' ]%%`)
  console.log('Setting setContent')
  
  }, 1000);*/

document.querySelector('#sendButton').addEventListener('click', (e) => {
    const inputValue = document.querySelector('#contentIdInput').value;
    let json = newsletterJSON1;

    if(!inputValue || inputValue != 0){
        json = newsletterJSON2;
    } 

    sdk.setSuperContent(`${JSON.stringify(json, null, 2)}`)
    sdk.setContent(`%%[ SET @JsonData = '${JSON.stringify(json, null, 2)}' ]%% %%=ContentBlockByKey('haiCCB_jsonToHeaderConfigurator')=%% %%=ContentBlockByKey('haiCCB_jsonToEmailConfigurator')=%%`)
})