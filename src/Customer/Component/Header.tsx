// import headerStyle from '../Css/Header.module.css';
import '../Css/Header.css';
import menuIcon from '../../assets/MenuIcon.png';
import logo from '../../assets/Logo.png';

function Header()
{
    return (
        <>
            <header>
                <nav className='HeaderContainer'>
                    {/* ===menu button=== */}
                    <button className='MenuBtn'>
                        <img src={menuIcon}></img>
                    </button>

                    {/* ===Logo=== */}
                    <img className='Logo' src={logo}></img>

                    {/* ===Tabs=== */}
                    <ul className='TabsContainer'>
                        <li className='HeadTab' id='HomeTab'>Home</li>
                        <li className='HeadTab' id='RestTab'>Restaurant</li>
                        <li className='HeadTab' id='AboutTab'>About</li>
                    </ul>

                    {/* ===Account Icon=== */}
                    <button className='AccountBtn'>
                        <img src=''></img>
                    </button>
                </nav>
            </header>

            {/* ===Account Pop Up=== */}
            <div>
                {/* ===General=== */}
                <ul className='PopUpContainer'>
                    <li className='PopUpItem' id='ProfileTab'>Profile</li>
                    <hr/>
                    <li className='PopUpItem' id='ThemeTab'>Theme &gt;</li>
                    <hr/>
                    <li className='PopUpItem' id='LanguageTab'>Language &gt;</li>
                    <hr/>
                    <li className="PopUpItem" id='SignOutTab'>Sign out</li>
                </ul>

                {/* ===Theme=== */}
                <ul>
                </ul>

                {/* ===Language=== */}
                <ul>
                </ul>
            </div>
        </>
    )
}

export default Header