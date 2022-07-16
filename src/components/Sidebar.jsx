import SidebarItem from "./SidebarItem";

function Sidebar() {
    return(
        <aside className="fixed z-10 left-0 top-0 h-screen bg-white p-6 shadow-2xl">

            <SidebarItem icon="./icon/mail.svg" />

            <br /><br />

            <SidebarItem icon="./icon/home.svg" />
            <SidebarItem icon="./icon/ticket.svg" />
            <SidebarItem icon="./icon/clipcheck.svg" />
            <SidebarItem icon="./icon/archive.svg"  />
            <div className="">
                <SidebarItem icon="./icon/office.svg" />
            </div>
            

            <br /><br />

            <SidebarItem icon="./icon/users.svg" />
            <SidebarItem icon="./icon/stack.svg" />
            <SidebarItem icon="./icon/cube.svg" />
            <SidebarItem icon="./icon/cmd.svg" />
            <SidebarItem icon="./icon/search.svg" />

            <br /><br />


            <SidebarItem icon="./icon/calcu.svg" />
            
        </aside>
    );
}

export default Sidebar;