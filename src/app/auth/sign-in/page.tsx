/* Design inspiration: https://bmrks.com */
import Link from "next/link";
import SignInForm from "./_components/signInForm";
import { cn } from "../../../lib/utils/helpers";
import { buttonVariants } from "../../../components/ui/button";
import { Separator } from "../../../components/ui/separator";
import pkg from "../../../../package.json";

const SignIn = () => (
  <main>
    <div className="w-1/2 xl:w-1/3 mx-auto px-4 h-screen flex flex-col items-center justify-center space-y-8">
      <div className="flex items-center justify-between w-full">
        <Link href="/auth/sign-in" className="text-3xl">
          🔖
        </Link>
        <SignInForm />
      </div>
      <div className="w-full">
        <h2 className="text-lg font-medium">MyPocket</h2>
        <p className="text-slate-600">
          <Link
            href="https://getpocket.com"
            target="_blank"
            className={cn(
              buttonVariants({ variant: "link" }),
              "p-0 m-0 text-base font-normal text-slate-600 underline",
            )}
          >
            Pocket
          </Link>
          , but better! A better home for your internet discoveries.
        </p>
      </div>
      <div className="w-full">
        <h2 className="text-lg font-medium">The (super-quick) story</h2>
        <p className="text-slate-600">
          Ah, Pocket web app. So slow, so many issues, so many things that I
          don&apos;t like. One rainy day, I decided to get up and built this for
          personal usage, designed with personal preferences.
        </p>
      </div>
      <div className="w-full">
        <h2 className="text-lg font-medium">Join & contribute</h2>
        <p className="text-slate-600">
          The source code of this app is{" "}
          <Link
            href="https://github.com/hisamafahri/mypocket"
            target="_blank"
            className={cn(
              buttonVariants({ variant: "link" }),
              "p-0 m-0 text-base font-normal text-slate-600 underline",
            )}
          >
            open-source
          </Link>{" "}
          so you can adjust it to your heart&apos;s content.
        </p>
      </div>
      <Separator />
      <div className="flex items-center justify-between w-full text-slate-500">
        <p className="italic">v{pkg.version}</p>
        <p>
          Crafted by{" "}
          <Link
            href="https://hisam.dev"
            target="_blank"
            className={cn(
              buttonVariants({ variant: "link" }),
              "p-0 m-0 text-base font-normal text-slate-600 underline",
            )}
          >
            Hisam
          </Link>
        </p>
      </div>
    </div>
  </main>
);

export default SignIn;
