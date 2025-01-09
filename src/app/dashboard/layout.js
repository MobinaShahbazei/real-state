import DashboardSidebar from "@/layout/DashboardSidebar";

function DashboardLayout({ children }) {
  return (
    <DashboardSidebar>
      {children}
    </DashboardSidebar>
  );
}

export default DashboardLayout;
