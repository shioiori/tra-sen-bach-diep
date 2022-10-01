import React from 'react'
import PrdBrand from './PrdBrand'
import PrdPrice from './PrdPrice'
import PrdType from './PrdType'

function AsideBar() {
  return (
    <div className="aside-bar col-md-3">
        <PrdType/>
        <PrdPrice/>
        <PrdBrand/>
    </div>
  )
}

export default AsideBar