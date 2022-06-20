import {IconFormData} from './Form';

interface IconPreviewProps {
  content: IconFormData | null;
}

const Preview: React.FC<IconPreviewProps> = ({
  content,
}): React.ReactElement | null => {
  if (!content) {
    return null;
  }

  return (
    <cta-icon name={content.icon} width={content.width} height={content.height}></cta-icon>
  );
};

const PreviewCode: React.FC<IconPreviewProps> = ({
  content,
}): React.ReactElement | null => {
  if (!content) {
    return null;
  }

  return (
    <div style={{borderRadius: '5px', padding: '15px', backgroundColor: '#e5e5e5'}}>
      <pre>
        <code>{`
<cta-icon name="${content.icon}" width="${content.width}" height="${content.height}" ></cta-icon>
          `}</code>
      </pre>
    </div>
  );
};

const IconPreview: React.FC<IconPreviewProps> = ({
  content,
}): React.ReactElement | null => {
  return (
    <>
      <Preview content={content} />
      <PreviewCode content={content} />
    </>
  );
};

export {IconPreview};
