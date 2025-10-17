import React, { Suspense } from "react";
import MyApplicationStats from "./MyApplicationStats";
import MyApplicationList from "./MyApplicationList";
import useAuth from "../../hook/useAuth";
import { applicationPromise } from "../../api/applicationApi";

const MyApplication = () => {
  const { users } = useAuth();
  return (
    <div className="max-w-[1500px] mx-auto my-20">
      <MyApplicationStats />
      <Suspense fallback={"loading....."}>
        <MyApplicationList
          applicationPromise={applicationPromise(users.email)}
        />
      </Suspense>
    </div>
  );
};

export default MyApplication;
