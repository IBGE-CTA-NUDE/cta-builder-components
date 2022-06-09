import React from 'react';

import {AccordionExamples} from '../components/Accordion/Examples';
import {AccordionForm, AccordionFormData} from '../components/Accordion/Form';
import {AccordionPreview} from '../components/Accordion/Preview';
import {Page, PageExamples, PagePreview, PageSidebar} from '../components/Page';

const AccordionPage = (): React.ReactElement => {
  const [preview, setPreview] = React.useState<AccordionFormData['accordion']>([]);

  return (
    <Page title='Accordion'>
      <PageSidebar>
        <AccordionForm onSubmit={setPreview} />
      </PageSidebar>

      <PagePreview>
        <AccordionPreview content={preview} />
      </PagePreview>

      <PageExamples>
        <AccordionExamples />
      </PageExamples>
    </Page>
  );
};

export {AccordionPage};
