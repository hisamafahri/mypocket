const WEB_ENV = {
  NEXT_PUBLIC_POCKET_API_BASE_URL:
    process.env.NEXT_PUBLIC_API_BASE_URL || "https://getpocket.com",
  NEXT_PUBLIC_CONSUMER_KEY: process.env.NEXT_PUBLIC_CONSUMER_KEY || "",
  NEXT_PUBLIC_APP_HOST:
    process.env.NEXT_PUBLIC_APP_HOST || "http://localhost:3000",
};

export default WEB_ENV;
