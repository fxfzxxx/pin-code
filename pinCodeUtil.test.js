const { generatePinCodeBatch } = require("./pinCodeUtil")
const pinCodeArray = generatePinCodeBatch()
test("Two consecutive digits should not be the same.", () => {
   pinCodeArray.forEach((element) => {
     expect(element).not.toMatch(
       /([0-9])\{1,}/
     )
   })
 })
test("Three consecutive digits should not be incremental.", () => {
  pinCodeArray.forEach((element) => {
    expect(element).not.toMatch(
      /0(?=12)|1(?=23)|2(?=34)|3(?=45)|4(?=56)|5(?=67)|6(?=78)|7(?=89)/
    )
  })
})
test("There are 1000 pin codes generated.", () => {
  expect(pinCodeArray.length).toBe(1000)
})
