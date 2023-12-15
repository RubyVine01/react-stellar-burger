const baseURL = "https://norma.nomoreparties.space/api";
const testUrl = "http://localhost:3000/";

const constructorList = "[data-test=constructor-list]";
const constructorItem = "[data-test=constructor-item]";

const ingredientList = "[data-test=ingredient-list]";
const ingredient = "[data-test=ingredient-item]";
const modal = "[data-test=modal]";
const btnClose = "[data-test=button-close]";

const orderNumber = "[data-test=order-number]";

describe("Create order", () => {
  it("Create order", () => {
    cy.viewport(1920, 1080);
    cy.visit(testUrl);
    cy.get(constructorList).should("exist");
    cy.get(constructorItem).should("not.exist");
    cy.get(ingredientList).should("exist");
    cy.get(ingredient).should("exist");
    cy.get(ingredient).eq(0).trigger("dragstart");
    cy.get(constructorList).trigger("drop");
    cy.get(ingredient).eq(5).trigger("dragstart");
    cy.get(constructorList).trigger("drop");
    cy.get(ingredient).eq(10).trigger("dragstart");
    cy.get(constructorList).trigger("drop");
    cy.get("button").contains("Оформить заказ").click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/login");
    });
    cy.get("[type=email]").type("test12@gmail.com");
    cy.get("[type=password]").type("test12");
    cy.get("button").contains("Войти").click();
    cy.get("button").contains("Оформить заказ").click();
    cy.intercept(`${baseURL}/orders`).as("getOrder");
    cy.wait("@getOrder");
    cy.get(modal).should("exist");
    cy.get(orderNumber).should("exist");
    cy.get(btnClose).click();
    cy.get(modal).should("not.exist");
  });
});
