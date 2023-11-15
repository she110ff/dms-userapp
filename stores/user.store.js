import { makeAutoObservable } from 'mobx';

export const AUTH_STATE = {
  INIT: 'INIT',
  TERM: 'TERM',
  PIN: 'PIN',
  SECRET: 'SECRET',
  PHONE: 'PHONE',
  DONE: 'DONE',
};

class UserStore {
  state = '';
  name = '';
  email = '';
  phone = '';
  country = 'KR';
  enableBio = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuthState = (state) => {
    this.state = state;
  };
  setUserName = (name) => {
    this.name = name;
  };

  setEmail = (email) => {
    this.email = email;
  };

  setPhone = (phone) => {
    this.phone = phone;
  };

  setCountry = (country) => {
    this.country = country;
  };

  setEnableBio = (enableBio) => {
    this.enableBio = enableBio;
  };
}

export default UserStore;
