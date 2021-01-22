/*
import * as _ from 'lodash';


/!*const o1 = {some: 3};
const o2 = {some: 3};

const clone1 = _.cloneDeep(o1);
const clone2 = _.cloneDeep(o2);

window.clone1 = clone1;
window.clone2 = clone2;*!/

debugger
function CloneDeepFromApp() {
}

CloneDeepFromApp.prototype = [];

const cloneDeepPrototype = new CloneDeepFromApp();

const o1 = {some: 3};
const o2 = {some: 3};
const patched1 = Object.setPrototypeOf(o1, cloneDeepPrototype);
const patched2 = Object.setPrototypeOf(o2, cloneDeepPrototype);
window.clone1 = patched1;
window.clone2 = patched2;
*/
