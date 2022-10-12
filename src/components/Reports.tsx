import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Report from '../libs/interfaces/report';

interface Props {
  data: Report[];
  groupNum: number;
  findReports: {
    search: string;
    category: number;
    tag: number;
  };
}

const Reports: FC<Props> = ({ data, groupNum, findReports }) => {
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    // find
    if (findReports.category !== 0)
      setReports(data.filter((report) => report.attributes.category.data.id === findReports.category));
    else if (findReports.tag !== 0)
      setReports(data.filter((report) => report.attributes.tags.data.some((tag) => tag.id === findReports.tag)));
    else if (findReports.search !== '')
      setReports(
        data.filter((report) => report.attributes.title.toLowerCase().includes(findReports.search.toLowerCase())),
      );
    else setReports(data);
  }, [data, findReports]);

  // pseudo-element
  const reportsWithoutDummy = reports.filter((report) => report.id !== 0);
  if (reportsWithoutDummy.length % groupNum !== 0) {
    for (let i = reportsWithoutDummy.length - 1; i < reportsWithoutDummy.length % groupNum; i++) {
      reportsWithoutDummy.push({
        id: 0,
        attributes: {
          img: { data: { id: 0, attributes: { name: '', url: '' } } },
          title: `dummy${i}`,
          body: '',
          category: { data: { id: 0, attributes: { name: '', createdAt: '', updatedAt: '', publishedAt: '' } } },
          tags: { data: [] },
          createdAt: '',
          updatedAt: '',
          publishedAt: '',
        },
      });
    }
  }

  // group
  const reportsGroup = reportsWithoutDummy.reduce((acc, cur, i) => {
    if (i % groupNum === 0) {
      acc.push([cur]);
    } else {
      acc[acc.length - 1].push(cur);
    }
    return acc;
  }, [] as Report[][]);

  // page
  const [page, setPage] = useState(1);
  const maxPage = reportsGroup.length;

  return (
    (reportsGroup.length > 0 && (
      <>
        <div className='card-color rounded'>
          <h1 className='text-xl text-center py-4'>新規記事</h1>
          <div className='flex items-center justify-between flex-wrap'>
            {reportsGroup[page - 1].map((report) =>
              report.id !== 0 ? (
                <div key={report.id} className='w-full lg:w-1/2 animate-fade-in'>
                  <Link to={'/report/' + report.id} className='hover:opacity-80'>
                    <div className='px-4 pb-6 relative'>
                      <div className='card-color rounded-lg shadow-md border-2 border-[#094067]'>
                        {report.attributes.img.data ? (
                          <img
                            src={`${window.location.origin}${report.attributes.img.data.attributes.url}`}
                            alt={report.attributes.title}
                            className='w-full h-48 object-cover'
                          />
                        ) : (
                          <div className='w-full h-48 bg-gray-200'></div>
                        )}
                        <div className='flex justify-start items-center px-6 py-2 h-20'>
                          <p className='text-md text-left line-clamp-2'>{report.attributes.title}</p>
                        </div>
                        <p className='text-sm text-right pr-2 pb-1'>
                          {report.attributes.createdAt.split('T')[0].split('-').join('/')}
                        </p>
                        <span className='top-2 left-6 absolute bg-cyan-100 text-xs px-2 py-1 rounded-full'>
                          {report.attributes.category.data && report.attributes.category.data.attributes.name}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ) : (
                <div key={report.attributes.title} className='w-full lg:w-1/2'>
                  <div className='px-4 pb-6'>
                    <div className='border-2 opacity-0'>
                      <div className='h-48' />
                      <div className='px-4 py-2 h-20'>
                        <p className='text-md'>&nbsp;</p>
                      </div>
                      <p className='text-sm pr-2 pb-1'>&nbsp;</p>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
        <div className='flex items-center justify-center mt-4'>
          {page > 1 ? (
            <button onClick={() => setPage(page - 1)} className='mr-2'>
              <p className='w-8 h-8 card-color rounded-full flex items-center justify-center text-sm hover:bg-cyan-100'>
                {'<'}
              </p>
            </button>
          ) : (
            <p className='w-8 h-8 card-color rounded-full flex items-center justify-center text-sm mr-2' />
          )}
          <p className='text-md mr-2'>
            {page} / {maxPage}
          </p>
          {page < maxPage ? (
            <button onClick={() => setPage(page + 1)} className='mr-2'>
              <p className='w-8 h-8 card-color rounded-full flex items-center justify-center text-sm hover:bg-cyan-100'>
                {'>'}
              </p>
            </button>
          ) : (
            <p className='w-8 h-8 card-color rounded-full flex items-center justify-center text-sm mr-2' />
          )}
        </div>
      </>
    )) ||
    null
  );
};

export default Reports;
