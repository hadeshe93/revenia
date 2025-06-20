import { DOMAIN, CAPITALIZED_DOMAIN } from '@/constants/biz';

export default {
  metadata: {
    title: `Privacy Policy | ${CAPITALIZED_DOMAIN}`,
    description: `Privacy Policy for ${CAPITALIZED_DOMAIN} - Learn how we handle your information when you use our service.`,
  },
  backToGame: 'Back to Home',
  title: 'Privacy Policy',
  sections: {
    information: {
      title: 'Information We Collect',
      description:
        `${CAPITALIZED_DOMAIN} is designed to be a simple, privacy-focused website that provides a friendly community for gaming enthusiasts to share and exchange experiences, insights, and feelings related to Revenia games. We collect minimal data to ensure the site functions properly:`,
      items: [
        'Basic usage data to improve site performance',
        'Anonymous analytics to understand how visitors interact with our content',
      ],
    },
    usage: {
      title: 'How We Use Your Information',
      description: 'The data we collect is used exclusively to:',
      items: [
        'Improve website performance and user experience',
        'Analyze which replays are most popular or useful to visitors',
        'Understand how users navigate through our content',
      ],
    },
    protection: {
      title: 'How We Protect Your Information',
      description:
        'We have implemented reasonable security measures to help protect against the loss, misuse, or alteration of the information under our control. We prioritize your privacy and only collect the minimum information necessary to provide our service.',
    },
    storage: {
      title: 'Data Storage',
      description:
        'We use cookies and similar technologies to enhance your browsing experience and collect anonymous usage data. We do not store personal information that can identify individual users unless explicitly provided by you (such as when contacting us via email).',
    },
    analytics: {
      title: 'Google Analytics',
      description:
        'We use Google Analytics to monitor and analyze the use of our service. Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.',
      optOut:
        'You can opt-out of having made your activity on the service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visits activity.',
      moreInfo:
        'For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page:',
    },
    thirdParty: {
      title: 'Third-Party Links',
      description: `Our website contains links to ${DOMAIN} and other external websites. Please note that:`,
      items: [
        'We are not responsible for the privacy practices or content of these external sites',
        `When you click on links to ${DOMAIN}, you may be subject to the privacy policy of ${DOMAIN}`,
        'We encourage you to review the privacy policies of any external sites you visit through our links',
      ],
    },
    deletion: {
      title: 'Data Deletion',
      description: 'You can limit data collection at any time by:',
      items: [
        'Using private browsing or incognito mode',
        'Clearing your browser cookies and local storage',
        'Installing browser extensions that block tracking',
      ],
    },
    updates: {
      title: 'Updates to Privacy Policy',
      description:
        'We may update this privacy policy as needed to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be reflected on this page with an updated revision date.',
    },
    contact: {
      title: 'Contact Us',
      description: 'If you have any questions about our privacy policy or how we handle your data, please contact us at:',
      email: `contact@${DOMAIN}`,
    },
  },
  footer: {
    lastUpdated: 'Last updated: June 2025',
  },
};
