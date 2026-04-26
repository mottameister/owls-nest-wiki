const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Campaign',
      items: ['campaign/overview', 'campaign/progression', 'campaign/full-progression'],
    },
    {
      type: 'category',
      label: 'Trainers',
      items: [
        'trainers/index',
        {
          type: 'category',
          label: 'Campaign Encounters',
          items: [
            'trainers/campaign/rival-motta-01',
            'trainers/campaign/lider-aurora-a-rainha-morcego',
            'trainers/campaign/team-arroba-snake',
            'trainers/campaign/lider-charlie-a-insetoide',
            'trainers/campaign/treinadores-dom',
            'trainers/campaign/rival-motta-02',
            'trainers/campaign/lider-dada-o-faixa-preta',
            'trainers/campaign/team-arroba-vinny',
            'trainers/campaign/lider-juanes-o-dono-da-carrocinha',
            'trainers/campaign/treinadores-peso-pesado-flaw',
            'trainers/campaign/rival-motta-03',
            'trainers/campaign/lider-bathilda-a-assombracao',
            'trainers/campaign/team-arroba-oswaldo',
            'trainers/campaign/lider-julie-a-botanista',
            'trainers/campaign/treinadores-senior-joe',
            'trainers/campaign/rival-motta-04',
            'trainers/campaign/lider-gabi-a-tempestade-de-gelo',
            'trainers/campaign/team-arroba-admin',
            'trainers/campaign/lider-tuta-o-tormento',
            'trainers/campaign/admin-marru',
            'trainers/campaign/rival-motta-final',
            'trainers/campaign/e4-jesus',
            'trainers/campaign/e4-peteca',
            'trainers/campaign/e4-allahu',
            'trainers/campaign/e4-victao',
            'trainers/campaign/campeao-motta',
          ],
        },
      ],
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
