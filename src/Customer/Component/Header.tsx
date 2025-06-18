// import headerStyle from '../Css/Header.module.css';

function Header()
{
    return (
        <>
            <header>
                <nav>
                    {/* ===menu button=== */}
                    <button>
                        <img src=''></img>
                    </button>

                    {/* ===Logo=== */}
                    <img src=''></img>

                    {/* ===Tabs=== */}
                    <ul>
                        <li>Home</li>
                        <li>Restaurant</li>
                        <li>About</li>
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