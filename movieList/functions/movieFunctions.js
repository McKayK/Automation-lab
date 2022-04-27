const { By } = require("selenium-webdriver");

const addMovie = async (driver) => {
  await driver
    .findElement(By.xpath("//input"))
    .sendKeys(`Bill and Ted's Excellent Adventure`);

  await driver.findElement(By.xpath("//button")).click();

  const movie = await driver.findElement(By.xpath("//li"));

  const displayed = movie.isDisplayed();

  expect(displayed).toBeTruthy();
};

const crossOffMovie = async (driver) => {
  await driver.findElement(By.xpath("//span")).click();

  const crossed = await driver.findElement(By.xpath('//button[text()="x"]'));

  expect(crossed).toBeTruthy();
};

const uncrossOffMovie = async (driver) => {
  await driver.findElement(By.xpath("//span")).click();

  const uncrossed = await driver.findElement(By.xpath("//span"));

  expect(uncrossed).toBeTruthy();
};

const deleteMovie = async (driver) => {
  await driver.findElement(By.xpath("(//button)[2]")).click();
  const movieExists = await driver
    .findElement(By.xpath("//button[@id=`Bill and Ted's Excellent Adventure`]"))
    .then(
      () => true,
      () => false
    );
  expect(!movieExists).toBeTruthy();
};

module.exports = {
  addMovie,
  crossOffMovie,
  uncrossOffMovie,
  deleteMovie,
};
