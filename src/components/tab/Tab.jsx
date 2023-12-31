import { useState } from "react";
import React from "react";
import "./tab.css";
import Alltab from "../../pages/homepage/AllTab";
import DoneTab from "../../pages/homepage/DoneTab";
import BookmarkTab from "../../pages/homepage/BookmarkTab";

const tabComponents = {
    0: <Alltab />,
    1: <DoneTab />,
    2: <BookmarkTab />
}
const tabLabels = ["ALL", "DONE", "BOOKMARK"];

const Tab = ({navigate}) => {
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
            {/* <div>{tabComponents[currentTab](navigate)}</div> */}
            {tabComponents[currentTab] && React.cloneElement(tabComponents[currentTab], { navigate })}
        </div>
    );
}

export default Tab;
