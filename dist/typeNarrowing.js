"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let status;
function checkStatus(statusVar) {
    if (statusVar.match('Pending')) {
        console.log(`Staus is, ${statusVar}`);
    }
}
let result = (checkStatus('Pending'));
//# sourceMappingURL=typeNarrowing.js.map