# Google Search Console Tracking Guide

## Overview

This guide helps you monitor the performance of your programmatic SEO pages and identify opportunities for optimization.

## Initial Setup

### 1. Verify Property in GSC

Ensure `https://manueldeceglie.it` is verified in Google Search Console.

### 2. Submit Sitemap

```
https://manueldeceglie.it/sitemap.xml
```

Check sitemap status regularly:
- **GSC → Sitemaps → Add sitemap URL**
- Monitor "Discovered URLs" vs "Indexed URLs"

### 3. Set Up URL Inspection

Test sample pages from each category:
- Service pages: `/ecommerce/modena`
- Niche pages: `/siti-web/ristoranti`
- Niche × City: `/siti-web/ristoranti/modena` (future)

## Key Metrics to Track

### 1. Impressions by Page Type

**Query**: Use Search Analytics filtering

| Page Pattern | Target Monthly Impressions | Current |
|--------------|----------------------------|---------|
| `/siti-web/[city]` | 10,000+ | Monitor |
| `/ecommerce/[city]` | 5,000+ | Monitor |
| `/landing-pages/[city]` | 3,000+ | Monitor |
| `/posizionamento-seo/[city]` | 4,000+ | Monitor |
| `/sviluppo-software/[city]` | 2,000+ | Monitor |
| `/sviluppo-app-mobile/[city]` | 1,500+ | Monitor |

**How to Filter**:
1. Go to **Performance → Search Results**
2. Click **+ New** → **Page**
3. Filter by URL pattern (e.g., `url contains '/ecommerce/'`)

### 2. Click-Through Rate (CTR) Goals

| Position | Target CTR |
|----------|------------|
| 1-3 | >25% |
| 4-7 | >10% |
| 8-10 | >5% |
| 11-20 | >2% |

**Low CTR Action Items**:
- Optimize meta title (add power words, numbers)
- Improve meta description (add CTA)
- Add schema markup (if missing)

### 3. Average Position Tracking

**Goal**: Move all pages from position 11+ to position 1-10

**Priority Order**:
1. Pages in position 4-10 (easiest wins)
2. Pages in position 11-20 (high potential)
3. Pages in position 21+ (long-term)

**Track Monthly**:
```
Export Performance data:
- Date range: Last 28 days
- Groupby: Page
- Filter: Position > 10
- Sort by: Impressions (descending)
```

## Query Analysis

### High-Value Queries (Your Data)

From your GSC report, these queries have **high impressions but 0 clicks**:

| Query | Impressions (12mo) | Current Position | Action |
|-------|-------------------|------------------|--------|
| realizzazione siti web modena | 1,840 | Monitor | Optimize `/siti-web/modena` |
| siti web modena | 1,190 | Monitor | Add FAQ, local context |
| realizzazione siti internet modena | 960 | Monitor | Internal linking |
| sviluppo app modena | 748 | Monitor | Check `/sviluppo-app-mobile/modena` |
| creazione siti web modena | 506 | Monitor | Content expansion |
| siti internet modena | 462 | Monitor | Schema markup |
| preventivo ecommerce modena | 377 | Monitor | Add to `/ecommerce/modena` |
| creazione siti web spilamberto | 364 | Monitor | NEW PAGE opportunity |
| realizzazione ecommerce modena | 155 | Monitor | Optimize e-commerce page |

### Opportunity Detection

**Weekly Check**:
1. **Performance → Search Results**
2. **Filter**: Impressions > 50, Clicks = 0
3. **Export** queries
4. **Identify** which pages to optimize

### New Page Opportunities

Queries suggesting new pages/niches:

```
"creazione siti wordpress modena" (148 imp) → Consider WordPress niche
"siti ecommerce modena" (202 imp) → Already covered ✅
"gestionale artigiani" → Consider adding "artigiani" niche
"software industria 4.0" → Add to software page content
```

## Competitor Analysis

### Track Competitor Rankings

**Target Competitors**:
1. Local web agencies in Modena/Bologna
2. National platforms (Wix, Squarespace Italian competitors)
3. Marketplace providers

**Method**:
1. Identify top 3 competitors for key queries
2. Use **Search Results → Queries** to see where you rank
3. Analyze their content for gaps

### Content Gap Analysis

For each competitor page ranking higher:
1. Note their unique selling points
2. Check their FAQ sections
3. Analyze their internal linking
4. Review their schema markup

## Indexing Health

### Monitor Coverage Report

**GSC → Coverage**

Target metrics:
- **Valid pages**: >95% of submitted pages
- **Excluded**: <5%
- **Error**: 0

**Common Issues**:
- "Crawled - currently not indexed" → Check content quality, add internal links
- "Discovered - currently not indexed" → Submit URL inspection
- "Duplicate without user-selected canonical" → Check canonical tags

### Fix Indexing Issues

**If pages aren't indexed**:
1. Request indexing via URL Inspection
2. Add internal links from high-authority pages
3. Submit sitemap again
4. Check `robots.txt` (should allow all pages)

## Monthly Reporting Template

### Track These Metrics Monthly

```markdown
## Month: [Month Year]

### Overall Performance
- Total Impressions: [number] (+/- %)
- Total Clicks: [number] (+/- %)
- Average Position: [number] (+/- )
- Average CTR: [%] (+/- %)

### Top Pages by Impressions
1. [URL] - [impressions] clicks, pos [X]
2. [URL] - [impressions] clicks, pos [X]
3. [URL] - [impressions] clicks, pos [X]

### Top Queries by Impressions
1. [query] - [impressions] clicks, pos [X]
2. [query] - [impressions] clicks, pos [X]
3. [query] - [impressions] clicks, pos [X]

### Pages to Optimize (0 clicks, >50 impressions)
- [URL] - [query] - pos [X]
- [URL] - [query] - pos [X]

### New Page Opportunities
- [query] - [impressions] - [suggested page]

### Actions Taken
- [ ] Optimized meta titles for [X] pages
- [ ] Added internal links to [X] pages
- [ ] Created new pages: [list]
- [ ] Fixed indexing for [X] pages
```

## Advanced Tracking

### Use Google Analytics 4

Track beyond GSC:
- **Engagement rate** per page type
- **Conversion rate** (form submissions)
- **User journey** (which pages lead to conversions)

### Set Up Goals

1. **Contact form submission**
2. **WhatsApp click**
3. **Phone call click**
4. **Pricing section view**

### UTM Parameters for Testing

Test which traffic sources convert best:
```
?utm_source=organic&utm_medium=google&utm_campaign=siti-web-modena
```

## Alerts to Set Up

### Google Search Console Alerts

Enable notifications for:
- Manual actions
- Coverage errors
- Index drops
- Security issues

### Custom Alerts (via Scripts)

Monitor:
- Pages with impressions >100 and CTR <1%
- New pages not indexed after 7 days
- Pages dropping >5 positions week-over-week

## Action Checklist

### Weekly
- [ ] Check new queries with >50 impressions, 0 clicks
- [ ] Request indexing for new pages (if any)
- [ ] Review coverage errors

### Monthly
- [ ] Export performance data
- [ ] Identify optimization opportunities
- [ ] Update content on underperforming pages
- [ ] Add new pages based on query gaps

### Quarterly
- [ ] Full competitor analysis
- [ ] Content refresh on top 20 pages
- [ ] Schema markup audit
- [ ] Internal linking review

## Resources

- **GSC Training**: https://support.google.com/webmasters/answer/9128668
- **SEO Checklist**: See `PROGRAMMATIC_SEO.md`
- **Page Generator**: See `src/lib/seo/page-generator.ts`

## Support

If you notice unusual drops or need help interpreting data:
1. Check GSC messages first
2. Review recent changes to pages
3. Compare with Google Algorithm updates
4. Analyze competitor movements
