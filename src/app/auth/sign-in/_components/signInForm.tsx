"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { GetRequestTokenBody } from "../../../../lib/schemas/api/authorization";
import { postGetRequestToken } from "../../../../lib/services/api/authorization/client";
import WEB_ENV from "../../../../lib/utils/helpers/env";

const SignInForm = () => {
  const router = useRouter();
  const postGetRequestTokenMutation = useMutation({
    mutationKey: ["postGetRequestTokenMutation"],
    mutationFn: async (opts: { body: GetRequestTokenBody }) =>
      postGetRequestToken({ body: opts.body }),
    onSuccess: (data) => {
      router.push(
        `https://getpocket.com/auth/authorize?request_token=${
          data.code
        }&redirect_uri=${`${WEB_ENV.NEXT_PUBLIC_APP_HOST}/auth/callback?request_token=${data.code}`}`,
      );
    },
  });

  return (
    <div>
      <button
        type="button"
        onClick={() =>
          postGetRequestTokenMutation.mutate({
            body: {
              consumer_key: WEB_ENV.NEXT_PUBLIC_CONSUMER_KEY,
              redirect_uri: `${WEB_ENV.NEXT_PUBLIC_APP_HOST}/auth/callback`,
            },
          })
        }
      >
        Sign In
      </button>
    </div>
  );
};

export default SignInForm;
