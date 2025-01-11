import styles from '@/styles/(pages)/header.module.scss';

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <div className={styles.logo}></div>
        <div className={styles.topMenu}>
          <ul>
            <li>냉털</li>
            <li>집밥로그</li>
            <li>혼밥지도</li>
          </ul>
        </div>
        <div className={styles.searchWrapper}>
          <div className={styles.searchBox}>
            <div className={styles.searchLogo}></div>
            <input
              type="text"
              className={styles.search}
              placeholder="통합검색"
            />
          </div>
        </div>
        <div className={styles.info}>
          <span className={styles.market}></span>
          <ul>
            <li>로그인</li>
            <li>회원가입</li>
            <li>고객센터</li>
          </ul>
          <span className={styles.writeBtn}>글쓰기</span>
        </div>
      </div>
    </div>
  );
}
