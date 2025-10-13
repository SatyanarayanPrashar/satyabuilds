import { ThemeProvider } from "next-themes";

const MarketingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="h-full scrollbar-hide [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {/* <Navbar /> */}
      <main className="h-full pt-[3rem]">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </main>
    </div>
   );
}
 
export default MarketingLayout;