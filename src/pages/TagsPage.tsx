import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Introduce from '../components/Introduce';
import Categories from '../components/Categories';
import Tags from '../components/Tags';
import Reports from '../components/Reports';
import Knowledges from '../components/Knowledges';
import Search from '../components/Search';

import Report from '../libs/interfaces/report';
import Category from '../libs/interfaces/category';
import Tag from '../libs/interfaces/tag';
import Knowledge from '../libs/interfaces/knowledge';

import { getReportsMock } from '../libs/mocks/reports';
import { getCategoriesMock } from '../libs/mocks/categories';
import { getIntroduceMock } from '../libs/mocks/introduce';
import { getKnowledgeMock } from '../libs/mocks/knowledges';
import { getTagsMock } from '../libs/mocks/tags';

interface Props {
  reports: Report[];
  categories: Category[];
  tags: Tag[];
  knowledges: Knowledge[];
}

const TagsList: FC<Props> = ({ reports, categories, tags, knowledges }) => {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <div className='container mx-auto flex flex-wrap'>
        <div className='w-full lg:w-3/4 mx-auto'>
          <div className='my-12 mx-6'>
            <Reports data={reports} groupNum={4} findReports={{ category: Number(id), tag: 0, search: '' }} />
          </div>
          <div className='my-12 mx-6'>
            <Knowledges data={knowledges} groupNum={5} findKnowledges={{ category: Number(id), tag: 0, search: '' }} />
          </div>
        </div>
        <div className='w-full lg:w-1/4 mx-auto'>
          <div className='my-12 mx-6'>
            <Introduce data={getIntroduceMock()} />
          </div>
          <div className='my-12 mx-6'>
            <Search />
          </div>
          <div className='my-12 mx-6'>
            <Categories data={categories} />
          </div>
          <div className='my-12 mx-6'>
            <Tags data={tags} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TagsList;