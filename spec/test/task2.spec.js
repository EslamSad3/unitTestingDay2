var User = require("../../task2");

describe('Here Testing User', function() {
  let user;

  beforeEach(function() {
    user = new User('Eslam', 787898);
  });

  describe('Test The Function add items To Cart', function() {
    it('should add a product to the cart array', function() {
      const product = {
        name: 'Milk',
        price: 100,
      };
      user.addToCart(product);
      expect(user.cart).toContain(product);
    });
  });

  describe('Test The Function return Total Cart Price', function() {
    it('should return the cart array total price', function() {
      const productOne = {
        name: 'bread',
        price: 100,
      };
      const productTwo = {
        name: 'cheese',
        price: 200,
      };
      user.addToCart(productOne);
      user.addToCart(productTwo);
      expect(user.calculateTotalCartPrice()).toBe(300);
    });
  });

  describe('testing checkout', function() {
    let paymentModel;

    beforeEach(function() {
      paymentModel = {
        goToVerifyPage: jasmine.createSpy('goToVerifyPage'),
        returnBack: jasmine.createSpy('returnBack'),
        isVerify: jasmine.createSpy('isVerify'),
      };
    });

    it('should call paymentModel methods', function() {
      user.verificationPayment(paymentModel);
      expect(paymentModel.goToVerifyPage).toHaveBeenCalled();
      expect(paymentModel.returnBack).toHaveBeenCalled();
    });

    it('should return true if payment is verified', function() {
      paymentModel.isVerify.and.returnValue(true);
    expect(user.verificationPayment(paymentModel)).toBeTrue();
    });

    it('should return false if payment is not verified', function() {
      paymentModel.isVerify.and.returnValue(false);
        expect(user.verificationPayment(paymentModel)).toBeFalse();
    });
  });
});
