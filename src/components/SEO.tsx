import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://phoenixconstructionwoodstock.com';
const PHONE = '+1-678-463-4893';
const PHONE_DISPLAY = '(678) 463-4893';
const ADDRESS = {
  street: '2295 Towne Lake Pkwy Suite 116-164',
  city: 'Woodstock',
  state: 'GA',
  zip: '30188',
  country: 'US',
};
const LOGO = `${SITE_URL}/phoenix_construction_no_bg.png`;

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  breadcrumbs?: BreadcrumbItem[];
  localBusiness?: {
    cityName: string;
    citySlug: string;
    services: string[];
    latitude?: number;
    longitude?: number;
  };
  serviceSchema?: {
    name: string;
    description: string;
    areaServed?: string[];
  };
  faqSchema?: FAQItem[];
  articleSchema?: {
    datePublished: string;
    dateModified?: string;
    headline: string;
  };
  reviewSchema?: {
    reviews: Array<{
      author: string;
      datePublished: string;
      reviewBody: string;
      ratingValue: number;
      serviceType?: string;
    }>;
    aggregateRating: {
      ratingValue: number;
      reviewCount: number;
    };
  };
}

export default function SEO({
  title,
  description,
  canonical,
  image = LOGO,
  breadcrumbs,
  localBusiness,
  serviceSchema,
  faqSchema,
  articleSchema,
  reviewSchema,
}: SEOProps) {
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : undefined;
  const ogImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  const schemas: object[] = [];

  // Breadcrumb schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: crumb.name,
        item: `${SITE_URL}${crumb.url}`,
      })),
    });
  }

  // LocalBusiness schema for area pages
  if (localBusiness) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'HomeAndConstructionBusiness',
      name: 'Phoenix Construction',
      image: LOGO,
      url: `${SITE_URL}/${localBusiness.citySlug}`,
      telephone: PHONE,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: ADDRESS.street,
        addressLocality: ADDRESS.city,
        addressRegion: ADDRESS.state,
        postalCode: ADDRESS.zip,
        addressCountry: ADDRESS.country,
      },
      ...(localBusiness.latitude && {
        geo: {
          '@type': 'GeoCoordinates',
          latitude: localBusiness.latitude,
          longitude: localBusiness.longitude,
        },
      }),
      areaServed: {
        '@type': 'City',
        name: localBusiness.cityName,
        addressRegion: 'GA',
        addressCountry: 'US',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `Home Remodeling Services in ${localBusiness.cityName}, GA`,
        itemListElement: localBusiness.services.map((svc) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `${svc} in ${localBusiness.cityName}, GA`,
            provider: {
              '@type': 'HomeAndConstructionBusiness',
              name: 'Phoenix Construction',
              telephone: PHONE,
            },
          },
        })),
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '150',
        bestRating: '5',
        worstRating: '1',
      },
    });
  }

  // Service schema for service pages
  if (serviceSchema) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: serviceSchema.name,
      description: serviceSchema.description,
      provider: {
        '@type': 'HomeAndConstructionBusiness',
        name: 'Phoenix Construction',
        telephone: PHONE,
        address: {
          '@type': 'PostalAddress',
          streetAddress: ADDRESS.street,
          addressLocality: ADDRESS.city,
          addressRegion: ADDRESS.state,
          postalCode: ADDRESS.zip,
          addressCountry: ADDRESS.country,
        },
        url: SITE_URL,
      },
      areaServed: (serviceSchema.areaServed ?? [
        'Woodstock, GA',
        'Marietta, GA',
        'Roswell, GA',
        'Milton, GA',
        'Alpharetta, GA',
        'Canton, GA',
        'Cherokee County, GA',
      ]).map((area) => ({ '@type': 'AdministrativeArea', name: area })),
      url: canonicalUrl,
    });
  }

  // FAQ schema
  if (faqSchema && faqSchema.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqSchema.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    });
  }

  // Article schema for blog posts
  if (articleSchema) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: articleSchema.headline,
      datePublished: articleSchema.datePublished,
      dateModified: articleSchema.dateModified ?? articleSchema.datePublished,
      image: ogImage,
      author: {
        '@type': 'Organization',
        name: 'Phoenix Construction',
        url: SITE_URL,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Phoenix Construction',
        logo: { '@type': 'ImageObject', url: LOGO },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl ?? SITE_URL },
    });
  }

  // Review + AggregateRating schema
  if (reviewSchema) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'HomeAndConstructionBusiness',
      name: 'Phoenix Construction',
      image: LOGO,
      url: SITE_URL,
      telephone: PHONE,
      address: {
        '@type': 'PostalAddress',
        streetAddress: ADDRESS.street,
        addressLocality: ADDRESS.city,
        addressRegion: ADDRESS.state,
        postalCode: ADDRESS.zip,
        addressCountry: ADDRESS.country,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: reviewSchema.aggregateRating.ratingValue.toString(),
        reviewCount: reviewSchema.aggregateRating.reviewCount.toString(),
        bestRating: '5',
        worstRating: '1',
      },
      review: reviewSchema.reviews.map((r) => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: r.author },
        datePublished: r.datePublished,
        reviewBody: r.reviewBody,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: r.ratingValue.toString(),
          bestRating: '5',
          worstRating: '1',
        },
        ...(r.serviceType && {
          itemReviewed: {
            '@type': 'Service',
            name: r.serviceType,
            provider: { '@type': 'HomeAndConstructionBusiness', name: 'Phoenix Construction' },
          },
        }),
      })),
    });
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:type" content={articleSchema ? 'article' : 'website'} />
      <meta property="og:site_name" content="Phoenix Construction" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Robots */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Structured data */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
