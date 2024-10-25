/// <reference types="cypress" />

describe('Tests for Home', () => {
  beforeEach(() => {
    cy.visit(
      'https://projeto-final-git-pagamento-nicholas-itos-projects.vercel.app/'
    );
    cy.wait(4000);
  });

  it('should render 6 individual restaurants', () => {
    cy.get(`.sc-ikkyvV`).children().should('have.length', 6);
  });
});
