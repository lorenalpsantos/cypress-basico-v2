/// <reference types="Cypress" />


describe('Central de Atendimento ao Cliente TAT', function(){
    beforeEach(() => {
        it('verifica o título da aplicação',function(){
        cy.visit('./src/index.html')
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
        
        })
    })
    it('preenche os campos obrigatórios e envia o formulário', function(){
        cy.get('//*[@id="firstName"]').type('Lorena')
        cy.get('//*[@id="lastName"]').type('Lopes')
        cy.get('//*[@id="email"]').type('lorenalpsantos@gmail.com')
        cy.get('//*[@id="open-text-area"]').type('Olá! Gostaria de mais informações sobre o curso.')
        cy.get('.button').click()
        cy.get('.sucess').should('be.visible')

   })
})  
