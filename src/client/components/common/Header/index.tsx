import React from 'react'
import css from './Header.module.scss'
import headerLogo from '../../../assets/logo/Mortal-Kombat-Logo.png'

const Header: React.FC = () => {
  return (
    <div className={css.wrapper}>
      <img src={headerLogo} alt="logo" />
    </div>
  )
}

export default Header
