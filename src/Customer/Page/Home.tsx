import Header from '../Component/Header';

function Home()
{

    return (
        <>
            <Header/>

            <main>
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

                {/* ===Search=== */}
                <div>
                    {/* ===Search Bar=== */}
                    <input type='text'></input>

                    {/* ===Filter=== */}
                    <button>
                        <img src=''></img>
                    </button>

                    {/* ===Search Button=== */}
                    <button>
                        <img src=''></img>
                    </button>
                </div>

                {/* ===Filter Drop Down=== */}
                <div>
                </div>

                {/* ===Search Results=== */}
                <div>
                </div>

                {/* ===Card Container=== */}
                <div>
                    {/* ===Card=== */}
                    <div>

                    </div>
                </div>

                {/* ===Tabs Number=== */}
                <div>
                    <button>&lt;</button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <p>...</p>
                    <button>10</button>
                    <button>&gt;</button>
                </div>
            </main>
        </>
    )
}

export default Home