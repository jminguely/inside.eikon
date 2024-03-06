import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { selectedPosts } = attributes;

  return (
    <div {...useBlockProps.save()}>
      {selectedPosts.map((post) => (
        <div key={post.id}>
          <RichText.Content tagName="h2" value={post.title.rendered} />
          {post.featured_image_src && (
            <img src={post.featured_image_src} alt={post.title.rendered} />
          )}
        </div>
      ))}
    </div>
  );
}