describe('Тестирование формы авторизации', function () {
    it('Правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');
    })


    it('Логика восстановления пароля', function () {
        cy.reload();
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.contains('Восстановите пароль');
        cy.get('#mailForgot').type('maxdar2708@gmail.com');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon');
    })

    it('Правильный логин, НЕправильный пароль', function () {
        cy.reload();
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('aeaeaeb');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })

    it('НЕправильный логин, правильный пароль', function () {
        cy.reload();
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@olnikov.ru');
        cy.get('#pass').type('aeaeaeb');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })

    it('Логин без @, правильный пароль', function () {
        cy.reload();
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon');
   })

    it('Приведение к строчным буквам в логине', function () {
        cy.reload();
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');
    })
})