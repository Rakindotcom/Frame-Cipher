# SEO Improvements Guide

## What's Been Implemented

### 1. Meta Tags (Next.js Metadata)
- **Primary meta tags**: Title, description, keywords, author
- **Open Graph tags**: For Facebook, LinkedIn, and other social platforms
- **Twitter Card tags**: For Twitter/X sharing
- **Canonical URL**: Prevents duplicate content issues
- **Robots meta**: Allows search engine indexing

### 2. Structured Data (JSON-LD)
Added schema.org Organization markup in `app/layout.jsx` for:
- Business name and description
- Contact information
- Address
- Services offered
- Logo

### 3. SEO Files
- **robots.txt**: Tells search engines what to crawl
- **sitemap.xml**: Lists all pages for search engines

## Important: Create a Better Open Graph Image

Currently using your logo for social sharing. For better results:

### Recommended Image Specs
- **Size**: 1200x630 pixels (Facebook/LinkedIn standard)
- **Format**: PNG or JPG
- **File size**: Under 1MB
- **Content**: Should include:
  - Your logo
  - Tagline: "Cinematic Media Production"
  - Visual elements (camera, film, or your best work)
  - Brand colors (purple/blue gradient)

### How to Add
1. Create the image (use Canva, Figma, or Photoshop)
2. Save as `og-image.png` in the `public` folder
3. Update `app/layout.jsx` so `openGraph.images` and `twitter.images` use `/og-image.png`

## Testing Your SEO

### 1. Open Graph Testing
- **Facebook**: https://developers.facebook.com/tools/debug/
- **LinkedIn**: https://www.linkedin.com/post-inspector/
- **Twitter**: https://cards-dev.twitter.com/validator

### 2. Google Search Console
1. Go to https://search.google.com/search-console
2. Add your property: `framecipher.info`
3. Verify ownership (DNS or HTML file method)
4. Submit your sitemap: `https://framecipher.info/sitemap.xml`
5. Request indexing for important pages

### 3. Rich Results Test
- Test structured data: https://search.google.com/test/rich-results
- Enter your URL to verify JSON-LD markup

## Google Search Appearance Timeline

After deploying these changes:
- **Immediate**: New visitors see proper meta tags
- **1-3 days**: Google may re-crawl your site
- **1-2 weeks**: Search results update with new description
- **2-4 weeks**: Full indexing of all pages

### Speed Up Google Indexing
1. Submit sitemap in Google Search Console
2. Use "Request Indexing" for key pages
3. Share your site on social media (creates backlinks)
4. Update content regularly

## Additional SEO Tips

### Content Optimization
- Add alt text to all images
- Use descriptive URLs
- Include keywords naturally in content
- Create blog content (if applicable)

### Performance
- Optimize images (compress before uploading)
- Enable caching
- Use CDN (Vercel already does this)
- Minimize JavaScript

### Mobile Optimization
- Already responsive (✓)
- Test on mobile devices
- Check mobile-friendly test: https://search.google.com/test/mobile-friendly

### Local SEO (Bangladesh)
- Create Google Business Profile
- Add location-specific keywords
- Get listed in local directories

## Monitoring

### Track These Metrics
- Google Search Console: Impressions, clicks, position
- Google Analytics: Traffic sources, user behavior
- Social shares: Monitor engagement

### Regular Updates
- Update sitemap when adding pages
- Refresh meta descriptions quarterly
- Monitor and fix broken links
- Keep content fresh

## Current Meta Description
"Premium media production agency specializing in commercial video production, product campaigns, professional photography, and brand strategy. Transform your vision into cinematic reality."

This appears in Google search results. You can customize it per page by exporting `metadata` from the relevant file in `app/`.
