'use strict';

import React from 'react';
import Meta from '../pages/meta';
import { Helmet } from 'react-helmet';
import _ from 'lodash';

const SEO =(props) => {

	let content =_.find(Meta, {url: props.url || 'default' } );
	if ( ! content ) {
	content =_.find ( Meta,  {url: 'default'} );
    }
  
  
    return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
    </Helmet>
  );
}

export default SEO;