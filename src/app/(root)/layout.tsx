import Header from "../../components/header";
import Home from "../../components/home";
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full">
      {/* <div className="flex min-h-screen flex-col items-center justify-between"> */}
      <Header />
      <Home />
      <main className="md:pl-20 pt-16 h-full">{children}</main>
    </div>
  );
};
export default RootLayout;
