import { FC } from "react";
import { useGetWidgetTemplateData } from "hooks/useGetWidgetTemplateData";
import UserCard from "components/user-info-card/user-info-card.component";

interface CCWidgetTemplate1Props {
  widgetId: number;
  subscriberId: number;
}
const CCWidgetTemplate1: FC<CCWidgetTemplate1Props> = ({
  widgetId,
  subscriberId,
}) => {
  const { isError, isLoading, data } = useGetWidgetTemplateData({
    subscriberId,
    widgetId,
  });

  if (isLoading)
    return (
      <div className="max-w-2xl w-[90%] px-8 py-4 mx-auto bg-white rounded-lg shadow-md">
        Loading...
      </div>
    );
  if (isError) return <>Something went wrong !!</>;

  return (
    <>
      <h1 className="m-1 text-lg font-bold">Recommended For You</h1>
      <div className="grid grid-cols-2 gap-2">
        {data?.data.slice(0, 2).map((user) => (
          <UserCard
            key={user.clinician_id}
            fName={user.clinician_first_name}
            lName={user.clinician_last_name}
            role={user.clician_role}
            institute={user.clinician_institue}
            imgSrc={user.clinician_image}
          />
        ))}
      </div>
    </>
  );
};

export default CCWidgetTemplate1;
