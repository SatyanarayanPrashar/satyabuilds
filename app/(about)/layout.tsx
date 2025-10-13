import { Navbar } from "@/components/navbar";

const AboutpageLayout = ({
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
 
export default AboutpageLayout;