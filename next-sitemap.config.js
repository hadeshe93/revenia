const DEFAULT_LANG = 'es';

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://revenia.net',
  generateRobotsTxt: true,
  priority: 0.9,
  exclude: ['/privacy'],
  transform: async (config, path) => {
    let loc = path;
    const segs = path.split('/');
    // 如果是默认语言，那么直接抛弃，因为默认是英文
    if (path === `/${DEFAULT_LANG}`) {
      loc = '/';
    } else {
      // 如果一级目录是默认语言，那么也要修正 loc，因为实际上会重定向
      if (segs[1] === DEFAULT_LANG) {
        segs.splice(1, 1);
        loc = segs.join('/');
      }
    }
    const rawPrio = [0.9, 1 - (segs.length - 1) * 0.1].sort((a, b) => a - b).shift();
    const priority = loc === '/' ? 1 : rawPrio;

    return {
      loc,
      changefreq: config.changefreq,
      priority,
    };
  },
  // ...other options
}
