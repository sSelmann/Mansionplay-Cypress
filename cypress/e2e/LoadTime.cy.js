describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://mansionplay.com')

    cy.window().then((win) => {
      const loadTime = win.performance.timing.loadEventEnd - win.performance.timing.navigationStart;
      cy.log('Sayfa yükleme süresi:', loadTime, 'milisaniye');
    })
  })
})