import { Navbar } from "@/components/navbar";

const ResourcespageLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="h-">
      <Navbar />
      <main className="h-full pt-[9rem]">
        {children}
      </main>
    </div>
   );
}
 
export default ResourcespageLayout;