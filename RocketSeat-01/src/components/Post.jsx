import styles from "./Post.module.css"

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/souph1s.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Sophia Muraro</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time dateTime="2022-05-11 08:13:00">Publicado ha 1h</time>
            </header>
        </article>
    )
}