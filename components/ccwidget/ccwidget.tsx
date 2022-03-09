import { FC, useEffect } from "react";
import { useActions } from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";

interface CCwidgetProps {
  widgetId: number;
  subscriberId: number;
}
const CCwidget: FC<CCwidgetProps> = ({ widgetId, subscriberId }) => {
  const { getWidget } = useActions();
  useEffect(() => {
    getWidget({ subscriberId, widgetId });
  }, []);

  const {
    isError,
    isLoading,
    data: { widget_title },
  } = useTypedSelector(({ ccWidget1 }) => ccWidget1);

  if (isLoading)
    return (
      <div className="max-w-2xl w-[90%] px-8 py-4 mx-auto bg-white rounded-lg shadow-md">
        Loading...
      </div>
    );
  if (isError) return <>Something went wrong !!</>;

  return (
    <div className="max-w-2xl w-[90%] px-8 py-4 mx-auto bg-white rounded-lg shadow-md">
      {widget_title}
    </div>
  );
};

export default CCwidget;
