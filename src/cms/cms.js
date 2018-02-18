import CMS from 'netlify-cms';
import 'netlify-cms/dist/cms.css';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);

CMS.registerPreviewTemplate('upcomingevents', BlogPostPreview);
CMS.registerPreviewTemplate('pastevents', BlogPostPreview);
CMS.registerPreviewTemplate('codeofconduct', BlogPostPreview);
CMS.registerPreviewTemplate('sponsorship', BlogPostPreview);
CMS.registerPreviewTemplate('team', BlogPostPreview);
CMS.registerPreviewTemplate('faq', BlogPostPreview);
CMS.registerPreviewTemplate('contact', BlogPostPreview);