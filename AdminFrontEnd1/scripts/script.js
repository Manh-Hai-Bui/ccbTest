let sdk = new window.sfdc.BlockSDK({
tabs: [{
    key : "key",
    name : "Segment",
    url : "https://manh-hai-bui.github.io/ccbTest/AdminFrontEnd2/"
},{
    key : "key",
    name : "Email Designer",
    url : "https://manh-hai-bui.github.io/ccbTest/AdminFrontEnd3/"
},{
    key : "key",
    name : "Send Email",
    url : "https://manh-hai-bui.github.io/ccbTest/AdminFrontEnd4/"
},{
    key : "key",
    name : "Report",
    url : "https://manh-hai-bui.github.io/ccbTest/AdminFrontEnd5/"
}]
,blockEditorWidth: 423
});

document.querySelector('#sendButton').addEventListener('click', (e) => {
    const inputValue = document.querySelector('#contentIdInput').value;
    let json = newsletterJSON1;

    if(!inputValue || inputValue != 0){
        json = newsletterJSON2;
    } 

    sdk.setSuperContent(`${JSON.stringify(json, null, 2)}`)
    sdk.setContent(`%%[ SET @JsonData = '${JSON.stringify(json, null, 2)}' ]%% %%=ContentBlockByKey('haiCCB_jsonToHeaderConfigurator')=%% %%=ContentBlockByKey('haiCCB_jsonToEmailConfigurator')=%%`)
})