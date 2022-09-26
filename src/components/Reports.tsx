import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  reports: {
    id: number;
    img: string;
    title: string;
    category: string;
    date: string;
  }[];
  groupNum: number;
}

const Reports: FC<Props> = ({ reports, groupNum }) => {
  useEffect(() => {
    if(reports.length % groupNum !== 0) {
      for(let i = 0; i < reports.length % groupNum; i++) {
        reports.push({ id: 0, img: "", title: "", category: "", date: "" });
      }
    }
  }, [reports, groupNum]);

  const reportsGroup = reports.reduce((acc, cur, i) => {
    if (i % groupNum === 0) {
      acc.push([cur]);
    } else {
      acc[acc.length - 1].push(cur);
    }
    return acc;
  }, [] as { id: number; img: string; title: string; category: string; date: string }[][]);

  const [page, setPage] = useState(1);
  const maxPage = reportsGroup.length;

  return (
    <>
      <div className="bg-cyan-100 rounded">
        <h1 className="text-xl text-center py-4">新規記事</h1>
        <div className="flex items-center justify-between flex-wrap">
          {reportsGroup[(page - 1)].map((report, index) => (
            report.id !== 0 ? (
              <div key={report.id} className="w-full lg:w-1/2 animate-slide-in-elliptic-top-fwd">
                <Link
                  to={'/report/' + report.id}
                  className="hover:opacity-80"
                >
                  <div className="px-4 pb-6 relative">
                    <div className="bg-white rounded-lg">
                      <img src={report.img} alt={report.title} className="w-full h-48 object-cover" />
                      <div className="flex justify-start items-center px-12 py-2 h-20">
                        <p className="text-md text-left line-clamp-2">
                          {report.title}
                        </p>
                      </div>
                      <p className="text-sm text-right pr-2 pb-1">{report.date}</p>
                      <span className="top-2 left-6 absolute bg-cyan-100 text-xs px-2 py-1 rounded-full">
                        {report.category}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ) : (
              <div key={index} className="w-full lg:w-1/2">
                <div className="px-4 pb-6">
                  <div>
                    <div className="h-48" />
                    <div className="px-4 py-2 h-20">
                      <p className="text-md">&nbsp;</p>
                    </div>
                    <p className="text-sm pr-2 pb-1">&nbsp;</p>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        {
          page > 1 ?
          <button
            onClick={() => setPage(page - 1)}
          >
            <p className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm mr-2 hover:bg-cyan-100">
              {'<'}
            </p>
          </button>
          :
          <p className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm mr-2"></p>
        }
          <p className="text-md mr-2">{page} / {maxPage}</p>
        {
          page < maxPage ?
          <button
            onClick={() => setPage(page + 1)}
          >
            <p className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm mr-2 hover:bg-cyan-100">
              {'>'}
            </p>
          </button>
          :
          <p className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm mr-2"></p>
        }
      </div>
    </>
  );
}

export default Reports;