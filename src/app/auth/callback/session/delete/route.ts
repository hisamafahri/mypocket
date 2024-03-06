import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { DOMAINS } from "../../../../../lib/utils/constants";

// eslint-disable-next-line import/prefer-default-export
export const GET = async () => {
  cookies().delete({ name: "username", domain: `.${DOMAINS.PRIMARY}` });
  cookies().delete({ name: "access_token", domain: `.${DOMAINS.PRIMARY}` });

  redirect("/auth/sign-in");
};
