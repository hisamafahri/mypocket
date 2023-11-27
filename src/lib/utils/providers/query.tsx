"use client";

import {
  QueryClientProvider,
  QueryClient,
  QueryCache,
} from "@tanstack/react-query";
import { PropsWithChildren, useState } from "react";
import logger from "../helpers/logger";

const QueryProvider = ({ children }: PropsWithChildren) => {
  const [client] = useState(
    new QueryClient({
      defaultOptions: { queries: { staleTime: 5000 } },
      queryCache: new QueryCache({
        onError: (error: unknown) => {
          logger(error);
        },
      }),
    }),
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default QueryProvider;
