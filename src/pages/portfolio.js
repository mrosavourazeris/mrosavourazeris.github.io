import React from 'react'
import './style.css'
import PortfolioCard from '../components/portfolioCard'
import PortfolioData from '../assets/portfolioData'

const Portfolio = () => (
  <div>
    {PortfolioData.map(project => <PortfolioCard 
      {...project}
      key={project.id}
    />)}
  </div>
)

export default Portfolio