"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var status;
function checkStatus(statusVar) {
    if (statusVar.match('Pending')) {
        console.log("Staus is, ".concat(statusVar));
    }
}
var result = (checkStatus('Pending'));
