interface Navigation {
  addListener: Function;
  canGoBack: Function;
  dispatch: Function;
  getId: Function;
  getParent: Function;
  getState: Function;
  goBack: Function;
  isFocused: Function;
  navigate: Function;
  pop: Function;
  push: Function;
  popToTop: Function;
  removeListener: Function;
  replace: Function;
  reset: Function;
  setOptions: Function;
  setParams: Function;
}

export interface IProps {
  navigation: Navigation;
}
