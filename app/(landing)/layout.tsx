import { Navbar } from "@/components/navbar";
import { NavbarMobile } from "@/components/navbarMobile";
import { Sides } from "@/components/sides";

const MarketingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="h-full dark:bg-[#1F1F1F]">
      <Navbar />
      <main className="h-full pt-[9rem]">
        {children}
      </main>
    </div>
   );
}
 
export default MarketingLayout;