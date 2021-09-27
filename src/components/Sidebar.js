import React from 'react';
import './Body.css';
import SidebarOptions from './Sidebar_Components/SidebarOptions';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../DataLayer';
import './Sidebar.css';

const Sidebar = () => {
    const [{ playlists }, dispatch] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img className="sidebar__logo" src={require('../assets/Spotify_Logo.png')} alt="" />
            <SidebarOptions Icon={HomeIcon} title="Home" />
            <SidebarOptions Icon={SearchIcon} title="Search" />
            <SidebarOptions Icon={LibraryMusicIcon} title="Your Library" />

            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map((playlist) => (
                <SidebarOptions title={playlist.name} />

            ))}
            {/* < SidebarOptions title="Hip Hop" />
            <SidebarOptions title="Rock" />
            <SidebarOptions title="RnB" /> */}
        </div>

    );
}

export default Sidebar;
