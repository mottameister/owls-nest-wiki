const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Campaign',
      items: ['campaign/overview', 'campaign/progression'],
    },
    {
      type: 'category',
      label: 'Trainers',
      items: ['trainers/rival-motta', 'trainers/leaders', 'trainers/team-arroba'],
    },
    {
      type: 'category',
      label: 'Mechanics',
      items: ['mechanics/battle-format', 'mechanics/items'],
    },
    'download',
  ],
};

module.exports = sidebars;