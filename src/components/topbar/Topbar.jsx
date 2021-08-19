import React from 'react';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import './topbar.scss';



export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">LamaAdmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://www.pnglib.com/wp-content/uploads/2020/01/hacker_5e0fc00679a3e.png" alt="Avatar" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
