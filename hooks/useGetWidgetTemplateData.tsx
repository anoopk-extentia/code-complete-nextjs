import { useState, useEffect, FC } from "react";
import { axiosInstance } from "services/axiosInstance";

interface useGetWidgetTemplateDataProps {
  widgetId: number;
  subscriberId: number;
}
export const useGetWidgetTemplateData = ({
  widgetId,
  subscriberId,
}: useGetWidgetTemplateDataProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>([]);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    (async ({ widgetId, subscriberId }) => {
      try {
        setIsLoading(true);
        const { data } = await axiosInstance.get(
          `/subscribers/${subscriberId}/widget/${widgetId}`
        );
        if (data) {
          setData(data);
          setIsLoading(false);
        }
      } catch (error) {
        if (error instanceof Error)
          setErrorMsg(error?.message || "SOME THING WENT WRONG");
        setIsError(true);
        setIsLoading(false);
      }
    })({ widgetId, subscriberId });
  }, []);

  return { isLoading, isError, errorMsg, data } as const;
};
