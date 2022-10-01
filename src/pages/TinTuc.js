import React, { createContext, useState } from 'react'
import NewsPiece from '../components/TinTuc/NewsPiece'
import { connect } from 'react-redux';

function TinTuc(props) {
  const [initState, setInitState] = useState(props.tintuc);
  const renderContent = () => {
    return initState.map((item, index) => {
      // console.log(item);
      return <NewsPiece index={index} news={item} />
    })
}
  return (
    <section id="news-page">
      <h3>Tin tức</h3>
      <div className="container">
        <div className="row">
          {renderContent()}
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
      tintuc: state.tintuc
  }
}

export default connect(mapStateToProps,null)(TinTuc);