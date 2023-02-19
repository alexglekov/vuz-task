import React, { useEffect, useState } from 'react'
import css from './CharactersTable.module.scss'
import cn from 'classnames'
import { FixedSizeList } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import { v4 } from 'uuid'
import Row from '../CharactersRow'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

const abilitiesArray = [
  'Power',
  'Mobility',
  'Techniqe',
  'Survivability',
  'Energy',
]

const CharactersTable: React.FC = () => {
  const { __characters } = useTypedSelector((state) => state.characters)
  const [itemSize, setItemSize] = useState<number>(0)

  useEffect(() => {
    const listener = () => setItemSize((92 / 1440) * window.outerWidth)
    window.addEventListener('resize', listener)
    setItemSize((92 / 1440) * window.outerWidth)
    return () => window.removeEventListener('resize', listener)
  }, [])

  return (
    <div className={css.wrapper}>
      <div className={css.tableHeader}>
        <div className={cn(css.headerText, css.tableHeaderCharacter)}>
          Character
        </div>
        <div className={cn(css.headerText, css.tableHeaderTags)}>Tags</div>
        <div className={css.tableHeaderAbilities}>
          {abilitiesArray.map((el) => {
            return (
              <div
                key={el}
                className={cn(css.headerText, css.tableHeaderAbility)}
              >
                {el}
              </div>
            )
          })}
        </div>
      </div>
      <div className={css.table}>
        <AutoSizer>
          {({ height, width }) => (
            <FixedSizeList
              itemData={__characters}
              itemCount={__characters.length}
              itemKey={() => v4()}
              itemSize={itemSize}
              height={height}
              width={width}
            >
              {Row}
            </FixedSizeList>
          )}
        </AutoSizer>
      </div>
    </div>
  )
}

export default CharactersTable
