import { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleToggle = () => {
    setMenuVisible(!menuVisible);
    setClickCount(prev => prev + 1);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.hoverText}>Hover vào đây để đổi màu</h1>

      <button onClick={handleToggle}>
        {menuVisible ? 'Ẩn Menu' : 'Hiện Menu'} ({clickCount} lần bấm)
      </button>

      {menuVisible && (
        <div className={styles.menu}>
          <ul>
            <li>Trang chủ</li>
            <li>Giới thiệu</li>
            <li>Liên hệ</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
