import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Routes, Route } from 'react-router-dom'

import favicon from '../assets/favicon/favicon.ico'
import Main from '../pages/Main/Main'

import '../styles/index.scss'
import Header from './common/Header'
import css from './styles.module.scss'

const App: React.FC = () => {
  const renderHelmet = () => {
    const seo = {
      title: 'VUZ',
      description: 'VUZ Frontend Task',
    }
    const og = {
      title: 'VUZ',
      description: 'VUZ Frontend Task',
      image: '#',
    }

    return (
      <Helmet>
        <title>{seo.title}</title>
        <link rel="icon" type="image/png" href={favicon} />
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={og.title} />
        <meta property="og:description" content={og.description} />
      </Helmet>
    )
  }

  return (
    <div className={css.app}>
      {renderHelmet()}
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  )
}

export default App
