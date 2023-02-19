import React from 'react'
import css from './Statistics.module.scss'

const statsArray = ['Power', 'Mobility', 'Technique', 'Survivability', 'Energy']

interface IStatistics {
  statistics: number[]
}

const Statistics: React.FC<IStatistics> = ({ statistics }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.stats}>
        <span className={css.statsDeviderLeft}></span>
        <span className={css.statsDeviderRight}></span>
        {statsArray.map((el, index) => {
          return (
            <div key={el} className={css.statsItem}>
              <div className={css.statsItemName}>{el}</div>
              <div className={css.statsItemValue}>
                {statistics[index] ? statistics[index] : '-'}
              </div>
            </div>
          )
        })}
      </div>
      <div className={css.remark}>* Totals as average for squad</div>
    </div>
  )
}

export default Statistics
