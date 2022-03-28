/// <reference types="Cypress" />


describe('Central de Atendimento ao Cliente TAT', function(){
    beforeEach(function() {
        cy.visit('./src/index.html')      
        })

    it('verifica o título da aplicação',function(){
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
    })
        
    it('preenche os campos obrigatórios e envia o formulário', function(){
        cy.get('#firstName').type('Lorena')
        cy.get('#lastName').type('Lopes')
        cy.get('#email').type('lorenalpsantos@gmail.com')
        cy.get('#open-text-area').type('Olá! Gostaria de mais informações sobre o curso.')
        cy.get('.button').click()
        cy.get('body > span.success').should('be.visible')

   })
})  
