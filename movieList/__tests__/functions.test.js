const {Builder, Capabilities} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const {addMovie, crossOffMovie, uncrossOffMovie, deleteMovie} = require('../functions/movieFunctions')

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('Add a movie', async () => {
    await addMovie(driver)
    await driver.sleep(3000)
})

test('Cross off a movie', async () => {
    await crossOffMovie(driver)
    await driver.sleep(3000)
})

test('Uncross off a movie', async () => {
    await uncrossOffMovie(driver)
    await driver.sleep(3000)
})

test('Delete a movie', async () => {
    await deleteMovie(driver)
    await driver.sleep(3000)
})