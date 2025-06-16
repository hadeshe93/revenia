import { ReactNode } from "react";
import { cn } from "@/lib/style";

export type DrawerProps = {
  className?: string;
  trigger: ReactNode;
  content: ReactNode;
}

export default function Drawer({ className, trigger, content }: DrawerProps) {
  return (
    <div className={cn("drawer", className)}>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="cursor-pointer">
          {trigger}
        </label>
      </div>
      <div className="drawer-side z-50 h-full">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        {content}
        {/* <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul> */}
      </div>
    </div>
  );
}
