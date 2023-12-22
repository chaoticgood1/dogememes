import Header from '../tsx/header.tsx'
import SideBar from '../tsx/sidebar.tsx';
import { Outlet } from "react-router-dom";


export default function Layout() {
  return (
    <>
      <Header />
      <SideBar />
      <Outlet />
    </>
  )
}