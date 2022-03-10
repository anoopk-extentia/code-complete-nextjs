import { FC } from "react";
import { useGetWidgetTemplateData } from "hooks/useGetWidgetTemplateData";

interface CCWidgetTemplate1Props {
  widgetId: number;
  subscriberId: number;
}
const CCWidgetTemplate1: FC<CCWidgetTemplate1Props> = ({
  widgetId,
  subscriberId,
}) => {
  const {
    isError,
    isLoading,
    data: { widget_title },
  } = useGetWidgetTemplateData({ subscriberId, widgetId });

  if (isLoading)
    return (
      <div className="max-w-2xl w-[90%] px-8 py-4 mx-auto bg-white rounded-lg shadow-md">
        Loading...
      </div>
    );
  if (isError) return <>Something went wrong !!</>;

  return (
    <div className="max-w-2xl w-[90%] px-8 py-4 mx-auto bg-white rounded-lg shadow-md cursor-pointer">
      {"Widget template " + widgetId}
    </div>
  );
};

export default CCWidgetTemplate1;
