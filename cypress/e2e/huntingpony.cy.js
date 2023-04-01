describe('Автотесты для HuntingPony', function () {
    it('Оформление заказа', function () {
        cy.visit('https://huntingpony.com/');
        cy.wait(5000);
        cy.get('[data-index="1"] > .header__collections-controls > .header__collections-link').click();
        cy.get('.page-headding');
        cy.get('[data-product-id="338933592"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
        cy.wait(5000);
        cy.get('.add-cart-counter__btn').click();
        cy.get('[data-add-cart-counter-plus=""]').click();
        cy.get('.add-cart-counter__detail-text').contains('В корзине 2 шт');
        cy.get('.header__cart').click();
        cy.get('.layout__content > .heading').contains('Корзина');
        cy.get('.cart-controls > .button').click();
        cy.contains('Оформление заказа');
    })
})