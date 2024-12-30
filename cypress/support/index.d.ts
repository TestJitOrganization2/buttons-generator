declare global {
  namespace Cypress {
    interface Chainable {
      visitLocalhost(): Chainable<void>;
    }
  }
}

export {};
