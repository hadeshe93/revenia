import { DOMAIN, CAPITALIZED_DOMAIN } from '@/constants/biz';

export default {
  metadata: {
    title: `Terms of Service | ${CAPITALIZED_DOMAIN}`,
    description: `Terms of Service for ${CAPITALIZED_DOMAIN} - Learn about the rules and terms that govern your use of our website.`,
  },
  backToGame: 'Back to Home',
  title: 'Terms of Service',
  descriptions: [
    'Last updated: June 2025',
    'Please read these terms and conditions carefully before using Our Service.',
  ],
  sections: {
    acceptance: {
      title: 'Acceptance of Terms',
      description:
        `By accessing and using ${DOMAIN}, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree with any part of these terms, please do not use our website.`,
    },
    description: {
      title: 'Description of Service',
      description:
        `${CAPITALIZED_DOMAIN} provides a free online tool that helps users to remove duplicate items from a text. The service is provided "as is" and we reserve the right to modify, suspend, or terminate it at any time without prior notice.`,
    },
    usage: {
      title: 'Usage Guidelines',
      description: `When using ${DOMAIN}, you agree to:`,
      items: [
        'Use the website for lawful purposes only',
        'Not attempt to hack, disrupt, or damage the website in any way',
        'Not use the website to harass, abuse, or threaten others',
        'Not impersonate any person or entity',
        'Not use the website for any commercial purpose without our express consent',
        'Not use the website for any gambling-related activities, whether commercial or non-commercial',
        'Not use the website for any pornographic, violent, politically sensitive, or otherwise inappropriate content',
        'Not use the website to promote or engage in any illegal activities',
        'Not use the website in a way that violates any applicable laws or regulations',
      ],
    },
    intellectualProperty: {
      title: 'Intellectual Property',
      description:
        `All content on ${DOMAIN}, including text, graphics, logos, and software, is the property of ${CAPITALIZED_DOMAIN} and protected by international copyright laws. You may not reproduce, modify, distribute, or create derivative works from any part of the website without our written permission.`,
    },
    disclaimer: {
      title: 'Disclaimer of Warranties',
      description:
        `${CAPITALIZED_DOMAIN} is provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the website\'s accuracy, reliability, or availability. Your use of the service is at your own risk. This website is contributed by game enthusiasts. Revenia.net is not affiliated with official Revenia game or Kulkatto.`,
    },
    limitation: {
      title: 'Limitation of Liability',
      description:
        `In no event shall ${DOMAIN} be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of ${DOMAIN}, even if advised of the possibility of such damages.`,
    },
    indemnification: {
      title: 'Indemnification',
      description:
        `You agree to indemnify and hold ${DOMAIN} harmless from any claims, losses, liabilities, damages, costs, and expenses (including reasonable attorneys\' fees) arising out of your use of the website or violation of these Terms of Service.`,
    },
    changes: {
      title: 'Changes to Terms of Service',
      description:
        `We reserve the right to update or modify these Terms of Service at any time without prior notice. Your continued use of ${DOMAIN} after any changes constitutes your acceptance of the new terms.`,
    },
    contact: {
      title: 'Contact Us',
      description: 'If you have any questions about these Terms of Service, please contact us at:',
      email: `contact@${DOMAIN}`,
    },
  },
  footer: {
  },
};