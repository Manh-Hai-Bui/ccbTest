let sdk = new window.sfdc.BlockSDK({
tabs: []
,blockEditorWidth: 423
});

const input = document.querySelector('#contentIdInput');
const button = document.querySelector('#sendButton');

// Settings Data that will be transfered to marketing cloud
let blockData = {
    marketingAction: '',
    Segment: '',
    EmailDesigner: '',
    SendEmail: '',
    Report: ''
};

/* Marketing Cloud Communication  */

const getData = () => {
    sdk.getData((data) => {
        if (Object.keys(data).length > 0) {
            let blockData = data;
            input.value = blockData.Segment
        }
    })
}

const saveData = () => {
    blockData.Segment = document.getElementById('contentIdInput').value;
    sdk.setData(blockData, () => {
        displaySuperContent();
    })
}

const displaySuperContent = () => {
    sdk.setSuperContent(`Current data: ${JSON.stringify(blockData,null,2)}`);
}

/* UI Event listener */

input.addEventListener('change', () => {
    saveData();
})

input.addEventListener('click', () => {
    saveData();
})

/* Initialize */

getData();
displaySuperContent();