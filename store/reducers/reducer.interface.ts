export interface InitialState {
  isLoading: boolean;
  data: {};
  error: string;
}

export interface AppStore {
  data: InitialState;
}
