import { NavLink } from "react-router-dom";
import { navigation } from "../../config/navigation";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        {
          navigation.map((group) => (
              <div key={group.group}>
                <section>
                  <h3>{group.group}</h3>
                </section>
                  {group.items.map((item) => (
                    <NavLink
                      key={item.path} 
                      to={item.path}
                      className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                    >
                        {item.title}
                    </NavLink>
                  ))}
              </div>
          ))
        }
      </nav>
    </aside>
  );
}

export default Sidebar;