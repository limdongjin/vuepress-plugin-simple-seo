module.exports = {
    title: 'simple seo plugin demo',
    description: 'Welcome Contributes',
    plugins: [ '@limdongjin/vuepress-plugin-simple-seo', {
        default_image: '/image.jpg',
        root_url: 'https://limdongjin.github.io',
        default_site_name: 'limdongjin TIL',
        default_twitter_creator: '@twituser',
        default_twitter_site: '@twituser'
    }]
}
