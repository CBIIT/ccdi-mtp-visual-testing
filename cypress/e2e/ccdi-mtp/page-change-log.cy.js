

import info from "./config.json" ;


describe('test suit for mtp target change log page ', () => {

    beforeEach(() => {

        cy.eyesOpen({
            appName: info.appName                      // The name of the app under test
        })
    })
    // define test case
    it('change-log ' , () => {

	    cy.visit(info.url + '/change-log')

	  	cy.eyesCheckWindow({
	                    target: 'window',
	                    fully: true,
	                });
    })
        
    // This method performs cleanup after each test.
    afterEach(() => {
        // Close Eyes to tell the server it should display the results.
        cy.eyesClose()
    })
})