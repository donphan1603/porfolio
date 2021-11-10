import React, { Fragment } from 'react'
import { PofolioMenus } from '../../models/pofolioModels'
import { MenuItem } from './menuItem'

export const Menu = () => {

  return (
    <Fragment>
      {/* Desktop */}
      <div className="fixed right-5 top-1/2 transform -translate-y-1/2 space-y-4 z-10 hidden lg:block">
        {Object.values(PofolioMenus).map((menu => {
          return <MenuItem data={menu} key={`pofolio-menu-${menu.id}`} />
        }))}
      </div>
      {/* Mobile */}
      <div className="fixed bg-brownColor2 bottom-0 left-0 right-0 space-y-4 z-10 lg:hidden block">
        <div className="flex justify-evenly py-4">
          {Object.values(PofolioMenus).map((menu => {
            return <MenuItem data={menu} key={`pofolio-menu-${menu.id}`} />
          }))}
        </div>
      </div>
    </Fragment>
  )
}
