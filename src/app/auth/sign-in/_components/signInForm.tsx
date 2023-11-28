/* eslint-disable prettier/prettier */

"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { GetRequestTokenBody } from "../../../../lib/schemas/api/authorization";
import { postGetRequestToken } from "../../../../lib/services/api/authorization/client";
import { Button } from "../../../../components/ui/button";
import { Icons } from "../../../../components/ui/icons";

const SignInForm = () => {
  const router = useRouter();
  const postGetRequestTokenMutation = useMutation({
    mutationKey: ["postGetRequestTokenMutation"],
    mutationFn: async (opts: { body: GetRequestTokenBody }) =>
      postGetRequestToken({ body: opts.body }),
    onSuccess: (data) => {
      const endpoint = `${process.env.NEXT_PUBLIC_POCKET_API_BASE_URL
        }/auth/authorize?request_token=${data.code
        }&redirect_uri=${`${process.env.NEXT_PUBLIC_APP_HOST}/auth/callback?request_token=${data.code}`}`;
      router.push(endpoint);
    },
  });

  return (
    <div>
      <Button
        variant="secondary"
        disabled={postGetRequestTokenMutation.isPending ||
          postGetRequestTokenMutation.isSuccess}
        onClick={() =>
          postGetRequestTokenMutation.mutate({
            body: {
              consumer_key: process.env.NEXT_PUBLIC_CONSUMER_KEY || "",
              redirect_uri: `${process.env.NEXT_PUBLIC_APP_HOST}/auth/callback`,
            },
          })
        }
      >
        Sign In
        {(postGetRequestTokenMutation.isPending ||
          postGetRequestTokenMutation.isSuccess) && (
            <Icons.Spinner className="ml-2 h-4 w-4 animate-spin" />
          )}
      </Button>
    </div>
  );
};

export default SignInForm;
