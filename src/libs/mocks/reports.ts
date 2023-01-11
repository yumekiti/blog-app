import Report from '../interfaces/report';

export const getReportsMock = (): Report[] => {
  return [
    {
      id: 1,
      attributes: {
        img: {
          data: {
            id: 1,
            attributes: {
              name: 'img1',
              url: 'https://picsum.photos/200/300',
            },
          },
        },
        title: 'title1',
        body: 'body1',
        category: {
          data: {
            id: 1,
            attributes: {
              name: 'category1',
              createdAt: '2021-01-01T00:00:00.000Z',
              updatedAt: '2021-01-01T00:00:00.000Z',
              publishedAt: '2021-01-01T00:00:00.000Z',
            },
          },
        },
        tags: {
          data: [
            {
              id: 1,
              attributes: {
                name: 'tag1',
                createdAt: '2021-01-01T00:00:00.000Z',
                updatedAt: '2021-01-01T00:00:00.000Z',
                publishedAt: '2021-01-01T00:00:00.000Z',
              },
            },
          ],
        },
        createdAt: '2021-01-01T00:00:00.000Z',
        updatedAt: '2021-01-01T00:00:00.000Z',
        publishedAt: '2021-01-01T00:00:00.000Z',
      },
    },
  ];
};
