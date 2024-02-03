import React from 'react'
import './header.css'
const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <img src="/Logo.svg" alt="" />
          <ul>
            <li>
            ГЛАВНАЯ
            </li>
            <li>
            ОБ АВТОРЕ
            </li>
            <li>
            РАБОТЫ
            </li>
            <li>
            ПРОЦЕСС
            </li>
            <li>
            КОНТАКТЫ
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header
