import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Space Jelly Shop</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Space Jelly Shop</h1>

        <p className={styles.description}>
          The best space jellyfish swag on the web!
        </p>

        <ul className={styles.grid}>
          <li className={styles.card}>
            <img src='/Images/spacejelly-tshirt.jpg' alt='Space Jelly Tshirt' />
            <h2>Space Jelly Tshirt</h2>
            <p>
              Bring Cosmo the space Jellyfish to your wardrobe with this high
              quality tshirt.
            </p>
          </li>

          <li className={styles.card}>
            <img
              src='/Images/spacejelly-sticker.jpg'
              alt='Space Jelly Stickers'
            />
            <h2>Space Jelly Stickers</h2>
            <p>
              Add some flare to your laptop with a sticker of Cosmo the Space
              Jellyfish.
            </p>
          </li>
          <li className={styles.card}>
            <img src='/Images/spacejelly-combo.jpg' alt='Space Jelly Combo' />
            <h2>Space Jelly Combo</h2>
            <p>
              Show your love for Cosmo with a tshirt and sticker combo pack!
            </p>
          </li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
