// import { CustomScrollbar } from "@/components/CustomScrollbar";

import { CosmicBackground } from "@/components/CosmicBG";

const BlogspageLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="h-">
      <CosmicBackground nebulous={false}/>
      <main className="h-full pt-[3rem]">
        {children}
      </main>
    </div>
   );
}
 
export default BlogspageLayout;