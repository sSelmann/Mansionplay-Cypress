describe('Smoke Suit', () => {
  beforeEach(() => {
    cy.visit('https://mansionplay.com');
  });

  it('Page should load before 10 seconds', () => {
    cy.window().then((win) => {
      const loadTime = win.performance.timing.loadEventEnd - win.performance.timing.navigationStart;
      cy.log('Page load time is:', loadTime, 'milisecond');
      expect(loadTime).to.be.lessThan(10000);
    });
  });

  it('Should be able to login before 8 second', () => {
    cy.get('.login-dialog-button').click();
    cy.get('#login-username-input-target').type('inspector');
    cy.get('#login-password-input-target').type('123test123');
    cy.get('#login-request').click();
  
    const loginStartTime = Date.now();

    cy.url().should('include', '/home')
  
    cy.get('.loading-content').should('not.exist').then(() => {
      const loginEndTime = Date.now();
      const loginDuration = loginEndTime - loginStartTime;
      cy.log(`Login duration: ${loginDuration} ms`);
      expect(loginDuration).to.be.lessThan(80000);
    });
  });
});