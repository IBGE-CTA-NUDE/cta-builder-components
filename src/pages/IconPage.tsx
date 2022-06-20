import React from 'react';

import {IconExamples} from '../components/Icon/Examples';
import {IconForm, IconFormData} from '../components/Icon/Form';
import {IconPreview} from '../components/Icon/Preview';
import {Page, PageExamples, PagePreview, PageSidebar} from '../components/Page';

const IconPage = (): React.ReactElement => {
  const [preview, setPreview] = React.useState<IconFormData | null>(null);

  return (
    <Page title='Icon'>
      <PageSidebar>
        <IconForm onSubmit={setPreview} />
      </PageSidebar>

      <PagePreview>
        <IconPreview content={preview} />
      </PagePreview>

      <PageExamples>
        <IconExamples />
      </PageExamples>
    </Page>
  );
};

export {IconPage};
