# vuepress-plugin-simple-seo

vuepress-plugin-simple-seo for vuepress

https://www.npmjs.com/package/@limdongjin/vuepress-plugin-simple-seo

## Install

```
yarn add -D @limdongjin/vuepress-plugin-simple-seo
```

## Usage

```js
module.exports = {
    plugins:  [
        '@limdongjin/vuepress-plugin-simple-seo',
        {
            default_image: '', // default image path. ex, /images/main.png
            root_url: '' // root url. ex, https://limdongjin.github.io
        }
    ]
}
```

## Options

### default_image

- Type: `string`
- Default: `undefined`

### root_url

- Type: `string`
- Default: `undefined`
