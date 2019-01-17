const { path } = require('@vuepress/shared-utils');

module.exports = (options = {}, context) => {
    return {
        extendPageData: function ($page) {
            const {
                frontmatter,
                path,
                title
            } = $page;

            const root_url = options.root_url;
            const full_url = root_url + path
            const default_og_type = options.default_og_type || "article"
            const default_twitter_card = options.default_twitter_card || "summary"
            const default_site_name = options.default_site_name

            const default_image = options.default_image;
            const default_image_full_path = root_url + default_image
            const default_image_type = options.default_image_type
            const default_image_width = options.default_image_width
            const default_image_height = options.default_image_height
            const default_image_alt = options.default_image_alt

            const default_twitter_site = options.default_twitter_site
            const default_twitter_creator = options.default_twitter_creator

            if (!exists_meta(frontmatter)) frontmatter.meta = [];

            /* IMAGE SEO */
            let image = frontmatter.image

            if(!_has_name(frontmatter, 'og:image') && !image){
                // case. frontmatter image empty
                frontmatter.meta.push(og_template('og:image', default_image_full_path))

                if(!_has_property(frontmatter, 'og:image:type') && default_image_type)
                    frontmatter.meta.push(og_template('og:image:type', default_image_type))
                if(!_has_property(frontmatter, 'og:image:width') && default_image_width)
                    frontmatter.meta.push(og_template('og:image:width', default_image_width))
                if(!_has_property(frontmatter, 'og:image:height') && default_image_height)
                    frontmatter.meta.push(og_template('og:image:height', default_image_height))
                if(!_has_property(frontmatter, 'og:image:alt') && default_image_alt)
                    frontmatter.meta.push(og_template('og:image:alt', default_image_alt))
            }

            if(!_has_name(frontmatter, 'twitter:image') && !image) // case. image empty
                frontmatter.meta.push(twitter_template('twitter:image',default_image_full_path ))

            if(image){
                if(!_has_property(frontmatter, 'og:image'))
                    frontmatter.meta.push(og_template('og:image', image))
                if(!_has_property(frontmatter, 'og:image:type') && frontmatter.image_type)
                    frontmatter.meta.push(og_template('og:image:type', frontmatter.image_type))
                if(!_has_property(frontmatter, 'og:image:width') && frontmatter.image_width)
                    frontmatter.meta.push(og_template('og:image:width', frontmatter.image_width))
                if(!_has_property(frontmatter, 'og:image:height') && frontmatter.image_height)
                    frontmatter.meta.push(og_template('og:image:height', frontmatter.image_height))
                if(!_has_property(frontmatter, 'og:image:alt') && frontmatter.image_alt)
                    frontmatter.meta.push(og_template('og:image:alt', frontmatter.image_alt))

                if(!_has_name(frontmatter, 'twitter:image'))
                    frontmatter.meta.push(twitter_template('twitter:image',image))

                if(!_has_itemprop(frontmatter, 'image'))
                    frontmatter.meta.push(itemprop_template('image', image))
            }

            /* DESCRIPTION SEO */
            let meta_description = find_meta_description(frontmatter)
            if(frontmatter.description){
                if(!_has_property(frontmatter, 'og:description'))
                    frontmatter.meta.push(og_template('og:description', frontmatter.description))
                if(!_has_name(frontmatter, 'twitter:description'))
                    frontmatter.meta.push(twitter_template('twitter:description', frontmatter.description))
                if(!meta_description)
                    frontmatter.meta.push({'name': 'description', 'content': frontmatter.description})
                if(!_has_itemprop(frontmatter, 'description'))
                    frontmatter.meta.push(itemprop_template('description', frontmatter.description))
            }
            if(meta_description){
                if(!_has_property(frontmatter, 'og:description'))
                    frontmatter.meta.push(og_template('og:description', frontmatter.description))
                if(!_has_name(frontmatter, 'twitter:description'))
                    frontmatter.meta.push(twitter_template('twitter:description', frontmatter.description))
                if(!_has_itemprop(frontmatter, 'description'))
                    frontmatter.meta.push(itemprop_template('description', frontmatter.description))
            }

            /* URL SEO */
            if(!_has_property(frontmatter, 'og:url'))
                frontmatter.meta.push(og_template('og:url', full_url ))
            if(!_has_name(frontmatter, 'twitter:url'))
                frontmatter.meta.push(twitter_template('twitter:url', full_url))

            /* TITLE SEO */
            if(!_has_property(frontmatter, 'og:title'))
                frontmatter.meta.push(og_template('og:title', title))
            if(!_has_name(frontmatter, 'twitter:title'))
                frontmatter.meta.push(twitter_template('twitter:title', title))
            if(!_has_itemprop(frontmatter, 'name'))
                frontmatter.meta.push(itemprop_template(frontmatter, title))

            /* OG TYPE SEO */
            if(!_has_property(frontmatter, 'og:type') && frontmatter.og_type)
                frontmatter.meta.push(og_template('og:type', frontmatter.og_type))
            if(!_has_property(frontmatter, 'og:type'))
                frontmatter.meta.push(og_template('og:type', default_og_type))

            /* TWITTER CARD SEO */
            if(!_has_name(frontmatter, 'twitter:card') && frontmatter.twitter_card)
                frontmatter.meta.push(twitter_template('twitter:card', frontmatter.twitter_card))
            if(!_has_name(frontmatter, 'twitter:card'))
                frontmatter.meta.push(twitter_template('twitter:card', default_twitter_card))

            /* SITE NAME SEO */
            if(!_has_property(frontmatter, 'og:site_name') && frontmatter.site_name)
                frontmatter.meta.push(og_template('og:site_name', frontmatter.site_name))
            if(!_has_property(frontmatter, 'og:site_name') && default_site_name)
                frontmatter.meta.push(og_template('og:site_name', default_site_name))

            /* TWITTER SITE SEO */
            if(!_has_name(frontmatter, 'twitter:site') && frontmatter.twitter_site)
                frontmatter.meta.push(twitter_template('twitter:site'), frontmatter.twitter_site)
            if(!_has_name(frontmatter, 'twitter:site') && default_twitter_site)
                frontmatter.meta.push(twitter_template('twitter:site'), default_twitter_site)

            /* TWITTER CREATOR SEO */
            if(!_has_name(frontmatter, 'twitter:creator') && frontmatter.twitter_creator)
                frontmatter.meta.push(twitter_template('twitter:creator'), frontmatter.twitter_creator)
            if(!_has_name(frontmatter, 'twitter:creator') && default_twitter_creator)
                frontmatter.meta.push(twitter_template('twitter:creator'), default_twitter_creator)
        }
    };
};

function find_meta_description(frontmatter) {
    let flag = false;
    let description = "";

    frontmatter.meta.forEach(elem => {
        if(elem.hasOwnProperty('name') && elem.name === 'description'){
            flag = true;
            description = elem.content
        }
    });

    if(flag) {
        return description
    }
    return flag
}

function exists_meta(frontmatter) {
    return frontmatter.meta !== undefined;
}

function _has_property(frontmatter, property_name) {
    let flag = false;
    frontmatter.meta.forEach(elem => {
        if (elem.hasOwnProperty('property') && elem.property === property_name) flag = true;
    });
    return flag
}
function _has_name(frontmatter, name) {
    let flag = false;
    frontmatter.meta.forEach(elem => {
        if (elem.hasOwnProperty('name') && elem.name === name) flag = true;
    });
    return flag
}
function _has_itemprop(frontmatter, itemprop) {
    let flag = false;
    frontmatter.meta.forEach(elem => {
        if (elem.hasOwnProperty('itemprop') && elem.itemprop === itemprop) flag = true;
    });
    return flag
}
function og_template(property, content) {
    return {
        'property': property,
        'content': content
    }
}
function twitter_template(name, content) {
    return {
        'name': name,
        'content': content
    }
}
function itemprop_template(itemprop, content) {
    return {
        'itemprop': itemprop,
        'content': content
    }
}

// custom frontmatter: image, image_type, image_width, image_height, image_alt
// ,description, og_type, twitter_card, site_name
// twitter_site, twitter_creator,

// option: root_url, default_image, default_image_type, default_image_width, default_image_height,
// default_image_alt,
// default_og_type, default_twitter_card, default_site_name
// default_twitter_site, default_twitter_creator,
