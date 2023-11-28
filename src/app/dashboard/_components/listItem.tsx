"use client";

import Image from "next/image";
import { getCookie } from "cookies-next";
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import WEB_ENV from "../../../lib/utils/helpers/env";
import { Skeleton } from "../../../components/ui/skeleton";
import { Icons } from "../../../components/ui/icons";
import { cn } from "../../../lib/utils/helpers";

const UserListItem = () => {
  const [username, setUsername] = useState<string>("");
  const url = new URL(WEB_ENV.NEXT_PUBLIC_APP_HOST);

  useEffect(() => {
    const usernameData = getCookie("username", { domain: url.hostname });
    if (usernameData) {
      setUsername(usernameData);
    } else {
      setUsername("unknown");
    }
  }, [username]);

  return (
    <div className="flex items-center justify-between space-x-4">
      <div className="flex items-center justify-start space-x-2 flex-1">
        {!username ? (
          <Skeleton className="rounded-full h-6 w-6" />
        ) : (
          <Image
            src={`https://source.boringavatars.com/marble/24/${username}?colors=333333,CCCCCC,496D89,B0B0B0,FFFFFF`}
            alt="avatar"
            width={24}
            height={24}
            className="border border-slate-200 rounded-full"
          />
        )}
        {!username ? (
          <Skeleton className="rounded-full h-6 w-full" />
        ) : (
          <p className="text-slate-600">{username}</p>
        )}
      </div>
      <Link href="/auth/callback/session/delete" className="group">
        <Icons.LogOut className="w-4 h-4 text-red-400 group-hover:text-red-500" />
      </Link>
    </div>
  );
};

type SectionListItemProps = {
  title: string;
  icon: ReactNode;
  href: string;
};

const SectionListItem = ({ title, icon, href }: SectionListItemProps) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex flex-row items-center justify-start py-1.5 px-2 rounded hover:bg-slate-100",
        active && "bg-slate-100 font-medium",
      )}
    >
      {icon}
      <p className="text-slate-700">{title}</p>
    </Link>
  );
};

export { UserListItem, SectionListItem };
