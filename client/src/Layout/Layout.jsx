import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import AppSidebar from "@/components/AppSidebar";
import { Outlet } from "react-router-dom";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";


const Layout = () => {
  return (
    //topbar
    //sidebar
    <SidebarProvider>
        <Topbar />
        <AppSidebar />
      <main>
        <Outlet />
        <Footer />
      </main>
    </SidebarProvider>
  );
};

export default Layout;
