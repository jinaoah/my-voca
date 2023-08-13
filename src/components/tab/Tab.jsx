import { useState } from "react";
import "./tab.css";
import Alltab from "./AllTab";
import DoneTab from "./DoneTab";
import BookmarkTab from "./BookmarkTab";

const tabComponents = {
    0: <Alltab />,
    1: <DoneTab />,
    2: <BookmarkTab />
}
const tabLabels = ["ALL", "DONE", "BOOKMARK"];

const Tab = () => {
    const [currentTab, setTab] = useState(0);

    const handleTabClick = (index) => {
        setTab(index);
    };
    
    return(
        <div>
            <ul className="tab-menu">
                {tabLabels.map((label, index) => (
                    <li
                        key={index}
                        id={currentTab === index ? "active" : ""}
                        className="tab-item"
                        onClick={() => handleTabClick(index)}>
                    {label}
                    </li>
                ))}
            </ul>
            <div>{tabComponents[currentTab]}</div>
        </div>
    );
}

export default Tab;
