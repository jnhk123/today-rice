import styles from '@/styles/(pages)/nav.module.scss';

export default function Nav() {
  return (
    <div className={styles.navWrapper}>
      <div className={styles.navBox}>
        <ul>
          <li className={styles.active}>
            <div>홈</div>
          </li>
          <li>
            <div>추천</div>
          </li>
          <li>
            <div>#채널</div>
          </li>
          <li>
            <div>집들이</div>
          </li>
          <li>
            <div>집사진</div>
          </li>
          <li>
            <div>3D인테리어</div>
          </li>
          <li>
            <div>살림수납</div>
          </li>
          <li>
            <div>반려동물</div>
          </li>
          <li>
            <div>육아</div>
          </li>
          <li>
            <div>홈스토랑</div>
          </li>
          <li>
            <div>플랜테리어</div>
          </li>
        </ul>
      </div>
    </div>
  );
}
