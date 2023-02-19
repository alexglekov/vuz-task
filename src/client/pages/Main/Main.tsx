import React from 'react'
import Table from '../../components/common/Table/Table'
import css from './Main.module.scss'

const Main: React.FC = (): JSX.Element => {
  return (
    <div className={css.wrapper}>
      <Table />
    </div>
  )
}

export default Main
