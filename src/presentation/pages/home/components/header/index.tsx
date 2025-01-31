'use client'

import styles from './style.module.css'
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useMedia } from "@/shared/presentation/hooks/useMedia";

export function Header() {
  const [mobileIsOpen, setMobileIsOpen] = useState(false)
  const isMobile = useMedia('(max-width: 1042px)')
  const menuMobileRef = useRef<HTMLUListElement | null>(null)
  const headerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if(!isMobile) {
      setMobileIsOpen(false)
    }
  }, [isMobile])


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileIsOpen
        && menuMobileRef.current
        && !menuMobileRef.current.contains(event.target as Node)
        && headerRef.current
        && !headerRef.current.contains(event.target as Node)
      ) {
        setMobileIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileIsOpen]);

  return (
    <header ref={headerRef} className={styles.header}>
      <Link className={styles.header__logo} href="/">
        <picture>
          <img
            src="https://i.postimg.cc/TwY74D31/profile-pic-8.png"
            width={50}
            height={50}
            alt="Erivelton Sousa"
          />
        </picture>

        <div>Erivelton Sousa</div>
      </Link>

      <nav className={styles.nav}>
        <div className={`${styles.header__hamburger_menu} ${mobileIsOpen ? styles['--active'] : ''}`} onClick={() => setMobileIsOpen(prevState => !prevState)}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>

        <ul ref={menuMobileRef} className={`${styles.ul} ${mobileIsOpen ? styles.active : undefined}`}>
          <li className={styles.li}>
            <Link onClick={() => setMobileIsOpen(false)} className={styles.nav__link} href="">
              Home
            </Link>
          </li>

          <li className={styles.li}>
            <Link onClick={() => setMobileIsOpen(false)} className={styles.nav__link} href="">
              About
            </Link>
          </li>

          <li className={styles.li}>
            <Link onClick={() => setMobileIsOpen(false)} className={styles.nav__link} href="">
              Projects
            </Link>
          </li>

          <li className={styles.li}>
            <Link onClick={() => setMobileIsOpen(false)} className={styles.nav__link} href="">
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}