import { useEffect, useState } from "react";

import { subscribeUser } from "./observables/user";

export default function SubApp() {
  const [user, setUser] = useState({
    name: "subpage-value",
    email: "subpage-value"
  });

  useEffect(() => {
    return subscribeUser((userData) => {
      setUser({ ...userData });
    });
  }, []);

  return [
    <p key="name">通道获取 用户名: {user.name}</p>,
    <p key="character">通道获取 邮箱: {user.email}</p>
  ];
}
