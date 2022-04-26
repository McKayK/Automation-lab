const {By} = require('selenium-webdriver')

const addMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys(`Bill and Ted's Excellent Adventure`)

    await driver.findElement(By.xpath('//button')).click()

    const movie = await driver.findElement(By.xpath('//li'))

    const displayed = movie.isDisplayed()

    expect(displayed).toBeTruthy()
}

const crossOffMovie = async (driver) => {
    await driver.findElement(By.xpath('//span')).click()
}

const uncrossOffMovie = async (driver) => {
    await driver.findElement(By.xpath('//*[@class="checked"]')).click()
}

const deleteMovie = async (driver) => {
    await driver.findElement(By.xpath('(//button)[2]')).click()
}

module.exports = {
    addMovie,
    crossOffMovie,
    uncrossOffMovie,
    deleteMovie
}