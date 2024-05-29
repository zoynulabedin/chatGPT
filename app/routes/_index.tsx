import type { MetaFunction } from "@remix-run/node";
import Rightbar from "~/components/Rightbar";
import Sidebar from "~/components/Sidebar";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="w-full">
      <div className="flex w-full">
        <Sidebar />
        <Rightbar />
      </div>
    </div>
  );
}
