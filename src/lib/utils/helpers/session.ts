import { cookies } from "next/headers";

// eslint-disable-next-line import/prefer-default-export
export const getSession = () => {
  const cookieStore = cookies();
  const username = cookieStore.get("username")?.value;
  const accessToken = cookieStore.get("access_token")?.value;

  return { accessToken, username };
};
