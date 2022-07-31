import {TooltipFormData} from './Form';

interface TooltipPreviewProps {
  content: TooltipFormData | null;
}

const Preview: React.FC<TooltipPreviewProps> = ({
  content,
}): React.ReactElement | null => {
  if (!content) {
    return null;
  }

  return (
    <cta-tooltip text={content.tooltip}>
      {content.content}
    </cta-tooltip>
  );
};

const PreviewCode: React.FC<TooltipPreviewProps> = ({
  content,
}): React.ReactElement | null => {
  if (!content) {
    return null;
  }

  return (
    <div style={{borderRadius: '5px', padding: '15px', backgroundColor: '#e5e5e5'}}>
      <pre>
        <code>
          {`
<cta-tooltip text="${content.tooltip}">
  ${content.content}
</cta-tooltip>
          `}
        </code>
      </pre>
    </div>
  );
};

const TooltipPreview: React.FC<TooltipPreviewProps> = ({
  content = null,
}): React.ReactElement | null => {
  return (
    <>
      <Preview content={content} />
      <PreviewCode content={content} />
    </>
  );
};

export {TooltipPreview};
