import { notFound } from 'next/navigation';
import { getPageFromSlug } from '../../utils/content.js';
import { getComponentForSection } from '../../components/index.jsx';

export default async function ComposablePage({ params }) {
  const { slug } = params;

  const pageSlug = slug.join('/');

  try {
    const page = await getPageFromSlug(`/${pageSlug}`);

    if (!page) {
      return notFound();
    }

    return (
      <div data-sb-object-id={page.id}>
        {(page.sections || []).map((section, idx) => {
          const Component = getComponentForSection(section);
          return <Component key={idx} {...section} />;
        })}
      </div>
    );
  } catch (error) {
    console.error(error.message);
    return notFound();
  }
}
