export interface IWidgetList {
  success: number;
  data: WidgetDataEntity[];
}
export interface WidgetDataEntity {
  widget_id: number;
  subscriber_id: number;
}

export interface IWidgetsList {
  success: number;
  subscriber_id: number;
  widget_id: number;
  widget_title: string;
  widget_type: string;
  widget_query: string;
  columns: number;
  data: DataEntity[];
}

export interface DataEntity {
  clinician_id: number;
  clinician_last_name: string;
  clinician_first_name: string;
  clician_role: string;
  clinician_institue: string;
  clinician_city: string;
  clinician_state: string;
  clinician_country: string;
  clinician_image: string;
}
