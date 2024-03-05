// If the current window URL contains "/docs/playable/elements", then replace it with "/docs/elements".

const redirects = [
  {
    from: '/docs/playable/elements',
    to: 'https://knowledge.lunalabs.io/en/'
  },
  {
    from: '/docs/elements',
    to: 'https://knowledge.lunalabs.io/en/'
  },
  {
    from: '/docs/playable/getting-started/urp',
    to: '/docs/playable/getting-started/supported-features/urp'
  },
  {
    from: '/docs/playable/getting-started/luna-rts',
    to: '/docs/playable/getting-started/supported-features/luna-rts'
  },
  {
    from: '/docs/playable/setup/verify-installation',
    to: '/docs/playable/setup/develop-build'
  }
];

(() => {
  const currentUrl = window.location.href;
  for (const redirect of redirects) {
    if (currentUrl.includes(redirect.from)) {
      window.location.href = currentUrl.replace(redirect.from, redirect.to);
    }
  }
})();
