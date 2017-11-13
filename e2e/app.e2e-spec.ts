import { AppPage } from './app.po';

describe('deg-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display gradient bar', () => {
    page.navigateTo();
    expect(page.getGradientImg()).toBeTruthy();
  });

  it('should display logo', () => {
    expect(page.getLogoImg()).toBeTruthy();
  });

  it('should display hospital image', () => {
    expect(page.getHospitalImg()).toBeTruthy();
  });

  describe('search box', () => {
    it('should display search box div', () => {
      expect(page.getSearchBox()).toBeTruthy();
    });
    it('should display search input', () => {
      expect(page.getSearchInput()).toBeTruthy();
    });
    it('should display search button', () => {
      expect(page.getSearchButton()).toBeTruthy();
    });
  });

  describe('zipcode search', () => {
    it('should show total results number', () => {
      expect(page.getTextResults().getText()).
        toEqual('Total Results: 0');

      page.getSearchInput().sendKeys(12345);
      page.getSearchButton().click();
      expect(page.getTextResults().getText()).
        toEqual('Total Results: 7');
    });

    it('display results as list', () => {
      expect(page.getDoctorsList().count()).toEqual(7);
    });
  })

});
