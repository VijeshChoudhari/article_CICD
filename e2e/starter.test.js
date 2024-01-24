describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({newInstance: true});
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.text('welcome'))).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await element(by.text('CODEB')).tap();
  });
});

describe('Login flow', () => {
  it('should login successfully', async () => {
    await device.launchApp();
    // getting the reference of an element by ID and expecting to be visible
    await expect(element(by.id('username'))).toBeVisible();

    // Getting the reference and typing
    await element(by.id('username')).typeText('codeb@gmail.com');
    await element(by.id('password')).typeText('123456');

    // Getting the reference and executing a tap/press
    await element(by.text('Login')).tap();

    await expect(element(by.text('Welcome'))).toBeVisible();
    await expect(element(by.id('email'))).toNotExist();
  });
});
