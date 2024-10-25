/// <reference types="cypress" />

describe('Tests for Perfil', () => {
  beforeEach(() => {
    cy.visit(
      'https://projeto-final-git-pagamento-nicholas-itos-projects.vercel.app/'
    );
  });

  const addItemAndProceedToForm = () => {
    cy.get(':nth-child(1) > .sc-jlZhRR').first().click();
    cy.get(':nth-child(1) > .sc-dAlxHm').first().click();
    cy.get('.sc-hmdnzv > .sc-dAlxHm').click();
    cy.get('.sc-jsJARu > img').click();
    cy.get('.sc-dhKdPU').click();
    cy.get('.sc-eBMFzZ > .sc-dAlxHm').click();
  };

  const fillFormsAndSubmit = () => {
    // Formulário de entrega
    cy.get('#deliveryName').type('xxx xxx');
    cy.get('#description').type('xxx xxxx. xxx');
    cy.get('#city').type('xxxxx');
    cy.get('#zipCode').type('12345-999');
    cy.get('#deliveryNumber').type('12');
    cy.get('#complement').type('xxxx');
    cy.get('[title="Continuar para pagamento"]').click();

    // Formulário de pagamento
    cy.get('#name').type('ana julia');
    cy.get('#cardNumber').type('9999 9999 9999 9999');
    cy.get('#code').type('123');
    cy.get('#month').type('12');
    cy.get('#year').type('24');
    cy.get('[type="submit"]').click();
  };

  it('should add an item to cart', () => {
    addItemAndProceedToForm();
    cy.get('.sc-eBMFzZ.edmCiR').should('be.visible');
  });

  it('should delete an item from the cart', () => {
    addItemAndProceedToForm();
    cy.get('[title="Voltar ao carrinho"]').click();
    cy.get('.sc-jxOSYQ > button').click();
    cy.get('.sc-cWSIco.jumBYJ').should('be.visible');
  });

  it('should go to the form', () => {
    addItemAndProceedToForm();
    cy.get('.sc-esYjtY > h3').should('have.text', 'Dados de Entrega');
  });

  it('should fill out the entire form correctly', () => {
    addItemAndProceedToForm();
    fillFormsAndSubmit();
    cy.get('.sc-esYjtY > div > .sc-dAlxHm').should('be.visible');
  });
});
