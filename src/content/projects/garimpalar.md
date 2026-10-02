---
title: Garimpalar
description: A property data ingestion project that collects and normalizes real estate listings from multiple sources.
kind: project
category: Data Platform
status: active
draft: false
featured: true
technologies:
  - Python
  - Crawling
  - Data Pipelines
order: 1
slug: garimpalar
---

## Context

Garimpalar started from a problem I had experienced personally.

While looking for a house to buy, I was repeatedly visiting the same
real-estate websites to check whether new properties had appeared.

I built an early crawler in Node.js using Puppeteer to automate part of
that process. After I eventually bought a house, the project was abandoned.

Years later, while learning Python, I decided to revisit the idea from
scratch — this time thinking beyond a single crawler.

The goal is to build a system capable of collecting property listings
from multiple sources, normalizing them into a common model, and eventually
supporting features such as search, maps and property alerts.

## Starting with data discovery

One of the first questions was how to discover available listings without
depending on browser automation.

While investigating real-estate websites, I found that some expose
sitemaps containing large sets of property URLs.

For Chaves na Mão, the first source implemented, the sitemap became the
entry point for the ingestion process.

This avoids navigating search-result pages simply to discover listings
and provides a structured source of candidate URLs.

The current implementation processes one child sitemap while I validate
the ingestion strategy.

## Prefer structured data over page scraping

The original Node.js prototype depended heavily on Puppeteer.

For the Python implementation, I wanted to avoid browser automation when
the same information could be obtained more directly.

During the investigation I found that property pages expose structured
JSON-LD data using Schema.org's `RealEstateListing` representation.

Instead of extracting values from presentation-oriented DOM elements, the
parser reads this structured data and maps fields such as price, currency,
property type, bedrooms, bathrooms, floor area, address and coordinates
into a common domain model.

This reduces coupling to the visual structure of the website, although
it introduces a different dependency: the source must continue publishing
the expected structured-data shape.

## Normalizing different sources

The long-term goal is not to expose each website's representation directly.

Each source should have its own crawling and parsing logic while producing
the same normalized `Property` model.

Conceptually:

Multiple Sources
→ Source-specific Crawlers
→ Normalized Property Model
→ Persistence
→ API
→ Web / Search / Map / Alerts

PostgreSQL is planned as the persistence layer, but persistence and the
API are not implemented yet.

The current work is focused on validating whether different real-estate
sources provide enough compatible information to make this normalization
strategy practical.

## Using browser automation only as a fallback

Not every URL discovered through the sitemap could be parsed successfully.

While investigating those failures, I found that some sitemap URLs were
stale. Property information can be reflected in the URL, so changes to a
listing may result in a new URL while the old address redirects to it.

Instead of making browser automation the default crawling strategy,
Garimpalar follows a cheaper path first:

HTTP request
→ JSON-LD extraction
→ success

When that fails because of a stale URL:

HTTP request
→ parsing failure
→ Playwright
→ resolve current URL
→ HTTP request
→ JSON-LD extraction

This keeps browser automation outside the common path while still handling
a real behavior observed in the source website.

The trade-off is additional complexity in the fallback path, and its
failure handling still needs to become more robust.

## Testing the ingestion boundaries

The crawler, parser and URL resolver are separated enough to test their
behavior independently.

The current suite uses pytest and mocks the HTTP, parser and resolver
boundaries.

Tests cover cases including:

- successful property extraction
- stale URL resolution
- request and HTTP failures
- invalid JSON-LD
- missing listing data
- numeric and text normalization
- coordinate normalization
- source ID extraction

This keeps the unit tests deterministic and independent from the live
website.

The trade-off is that these tests cannot detect changes made by the source
website itself, so integration-level validation remains a future concern.

## Current status

Garimpalar is currently an ingestion prototype, not a finished product.

The first source adapter is implemented and the next step is to investigate
additional real-estate websites and determine which property fields are
consistently available across them.

That will test one of the project's main architectural assumptions:
whether multiple source-specific crawlers can reliably converge into the
same normalized property model.

Persistence, API, search, maps and alerts come after that assumption has
been validated.