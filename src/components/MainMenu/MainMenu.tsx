import {FC} from 'react'
import {NavLink} from 'react-router-dom'
import s from './MainMenu.module.scss'

const MainMenu: FC = () => {
  return <div className={s['menu-wrap']}>
     <div className={s.logo}>LOGO</div>
     <ul className={s.menu}>
       <li className={s['menu-block']}>
         <NavLink to='/services'>Сервисы</NavLink>
       </li>
       <li className={s['menu-block']}>
         <NavLink to='/community'>Сообщество</NavLink>
       </li>
       <li className={s['menu-block']}>
         <NavLink to='/career'>Карьера</NavLink>
       </li>
       <li className={s['menu-block']}>
         <NavLink to='/company'>Компания</NavLink>
       </li>
       <li className={s['menu-block']}>
         <NavLink to='/command-constructor'>Конструктор команд</NavLink>
       </li>
     </ul>
    </div>
}

export default MainMenu
