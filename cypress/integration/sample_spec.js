describe('Basic pageload', () => {
    it('Visits Notepad and verifies that the page loaded', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('Notepad')
    })
  })

  describe('Add a note', () => {
    it('Submits a new note', () => {
      cy.visit('http://localhost:3000/')
      cy.get('input[name="name"').type('Jesse')
      cy.get('input[name="email"').type('porchjm@gmail.com')
      cy.get('textarea[name="comment"').type('Words about words about words')
      cy.get('button[type="submit"]').click()
      cy.get('.notes-list div:first-child').contains('Jesse (porchjm@gmail.com)')
      cy.get('.notes-list div:first-child').contains('Words about words about words')
    })
  })