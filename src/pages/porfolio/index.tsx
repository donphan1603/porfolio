import React from 'react'
import { Menu } from '../../components/porfolioComponents/menu'
import ImagePorfolio from '../../assets/images/avatar/phuc.jpg'
import "../../components/porfolioComponents/styles.css"
const Porfolio = () => {
  return (
    <div className="w-full h-screen bg-bg4 bg-opacity-90">
      <Menu />
      <div className="fixed transform -rotate-12 bg-bg1 w-96 -top-10 -left-10 hidden lg:block" style={{ height: "200%" }}></div>
      <div className="fixed top-0 bottom-0 left-0 right-0">
        <div className="xl:px-24 lg:px-12 px-10">
          <div className="lg:grid lg:grid-cols-3 lg:gap-5 h-screen w-full mx-auto py-10 lg:py-0">
            <div className="lg:w-full lg:h-3/4 shadow-xl md:w-80 md:h-80 w-64 h-64 my-auto rounded-full lg:rounded-3xl overflow-hidden mx-auto">
              <img
                src={ImagePorfolio}
                className="rounded-3xl transform h-full w-full object-cover"
                alt="avatar"
              />
            </div>
            <div className="lg:col-span-2 text-white my-auto space-y-5 lg:mx-20 md:mx-10 lg:text-left text-center lg:mt-auto mt-10">
              <p className="text-6xl xl:text-6xl lg:text-5xl font-bold text-bg1">I'm Phuc</p>
              <p className="text-5xl xl:text-5xl lg:text-4xl font-semibold text-white">Front-end developer</p>
              <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Porfolio
