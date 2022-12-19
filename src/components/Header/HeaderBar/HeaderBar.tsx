import {FC} from 'react'
import s from './HeaderBar.module.scss'

interface HeaderBarI {}

const HeaderBar: FC<HeaderBarI> = (props) => {
  return <div className={s.bar}>
    <div className={s.desc}>
      Нам доверяют<br/> лидирующие бренды <br/>и стратапы
    </div>
    <div className={s.list}>
      <div className={s['list__block']}> </div>
      <div className={s['list__block']}></div>
      <div className={s['list__block']}></div>
      <div className={s['list__block']}></div>
    </div>
  </div>
}

export default HeaderBar
