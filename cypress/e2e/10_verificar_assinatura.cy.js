import homePage from '../pages/HomePage';
import { fakerPT_BR as faker } from '@faker-js/faker';

describe('Caso de teste 10: Verificar assinatura na página inicial', () => {
  it('Deve assinar a newsletter no rodapé com sucesso', () => {
    homePage.visit();
    cy.scrollTo('bottom');
    
    homePage.subscribe(faker.internet.email());
    homePage.successSubscribeMsg.should('be.visible').and('contain', 'You have been successfully subscribed!');
  });
});