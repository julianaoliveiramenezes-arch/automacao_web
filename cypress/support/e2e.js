import 'cypress-mochawesome-reporter/register';
import './commands';

// Evita que falhas de scripts de terceiros/anúncios quebrem os testes
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});