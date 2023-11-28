const buildUrl = (opts: {
  url: string;
  queries?: Record<string, string | number | boolean>;
  actor?: "server" | "client";
  baseUrl?: string;
}) => {
  const url = new URL(
    `${opts.baseUrl || process.env.NEXT_PUBLIC_APP_HOST}${opts.url}`,
  );

  if (opts.queries && Object.keys(opts.queries).length > 0) {
    const keys = Object.keys(opts.queries);

    keys.forEach((key) => {
      if (opts.queries && opts.queries[key]) {
        url.searchParams.append(key, opts.queries[key].toString());
      }
    });
  }
  return url;
};

export default buildUrl;
