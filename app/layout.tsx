import "./globals.css";
import FluidBackground from "@/components/FluidBackground";
import MobileTopbar from "@/components/MobileTopbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <FluidBackground />
        <div className="dark-overlay" />
        <MobileTopbar />
        {children}
      </body>
    </html>
  );
}