import { Suspense } from "react";
import RegisterPageClient from "./RegisterPageClient";

export const metadata={
  title: "Register | Revolution EV Malaysia 2025",
  description: "Discover why industry leaders, investors, and policymakers are attending Revolution EV 2025. Explore key benefits, networking opportunities, and thought leadership sessions.",
}

export default function RegisterPage() {
  return (
    <Suspense>
      <RegisterPageClient />
    </Suspense>
  );
}
