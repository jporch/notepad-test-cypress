const testData = {
    target: 'http://localhost:3000/',
    header: 'Notepad',
    note1: {
        name: 'Jesse',
        email: 'porchjm@gmail.com',
        comment: 'Words about words about words'
    },
    note2: {
        name: 'Testing',
        email: 'test@gmail.com',
        comment: 'Test test test test'
    },
}

const postNote = (note) => {
    cy.get('input[name="name"]').type(note.name)
    cy.get('input[name="email"]').type(note.email)
    cy.get('textarea[name="comment"]').type(note.comment)
    cy.get('button[type="submit"]').click()
}

const validateNote = (selector, data) => {
    cy.get(selector).contains(`${data.name} (${data.email})`)
    cy.get(selector).contains(`${data.comment}`)
}

describe('Basic pageload', () => {
    it('Visits Notepad and verifies that the page loaded', () => {
      cy.visit(testData.target)
      cy.contains(testData.header)
    })
  })

describe('Add a note', () => {
    it('Submits a new note', () => {
        cy.visit(testData.target)
        postNote(testData.note1)
        validateNote('.notes-list div:first-child',testData.note1)
    })
})

describe('Submit notes', () => {
    it('Submits two new notes', () => {
        cy.visit(testData.target)
        postNote(testData.note1)
        validateNote('.notes-list div:first-child',testData.note1)
        postNote(testData.note2)
        validateNote('.notes-list div:first-child',testData.note2)
        validateNote('.notes-list div:nth-child(2)',testData.note1)
    })
})