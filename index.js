const { path } = require('@vuepress/shared-utils')

module.exports = (options = {}, context) => ({
    extendPageData($page){
        const {
            frontmatter,
            path,
            title
        } = $page

        const root_url = options.root_url
        const default_image = options.default_image

        if(frontmatter.meta === undefined){
            frontmatter.meta = [{"property": "og:image", "content": root_url + default_image }]
        }

        let flag = false;
        let flag2 = false;
        let desc = "";

        frontmatter.meta.forEach(elem => {
            if (elem.hasOwnProperty('property') && elem.property === 'og:image') {
                flag = true;
            }
            if(elem.hasOwnProperty('name') && elem.name === 'description'){
                flag2 = true;
                desc = elem.content
            }
        })

        if (flag === false) {
            frontmatter.meta.push({"property": "og:image", "content": root_url + default_image})
        }

        if (flag2 === true) {
            frontmatter.meta.push({"property": "og:description", "content": desc})
        }

        frontmatter.meta.push({"property": "og:url", "content": root_url + path})
        frontmatter.meta.push({"property": "og:title", "content": title})
    }
})
