import styles from '../styles/components/SideBar.module.css'
export function SideBar() {
    return (
        <div className={styles.menu}>
            <span><img src="icons/logo.svg" alt="" /></span>
            <span className={styles.logo}>
                <div>
                    <img src="icons/home.svg" alt="" />
                </div>
                <div>
                    <img src="icons/award.svg" alt="" />
                </div>
            </span>
        </div>
    )
}