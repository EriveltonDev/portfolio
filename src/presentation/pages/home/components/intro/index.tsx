import styles from "./style.module.css"

export function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles.intro__content}>
          <h2>
            Hey, I am Erivelton Sousa
          </h2>

          <p>
            I am Full stack developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quisquam porro sit, praesentium sed iure quod quae vel laborum maxime repellendus voluptatem delectus necessitatibus molestiae optio pariatur. Molestias, numquam suscipit.
          </p>
  
        <button>Projects</button>
      </div>
    </section>
  )
}