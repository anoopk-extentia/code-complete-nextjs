import { CCwidgetTemplate1, CCwidgetTemplate2 } from "components";

export const getWidgets = (widgetId: number, subscriberId: number) => {
  switch (widgetId) {
    case 1:
      return (
        <CCwidgetTemplate1 widgetId={widgetId} subscriberId={subscriberId} />
      );
    case 2:
      return (
        <CCwidgetTemplate2 widgetId={widgetId} subscriberId={subscriberId} />
      );
    default:
      return;
  }
};
