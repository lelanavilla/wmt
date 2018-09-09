let expect = require("chai").expect;
let should = require("chai").should();
let Ebay = require('../src/index');

describe("check all the options provided are valid or not - Ebay Constructor ", () =>{
    it("check input is provided or not", ()=>{
        expect(()=>{
            new Ebay();
        }).to.throw("Options are missing, please provide valid inputs");
    });

    it("should have client ID", () =>{
        let ebayApi = new Ebay({ clientID:"12345" });
        ebayApi.options.should.have.property('clientID');
    });

    it("should not have client ID", ()=>{
        expect(() => {
            new eBay({});
        }).to.throw("Client ID is missing\ncheck ebay developer API to get your valid Client ID http://developer.ebay.com/DevZone/account/");
    });

    it("check instance of Ebay", () => {
        let ebayApi = new eBay({clientID: '12345'});
        expect(ebayApi).to.be.a.instanceOf(eBay);
    });
})