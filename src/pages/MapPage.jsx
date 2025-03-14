import React from 'react'
import DealerMap from '../components/Map/Map'
import { Helmet } from 'react-helmet'

const MapPage = ({bannerBg}) => {
  return (
    <div>
      <Helmet>
        <title>{`Testfabrics.com: INTERNATIONAL DISTRIBUTION`}</title>
      </Helmet>
      <DealerMap/>
    </div>
  )
}

export default MapPage