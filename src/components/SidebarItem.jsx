import classNames from "classnames";

function SidebarItem({icon, className}){
    return(
        <div className={classNames("mb-4", className)}>
            <img className="w-5 fill-white" src={icon} alt="" />
        </div>
        
    )
}

export default SidebarItem;