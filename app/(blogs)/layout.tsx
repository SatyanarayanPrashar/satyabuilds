import { Navbar } from "@/components/navbar";

const BlogspageLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="h-full dark:bg-[#1F1F1F]">
      <div className="lg:block sm:hidden">
        <Navbar />
      </div>
      <main className="h-full pt-[9rem]">
        {children}
      </main>
    </div>
   );
}
 
export default BlogspageLayout;