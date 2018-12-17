import { combineReducers } from 'redux'
import { SEARCH_OPTIONS } from '../constants/MyConstants.jsx'


let data = [];
let eligibileProducts = [];
let criteria;

function options(state = [], action) {
    data = require("../../refdata/refdata.json");
    eligibileProducts = [];
    criteria = action.text;
    data.products.forEach(eligibleList);
    if(eligibileProducts.length < 1){
        eligibileProducts=data.products;
    }
    switch (action.type) {
        case SEARCH_OPTIONS:
            return eligibileProducts;
        default:
            return state
    }
}

function eligibleList(value) {
    var eligibilityList = [];
    if (value != undefined && value.eligibility != undefined) {
        eligibilityList = value.eligibility;
    }
    var filteredProduct = eligibilityList.some(checkEligibility);
    if(filteredProduct)
    {
    	eligibileProducts.push(value);
    }
}

function checkEligibility(value) {
    return value == criteria;
}
const todoApp = combineReducers({
    options
})
export default todoApp;