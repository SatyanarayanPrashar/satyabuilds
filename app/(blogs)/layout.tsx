// import { CustomScrollbar } from "@/components/CustomScrollbar";

const BlogspageLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="h-">
      {/* <CustomScrollbar /> */}
      <main className="h-full pt-[3rem]">
        {children}
      </main>
    </div>
   );
}
 
export default BlogspageLayout;