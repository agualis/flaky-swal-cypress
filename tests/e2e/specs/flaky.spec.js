export const clickConfirmInPopup = () => {
  cy.get('.swal2-confirm').click()
}

export const click = selector => {
  cy.get(selector).click()
}

describe('Flaky Test', () => {

  it('follows two steps with confirmation', () => {
    cy.visit('localhost:8080')
    click('#first-step')
    clickConfirmInPopup()
    click('#second-step')
    clickConfirmInPopup()
    cy.contains('FIRST STEP')
  })
})
