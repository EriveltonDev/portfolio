'use client'

import Image from "next/image";
import styles from './style.module.css'
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useMedia } from "@/shared/hooks/useMedia";

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
      <Link href="/">
        <Image
          src="/images/logo.png"
          width={105}
          height={110}
          alt="Erivelton Sousa"
        />
      </Link>

      <nav className={styles.nav}>
        <div className={`${styles.hamburger} ${mobileIsOpen ? styles.open : ''}`} onClick={() => setMobileIsOpen(prevState => !prevState)}>
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