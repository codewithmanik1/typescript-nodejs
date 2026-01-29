export {};

let status: 'Pending' | 'Success' | 'Cancle';

function checkStatus(statusVar: 'Pending' | 'Success' | 'Cancle'){
    if(statusVar.match('Pending')){
        console.log(`Staus is, ${statusVar}`);
    }
}

let result = (checkStatus('Pending'));