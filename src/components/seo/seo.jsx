import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

function SEO({ description, lang, meta, title }) {
    const defaultTitle = 'WMDB'
    const defaultDescription = 'The Wow Movie Database (WMDB) - Browse for information on thousands of Movies and TV Shows. WMDb is powered by APIs from TMDb'
    const metaDescription = description || defaultDescription

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
            meta={[
                {
                    name: 'description',
                    content: metaDescription,
                },
                {
                    property: 'og:title',
                    content: title,
                },
                {
                    property: 'og:description',
                    content: metaDescription,
                },
                {
                    property: 'og:type',
                    content: 'website',
                },
            ].concat(meta)}
        />
    )
}

SEO.defaultProps = {
    lang: 'en',
    meta: [],
    description: '',
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
}

export default SEO;
