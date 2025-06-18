// import headerStyle from '../Css/Header.module.css';

function Header()
{
    return (
        <>
            <header>
                <nav>
                    {/* ===menu button=== */}
                    <button className='MenuBtn'>
                        <img src=''></img>
                    </button>

                    {/* ===Logo=== */}
                    <img className='Logo' src=''></img>

                    {/* ===Tabs=== */}
                    <ul className='TabsContainer'>
                        <li className='Tab' id='HomeTab'>Home</li>
                        <li className='Tab' id='RestTab'>Restaurant</li>
                        <li className='Tab' id='AboutTab'>About</li>
                    </ul>

                    {/* ===Account Icon=== */}
                    <button>
                        <img src=''></img>
                    </button>
                </nav>
            </header>

            {/* ===Account Pop Up=== */}
            <div>
                {/* ===General=== */}
                <ul>
                    <li>Profile</li>
                    <hr/>
                    <li>Theme &gt;</li>
                    <hr/>
                    <li>Language &gt;</li>
                    <hr/>
                    <li>Sign out</li>
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