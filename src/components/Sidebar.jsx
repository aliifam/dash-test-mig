import SidebarItem from "./SidebarItem";

function Sidebar() {
    return(
        <aside className="fixed z-10 left-0 top-0 h-screen bg-white p-6 shadow-2xl">

            <SidebarItem icon="./icon/mail.svg" />

            <br /><br />

            <SidebarItem icon="./icon/mail.svg" />
            <SidebarItem icon="./icon/mail.svg" />
            <SidebarItem icon="./icon/mail.svg" />
            <SidebarItem icon="./icon/mail.svg" />
            <SidebarItem icon="./icon/mail.svg" />

            <br /><br />

            <SidebarItem icon="./icon/mail.svg" />
            <SidebarItem icon="./icon/mail.svg" />
            <SidebarItem icon="./icon/mail.svg" />
            <SidebarItem icon="./icon/mail.svg" />
            <SidebarItem icon="./icon/mail.svg" />

            <br /><br />


            <SidebarItem icon="./icon/mail.svg" />
            
        </aside>
    );
}

export default Sidebar;