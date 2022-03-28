/// <reference types="Cypress" />


describe('Central de Atendimento ao Cliente TAT', function(){
    beforeEach(() => {
        it('verifica o título da aplicação',function(){
        cy.visit('./src/index.html')
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
        
        })
    })
    it('preenche os campos obrigatórios e envia o formulário', function(){


   })
})  
