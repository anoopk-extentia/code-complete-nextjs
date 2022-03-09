import { IWidgetList, IWidgetsList } from "utils/types";

export interface InitialStateCCWidget {
  isLoading: boolean;
  data: IWidgetsList;
  isError: boolean;
  errorMsg: string;
}

export interface InitialStateWidgetList {
  isLoading: boolean;
  data: IWidgetList;
  isError: boolean;
  errorMsg: string;
}

export interface AppStore {
  widgetList: InitialStateWidgetList;
  ccWidget1: InitialStateCCWidget;
  ccWidget2: InitialStateCCWidget;
}
