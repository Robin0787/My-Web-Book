import { Outlet } from "react-router-dom";
import SideMenu from "./components/shared/side-menu/SideMenu";
import { cn } from "./lib/utils";

function App() {
  return (
    <div
      className={cn("h-screen overflow-hidden bg-[#262626] home text-white")}
    >
      <section
        className={cn(
          "h-full w-full max-w-[2600px] mx-auto relative flex justify-between gap-5 p-2 lg:p-5"
        )}
      >
        <aside
          className={cn(
            "hidden lg:block lg:w-[25%] xl:w-[20%] 2xl:w-[17%] rounded-lg shadow-[1px_1px_10px_2px] shadow-white/10 border border-gray-700"
          )}
        >
          <SideMenu />
        </aside>
        <aside
          className={cn(
            "w-full lg:w-[75%] xl:w-[80%] 2xl:w-[83%] rounded-lg shadow-[1px_1px_10px_2px] shadow-white/10 border border-gray-700"
          )}
        >
          <div className={cn("w-full h-full flex justify-center items-center")}>
            <Outlet />
          </div>
        </aside>
      </section>
    </div>
  );
}

export default App;
