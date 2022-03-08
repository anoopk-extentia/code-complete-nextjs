import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { IWidgetsData } from "utils/types";

const Home: NextPage = () => {
  const [_, setWidgetList] = useState([]);
  const [widgetsData, setWidgetsData] = useState<IWidgetsData[]>([]);
  const [isError, setIsError] = useState(false);

  // useEffect(() => {
  //   const apiCall = async () => {
  //     try {
  //       const {
  //         data: { data },
  //       } = await axiosInstance.get(`/subscribers/1/widgets`);
  //       if (data) {
  //         const result = await Promise.all(
  //           data.map(async ({ widget_id }: { [x: string]: number }) => {
  //             const { data } = await axiosInstance.get(
  //               `/subscribers/1/widget/${widget_id}`
  //             );
  //             return data;
  //           })
  //         );
  //         setWidgetsData(result);
  //       }
  //       setWidgetList(data);
  //     } catch (err) {
  //       setIsError(true);
  //     }
  //   };
  //   apiCall();
  // }, []);

  // if (isError) return <>Something went wrong !!</>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-2 gap-6">
        {Array(6)
          .fill("-")
          .map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
      </div>
    </div>
  );
};

export default Home;
