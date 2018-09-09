let expect = require('chai').expect;
let should = require('chai').should();
let eBay = require('../src/index');
let buildURL = require('../src/buildURL');

describe('test building url methods', () => {

    it('test search url', () => {
        let expected_search_url = 'https//svcs.ebay.com/services/search/FindingService/v1?SECURITY-APPNAME=testID&OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.0.0&RESPONSE-DATA-FORMAT=JSON&keywords=merecedes%20relays&paginationOutput.entriesPerPage=10&catergoryID=6028&item.filter.name=Condition,itemFilter.value=3000&itemFilter.name=SoldItemsOnly,itemFilter.value=true&sortedOrder=PricePlusShippingHighest&callback=_cb_findItemsByKeywords'
        let options ={
   name: {...filteredArray},
   operationName: "findItemsByKeywords",
   param:"keywords",
   clientId:"testID",
   limit:10
        }
        expect(buildURL.buildSearchUrl(options)).to.be.equal(expected_search_url); 
    });

})