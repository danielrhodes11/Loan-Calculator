
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 10000, years: 8, rate: 5.8};
  expect(calculateMonthlyPayment(values)).toEqual('130.44')
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 100000, years: 8, rate: 5.8};
  expect(calculateMonthlyPayment(values)).toEqual('1304.43')
});

it("should return with high interest rate", function(){
  const values = {amount: 120000, years: 4, rate: 80.7};
  expect(calculateMonthlyPayment(values)).toEqual('8441.22')
})
