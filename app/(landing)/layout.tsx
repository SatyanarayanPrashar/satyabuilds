import { Navbar } from "@/components/navbar";
import { Sides } from "@/components/sides";

const MarketingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="h-full">
      {/* <Navbar /> */}
      <main className="h-full pt-[3rem]">
        {children}
      </main>
    </div>
   );
}
 
export default MarketingLayout;