import SearchBar from "../SearchBar";
import './style.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TocIcon from '@mui/icons-material/Toc';
import AddVideoIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function Header() {

    const addVideo = () =>{
        return( window.alert(`Vc clicou em adicionar o video`))
    }

    const notifications = () =>{
        return( window.alert('Vc clicou nas suas notificações'))
    }

    const profile = () =>{
        return( window.alert('Vc clicou no seu perfil'))
    }
    return (
        <div className="header-container">
            <div className="left">
                <TocIcon className="toggle-icon" />
                <div className="logo-container">
                    <div className="logo-image">
                        <YouTubeIcon fontSize="large" sx={{ color: `red` }} />
                    </div>
                    <span>Youtube</span>
                </div>
            </div>
            <div className="search">
                <SearchBar className="search" />
            </div>
            <div className="right">
                <AddVideoIcon className='icon' onClick={addVideo} />
                <NotificationsNoneOutlinedIcon className='icon' onClick={notifications}/>
                <AccountCircleOutlinedIcon className='icon' onClick={profile}/>
            </div>
        </div>
    )
}