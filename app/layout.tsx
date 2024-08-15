import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import PageHeader from "@/components/PageHeader";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="">
        <body>
          <PageHeader />

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
