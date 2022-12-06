import info from "./config.json" ;


describe('test suit for mtp target association page ', () => {

    beforeEach(() => {

        cy.eyesOpen({
            appName: info.appName                      // The name of the app under test
        })
    })

    if(info.targets){
        for (var i = info.targets.length - 1; i >= 0; i--) {
            let targetId = info.targets[i];
           
            // define test case
            it('associations - heatmap ' +targetId , () => {

                // wait for heatmap presented. 
                // *[@id="root"]/div/div[2]/div/div[3]/div[4]/div[2]/div/div[1]/div[2]
                 // open target assocaition page
                cy.visit(info.url + '/target/'+targetId+'/associations')

                cy.get('.MuiTable-root',
                      { timeout: 10_000 }
                    ).should('exist')
                
                cy.eyesCheckWindow({
                    target: 'region',
                     selector: {
                        type: 'xpath',
                        selector: '//*[@id="root"]/div/div[2]/div/div[3]/div[4]/div[2]/div' // or '//button'
                      }
                });


            })
        }
        
    }
    // This method performs cleanup after each test.
    afterEach(() => {
        
        // Close Eyes to tell the server it should display the results.
        cy.eyesClose()
    })
})