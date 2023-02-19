import React from 'react'
import classNames from 'classnames'
import css from './Icon.module.scss'

interface Props {
  type: string
  className?: string
  width?: number
  height?: number
  color?: string
  secondaryColor?: string
  onClick?: (event: React.MouseEvent) => void
}

const Icon = ({ type, className, onClick, ...iconProps }: Props) => {
  let icon = null

  switch (type) {
    case 'searchInput':
      icon = (
        <svg
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="7.5" cy="7.5" r="7" stroke="#333333" />
          <line
            x1="18.6464"
            y1="19.3536"
            x2="11.6464"
            y2="12.3536"
            stroke="#333333"
          />
        </svg>
      )
      break

    default:
      break
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
    <i
      className={classNames(css.icon, className)}
      {...iconProps}
      onClick={onClick}
    >
      {icon}
    </i>
  )
}

Icon.defaultProps = {
  className: '',
  width: 38.945,
  height: 38.948,
  color: '#111',
  secondaryColor: '#000',
  onClick: () => null,
}

export default Icon
