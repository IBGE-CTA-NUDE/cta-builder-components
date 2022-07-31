import {AccordionFormData} from './Form';

interface AccordionPreviewProps {
  content: AccordionFormData['accordion'];
}

const Preview: React.FC<AccordionPreviewProps> = ({
  content = [],
}): React.ReactElement | null => {
  if (!content || content.length === 0) {
    return null;
  }

  if (content.length === 1) {
    return (
      <cta-accordion name={content[0].trigger}>
        {content[0].content}
      </cta-accordion>
    );
  }

  return (
    <>
      {content.map(({trigger, content}) => (
        <cta-accordion-group key={trigger}>
          <cta-accordion name={trigger}>
            {content}
          </cta-accordion>
        </cta-accordion-group>
      ))}
    </>
  );
};

const PreviewCode: React.FC<AccordionPreviewProps> = ({
  content = [],
}): React.ReactElement | null => {
  if (!content || content.length === 0) {
    return null;
  }

  if (content.length === 1) {
    return (
      <div style={{borderRadius: '5px', padding: '15px', backgroundColor: '#e5e5e5'}}>
        <pre>
          <code>
            {`
<cta-accordion name="${content[0].trigger}">
  ${content[0].content}
</cta-accordion>
          `}
          </code>
        </pre>
      </div>
    );
  }

  return (
    <div style={{borderRadius: '5px', padding: '15px', backgroundColor: '#e5e5e5'}}>
      <pre>
        <code>
          {`
<cta-accordion-group>
          ${
    content.map(({trigger, content}) => `
  <cta-accordion name="${trigger}">
    ${content}
  </cta-accordion>`).join('\n')
    }

</cta-accordion-group>
          `}
        </code>
      </pre>
    </div>
  );
};

const AccordionPreview: React.FC<AccordionPreviewProps> = ({
  content = [],
}): React.ReactElement | null => {
  return (
    <>
      <Preview content={content} />
      <PreviewCode content={content} />
    </>
  );
};

export {AccordionPreview};
