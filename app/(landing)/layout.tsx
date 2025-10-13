const MarketingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="h-full scrollbar-hide [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <main className="h-full pt-[3rem]">
          {children}
      </main>
    </div>
   );
}
 
export default MarketingLayout;