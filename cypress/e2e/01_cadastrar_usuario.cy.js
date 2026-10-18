
import { fakerPT_BR as faker } from '@faker-js/faker';

describe('Trabalho de Automação', () => {

    it('Caso de teste 1: Cadastrar usuário', () => {
        const emailAleatorio = faker.internet.email()

        cy.visit('https://www.automationexercise.com')
        cy.get('a[href*=login]').click()

        // const timestamp = new Date().getTime()

        cy.get('[data-qa="signup-name"]').type(`PGATS Aut`)
        cy.get('[data-qa="signup-email"]').type(emailAleatorio)

        cy.get('[data-qa="signup-button"]').click()

        cy.get('#id_gender2').check()
        cy.get('[data-qa="password"]').type('12345')

        cy.get('[data-qa="days"]').select('1')
        cy.get('[data-qa="months"]').select('September')
        cy.get('[data-qa="years"]').select('1990')

        cy.get('#newsletter').check()
        cy.get('#optin').check()
        cy.get('[data-qa="first_name"]').type('PGATS')
        cy.get('[data-qa="last_name"]').type('Aut')
        cy.get('[data-qa="company"]').type('PGATS')
        cy.get('[data-qa="address"]').type('Example Address')

        cy.get('[data-qa="country"]').select('United States')
        cy.get('[data-qa="state"]').type('California')
        cy.get('[data-qa="city"]').type('San Francisco')
        cy.get('[data-qa="zipcode"]').type('03012345')

        cy.get('[data-qa="mobile_number"]').type('11999999999')

        cy.get('[data-qa="create-account"]').click()

        cy.get('[data-qa="account-created"]')
            .should('be.visible')
            .and('contain', 'Account Created!');


    });
})