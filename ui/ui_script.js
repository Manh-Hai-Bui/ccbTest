let sdk = new window.sfdc.BlockSDK({
tabs: [/* */]
,blockEditorWidth: 425
});

document.getElementById('gen-btn').addEventListener('click', function(){
  var wrap=document.getElementById('output-wrap');
  var pre=document.getElementById('output');
  pre.textContent=JSON.stringify(state[current],null,2);
  wrap.style.display='block';
  wrap.scrollIntoView({behavior:'smooth',block:'nearest'});

  sdk.setSuperContent(`${JSON.stringify(state[current],null,2)}`)
  sdk.setContent(`%%[ SET @JsonData = '${JSON.stringify(state[current],null,2)}' ]%%`)

});

console.log('Testing block')

/*setTimeout(()=>{
  
  sdk.setSuperContent(`${JSON.stringify(newsletterJSON1, null, 2)}`)
  console.log('Setting supercontent')

  sdk.setContent(`%%[ SET @JsonData = '${JSON.stringify(newsletterJSON1, null, 2)}' ]%%`)
  console.log('Setting setContent')
  
  }, 1000);*/

/*document.querySelector('#sendButton').addEventListener('click', (e) => {
    const inputValue = document.querySelector('#output').value;
    let json = newsletterJSON1;

    if(!inputValue || inputValue != 0){
        json = newsletterJSON2;
    } 

    sdk.setSuperContent(`${JSON.stringify(json, null, 2)}`)
    sdk.setContent(`%%[ SET @JsonData = '${JSON.stringify(json, null, 2)}' ]%% %%=ContentBlockByKey('haiCCB_jsonToHeaderConfigurator')=%% %%=ContentBlockByKey('haiCCB_jsonToEmailConfigurator')=%%`)
})*/