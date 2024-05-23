import { NextUIProvider } from "@nextui-org/react";
import NavigationBar from "@/components/layouts/navigatonBar";

export function Providers({ children }) {
  return (
    <NextUIProvider>
      <NavigationBar />
      <main className="xl:w-[1440px] mx-auto">{children}</main>
    </NextUIProvider>
  );
}
