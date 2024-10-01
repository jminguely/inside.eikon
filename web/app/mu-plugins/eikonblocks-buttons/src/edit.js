import { useBlockProps, InspectorControls, PanelColorSettings, __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import './editor.scss';

// Mapping of hex values to color slugs
const colorMap = {
  '#0000DE': 'blue',
  '#000000': 'black',
  '#FFFFFF': 'white',
  '#FF2C00': 'red',
  '#FF5F1C': 'orange',
  '#FF3EAD': 'fuchsia',
  '#FFA1CE': 'pink',
  '#A000FF': 'violet',
};

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { items, backgroundColor, textColor } = attributes;

  const handleItemChange = (index, value) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], ...value };
    setAttributes({ items: newItems });
  };

  const handleTitleChange = (index, title) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], title };
    setAttributes({ items: newItems });
  };

  const handleStyleChange = (index, style) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], style };
    setAttributes({ items: newItems });
  };

  const addItem = () => {
    setAttributes({ items: [...items, { url: '', opensInNewTab: false, title: '', style: 'plain' }] });
  };

  // Get the color slugs from the hex values
  const bgColorSlug = colorMap[backgroundColor] || '';
  const textColorSlug = colorMap[textColor] || '';

  return (
    <>
      <InspectorControls>
        <PanelColorSettings
          title={__('Color Settings', 'eikonblocks')}
          initialOpen={true}
          colorSettings={[
            {
              value: backgroundColor,
              onChange: (value) => setAttributes({ backgroundColor: value }),
              label: __('Background Color', 'eikonblocks'),
            },
            {
              value: textColor,
              onChange: (value) => setAttributes({ textColor: value }),
              label: __('Text Color', 'eikonblocks'),
            },
          ]}
        />
      </InspectorControls>
      <div {...useBlockProps()} style={{ backgroundColor: backgroundColor, color: textColor, padding: '20px', borderRadius: '5px' }}>
        {items.map((item, index) => (
          <div key={index} style={{ marginBottom: '20px', padding: '10px', background: 'white', color: 'black', border: '1px solid #ddd', borderRadius: '5px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              {__('Titre du bouton', 'eikonblocks')}
              <input
                type="text"
                value={item.title || ''}
                onChange={(e) => handleTitleChange(index, e.target.value)}
                placeholder={__('Enter title', 'eikonblocks')}
                style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '3px', border: '1px solid #ccc' }}
              />
            </label>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              {__('Lien', 'eikonblocks')}
              <LinkControl
                value={item}
                onChange={(value) => handleItemChange(index, value)}
                settings={[
                  {
                    id: 'opensInNewTab',
                    title: __('Open in new tab', 'eikonblocks'),
                  },
                ]}
                style={{ width: '100%' }}
              />
            </label>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              {__('Style', 'eikonblocks')}
              <select
                value={item.style}
                onChange={(e) => handleStyleChange(index, e.target.value)}
                style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }}
              >
                <option value="plain">{__('Plain', 'eikonblocks')}</option>
                <option value="outline">{__('Outline', 'eikonblocks')}</option>
              </select>
            </label>
          </div>
        ))}
        <button
          onClick={addItem}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007cba',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
          }}
        >
          {__('Ajouter un bouton', 'eikonblocks')}
        </button>
      </div>
    </>
  );
}