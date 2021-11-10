import React, { FC } from 'react'

interface IMenuItemProps {
  data: any
}

export const MenuItem: FC<IMenuItemProps> = ({ data }) => {
  let classActiveMenu = data.active ? 'bg-bg1' : 'bg-brownColor1';
  return <div className={`relative menu-item flex ${classActiveMenu} hover:bg-bg1 rounded-full cursor-pointer`}>
    <div className={`menu-item___title lg:block hidden m-auto font-medium absolute -left-28 bg-bg1 h-full rounded-full overflow-hidden`}>
      <div className="h-full pl-6 flex items-center">
        <span>{data.title}</span>
      </div>
    </div>
    <div className={`menu-item__btn w-12 h-12 rounded-full ${classActiveMenu} hover:bg-bg1 flex justify-center items-center text-white`}>
      <div className="w-5 h-5 text-white">
        {data.icon || null}
      </div>
    </div>
  </div>
}