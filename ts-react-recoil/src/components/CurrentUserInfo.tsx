import axios from "axios";
import React from "react";
import { atom, selector, selectorFamily, useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import ErrorBoundary from "./ErrorBoundary";

const currentUserIDState = atom({
  key: "CurrentUserID",
  default: "1",
});

const tableOfUsers = [{ name: "Juyoung" }, { name: "Jay" }];

// const currentUserNameState = selector({
//   key: "CurrentUserName",
//   get: ({ get }) => {
//     return tableOfUsers[get(currentUserIDState)].name;
//   },
// });

const currentUserNameQuery = selector({
  key: "CurrentUserName",
  get: async ({ get }) => {
    const response = await axios.get(`/api/user-name?id=${get(currentUserIDState)}`);
    return response.data;
  },
});

const currentUserNameQueryByParam = selectorFamily({
  key: "CurrentUserNameQueryByParam",
  get: (id: string) => async () => {
    const response = await axios.get(`/api/user-name?id=${id}`);
    return response.data;
  },
});

function CurrentUser() {
  const userName = useRecoilValue(currentUserNameQuery);
  const userNameLoadable = useRecoilValueLoadable(currentUserNameQueryByParam("1"));
  const [userId, setUserId] = useRecoilState(currentUserIDState);
  if (userNameLoadable.state === "hasError") {
    return <div>loading...</div>;
  }

  return (
    <div>
      <div>{userName?.name}</div>
      <div>{userNameLoadable.contents.name}</div>
      <input
        className=" border"
        type="text"
        value={userId}
        onChange={(e) => {
          setUserId(e.target.value);
        }}
      />
    </div>
  );
}

export default function CurrentUserInfo() {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<div>loading...</div>}>
        <CurrentUser />
      </React.Suspense>
    </ErrorBoundary>
  );
}
