import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | NextPro",
  description: "Create a blog article for the world...",
  category: "Web Development",
  authors: [{ name: "Abdul-Razak" }],
};

export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
