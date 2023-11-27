import { cookies } from "next/headers";

// eslint-disable-next-line import/prefer-default-export
export const getSession = async () => {
  const cookieStore = cookies();
  const session = cookieStore.get("token")?.value;
  const id = cookieStore.get("id")?.value;
  const organizationId = cookieStore.get("organization-id")?.value;
  const email = cookieStore.get("email")?.value;
  const firstName = cookieStore.get("first-name")?.value;
  const lastName = cookieStore.get("last-name")?.value;

  return { session, id, user: { email, firstName, lastName, organizationId } };
};
