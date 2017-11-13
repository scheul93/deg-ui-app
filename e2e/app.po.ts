import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getGradientImg() {
    return element(by.css('.img-gradient'));
  }

  getLogoImg() {
    return element(by.css('.img-logo'));
  }

  getHospitalImg(){
    return element(by.css('.img-hospital'));
  }

  getSearchBox(){
    return element(by.css('.div-zipcode-search'));
  }
  
  getSearchInput(){
    return element(by.css('.input-search'));
  }

  getSearchButton(){
    return element(by.css('.btn-search'));
  }

  getTextResults(){
    return element(by.css('.text-results'));
  }

  getDoctorsList(){
    return element.all(by.css('.doctor-card'));
  }
}
