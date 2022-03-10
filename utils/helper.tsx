import { CCwidgetTemplate1 } from "components";

export const getWidgets = (widgetTemplateId: number, subscriberId: number) => {
  switch (widgetTemplateId) {
    case 1:
      return (
        <CCwidgetTemplate1
          widgetId={widgetTemplateId}
          subscriberId={subscriberId}
          title="Recommended For You"
        />
      );
    case 2:
      return (
        <CCwidgetTemplate1
          widgetId={widgetTemplateId}
          subscriberId={subscriberId}
          title="Recently Viewed"
        />
      );
    default:
      return;
  }
};
