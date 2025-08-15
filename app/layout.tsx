import { ReactNode } from "react";

export const metadata = {
  title: "Ecommerce Sanity Studio",
  description: "An ecommerce app made with Next.js and Sanity",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
