# Local performance comparison

Measured on 6 October 2026 against Vite's production preview with Chromium, a 390 × 844 viewport, 4× CPU throttling, 150 ms network latency, and 200,000 bytes/second download throughput. Each figure is the median of three fresh browser contexts. External analytics/editing requests were blocked in both runs.

| Metric | Before | After |
| --- | ---: | ---: |
| Homepage JavaScript response bodies (compressed bytes) | 200,923 | 115,173 |
| First contentful paint | 2,120 ms | 1,360 ms |
| DOMContentLoaded | 1,649 ms | 1,069 ms |

Homepage JavaScript transfer fell by 42.7%. Route modules now load on demand. The build enforces a 145,000-byte gzip budget on the entry module and its static dependencies; the browser measure above also includes homepage chunks loaded dynamically.

Timing is a local lab observation, not a field-performance or Core Web Vitals claim. First paint may include the loading state and does not establish that all content or interactions are ready. DOMContentLoaded is also not an application-readiness metric. Browser-level heading checks confirm that the homepage eventually renders in each run. Production hosting, cache behavior, compression and third-party scripts can change these figures.

The build produces route-specific titles, descriptions, canonical links and Open Graph metadata for 46 routes, plus a sitemap. This improves metadata availability without JavaScript; full page content is still rendered by React. Assess full prerendering separately if search-discovery needs justify the additional complexity.
