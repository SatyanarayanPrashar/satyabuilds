import { Navbar } from "@/components/navbar";

const AboutLayout = ({
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
 
export default AboutLayout;