import React from 'react';
import { Link } from 'react-router-dom';
import './KitchenTipPage.css';

const ViewAllKitchenTips = () => {
    const tips = [
        { title: "Instant Pot", path: "/kitchen-tips/instant-pot" },
        { title: "Air Fryer", path: "/kitchen-tips/air-fryer" },
        { title: "Slow Cooker", path: "/kitchen-tips/slow-cooker" },
        { title: "BBQ & Grilling", path: "/kitchen-tips/grilling" },
        { title: "Cooking Equipment", path: "/kitchen-tips/equipment" },
        { title: "Cooking Basics", path: "/kitchen-tips/cooking-basics" },
    ];

    return (
        <div className="view-all-container">
            <h1>All Kitchen Tips</h1>
            <div className="submenu">
                <ul>
                    {tips.map((tip, index) => (
                        <li key={index}>
                            <Link to={tip.path}>{tip.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ViewAllKitchenTips; 