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
    plugins:  ['@limdongjin/vuepress-plugin-simple-seo', {
        // write options. ( all options are optional )
    }]
}
```

```js
// example setting
module.exports = {
    plugins:  ['@limdongjin/vuepress-plugin-simple-seo', {
        root_url: 'https://limdongjin.github.io',
        default_site_name: 'limdongjin TIL',
        default_image: '/image.png',
        default_twitter_creator: '@twituser',
        default_twitter_site: '@twituser'
    }]
}
```

## Options

- recommend option are also "optional" option.
- Type: `string`

### root_url (recommend)

- Default: Empty String
- Example: `https://limdongjin.github.io`

```html
<meta property="og:url" content="https://limdongjin.github.io/">
<meta name="twitter:url" content="https://limdongjin.github.io/">
```
### default_site_name (recommend)

- Default: `undefined`

```html
<meta property="og:site_name" content="limdongjin TIL">
```

### default_image (recommend)

- Default: `undefined`
- Example, `/image.png`

```html
<meta name="og:image" content="https://mysite.com/image.png">
<meta name="twitter:image" content="https://mysite.com/image.png">
<meta itemprop="image" content="https://mysite.com/image.png">
```

### default_image_type

- Default: `undefined`

```html
<meta name="og:image:type" content="image/jpeg">
```

### default_image_width

- Default: `undefined`

```html
<meta name="og:image:width" content="400">
```

### default_image_height

- Default: `undefined`

```html
<meta name="og:image:height" content="500">
```

### default_image_alt

- Default: `undefined`

```html
<meta name="og:image:alt" content="it is alt!">
```

### default_twitter_creator

- Default: `undefined`

```html
<meta name="twitter:creator" content="@genilcoder">
```

### default_twitter_site

- Default: `undefined`

```html
<meta name="twitter:site" content="@genilcoder">
```

### default_twitter_card

- Default: `summary`

```html
<meta name="twitter:card" content="summary">
```

### default_og_type

- Default: `article`

```html
<meta property="og:type" content="website">
```

## Frontmatter

- each page can override default option values.
- if you want minimal setting, recommend just set description, or image.

### title

if you are not write frontmatter title, create meta title tag from $page.title.

```html
<meta property="og:title" content="awesome title">
<meta name="twitter:title" content="Dongjin Lim, 초고수 소프트웨어 엔지니어를 향하여">
```


### description ( recommend )

```html
<meta property="og:description" content="write your page description">
<meta name="twitter:description" content="write your page description">
<meta name="description" content="write your page description">
<meta itemprop="description" content="write your page description">
```

### image ( recommend )

```html
 <meta name="og:image" content="https://mysite.com/image.png">
 <meta name="twitter:image" content="https://mysite.com/image.png">
 <meta itemprop="image" content="https://mysite.com/image.png">
```

### image_type

```html
<meta name="og:image:type" content="image/jpeg">
```

### image_width

```html
<meta name="og:image:width" content="400">
```

### image_height

```html
<meta name="og:image:height" content="500">
```

### image_alt

```html
<meta name="og:image:alt" content="it is alt!">
```

### twitter_creator

```html
<meta name="twitter:creator" content="@genilcoder">
```

### twitter_site

```html
<meta name="twitter:site" content="@genilcoder">
```

### twitter_card

```html
<meta name="twitter:card" content="summary">
```

### og_type

```html
<meta property="og:type" content="website">
```

### site_name

```html
<meta property="og:site_name" content="limdongjin TIL">
```
