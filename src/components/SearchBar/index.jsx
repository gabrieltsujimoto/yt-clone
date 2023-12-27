import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import './style.css';
import { useState } from 'react';

export default function SearchBar() {
    const [textSearch, setTextSearch] = useState('');
    let text;

    return (
        <div className='search-container'>
            <div className='input-container'>
                <input type="text" id="text-input" placeholder="Pesquisar"name={text} onChange={(e)=>setTextSearch(e.target.value)}/>
                <button className='search-icon' onClick={()=>console.log(textSearch)}>
                    <SearchIcon/>
                </button>  
            </div>
            <div className='mic-container'>
               <div className='mic-icon'><MicIcon/></div>
            </div> 
        </div>
    )
}