import React from 'react';

import {TooltipExamples} from '../components/Tooltip/Examples';
import {TooltipForm, TooltipFormData} from '../components/Tooltip/Form';
import {TooltipPreview} from '../components/Tooltip/Preview';
import {Page, PageExamples, PagePreview, PageSidebar} from '../components/Page';

const TooltipPage = (): React.ReactElement => {
  const [preview, setPreview] = React.useState<TooltipFormData | null>(null);

  return (
    <Page title='Tooltip'>
      <PageSidebar>
        <TooltipForm onSubmit={setPreview} />
      </PageSidebar>

      <PagePreview>
        <TooltipPreview content={preview} />
      </PagePreview>

      <PageExamples>
        <TooltipExamples />
      </PageExamples>
    </Page>
  );
};

export {TooltipPage};
