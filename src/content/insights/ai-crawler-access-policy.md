---
title: 'AI crawler access: robots.txt, bot policies and what llms.txt does not do'
description: 'Separate search discovery, user-requested retrieval and model training; then write a crawler policy you can explain and verify.'
publishedDate: 2026-08-24
updatedDate: 2026-08-24
category: 'Technical access'
readingMinutes: 13
author: 'DataDecision Research'
featured: true
methodologyVersion: 'Crawler policy note v1.0'
sources:
  - label: 'OpenAI: publishers and developers FAQ'
    url: 'https://help.openai.com/en/articles/12627856-publishers-and-developers-faq'
  - label: 'Anthropic: web crawler controls'
    url: 'https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler'
  - label: 'Perplexity: crawler documentation'
    url: 'https://docs.perplexity.ai/docs/resources/perplexity-crawlers'
  - label: 'Google: common crawlers and Google-Extended'
    url: 'https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers'
  - label: 'Google: generative AI search optimization guidance'
    url: 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?hl=en'
  - label: 'llms.txt proposal'
    url: 'https://llmstxt.org/'
---

<div class="answer-first">
  <p class="evidence-label">Answer first / checked 24 Aug 2026</p>
  <p><strong>Do not “allow AI” with one blanket robots.txt rule.</strong> Search indexing, user-requested retrieval and model-training collection are different purposes, and major providers expose different controls. Decide each purpose separately, publish the rule, verify access in logs where possible, and treat <code>llms.txt</code> as an experimental navigation aid—not a ranking, citation or crawler-permission mechanism.</p>
</div>

## What is agent-crawlability?

Agent-crawlability is the observable ability of a named automated system to request and read a public resource under the site’s technical and policy controls. It is narrower than “AI visibility.” A page can be fetchable and never cited. A page can also appear through a search index or third-party source even when a particular training crawler is blocked.

The useful stack has four layers:

1. **Policy:** what each named user-agent is allowed to request.
2. **Access:** whether the request passes the CDN, firewall and application.
3. **Readability:** whether the response contains useful, accessible content.
4. **Observation:** whether the page appears, is described accurately or sends a visit during a measured window.

Passing one layer does not prove the next.

## Separate the purposes before writing the file

Provider documentation now makes the separation concrete:

| Provider control   | Documented purpose                                                                 | Launch policy used by DataDecision       | Reason                                                       |
| ------------------ | ---------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------ |
| `OAI-SearchBot`    | OpenAI search discovery                                                            | Allow                                    | Search visibility is in scope                                |
| `GPTBot`           | Potential OpenAI model-training collection                                         | Disallow                                 | Training permission is a separate decision                   |
| `ChatGPT-User`     | User-requested retrieval                                                           | Allow                                    | Supports a user asking ChatGPT to access a public page       |
| `Claude-SearchBot` | Anthropic search quality/indexing                                                  | Allow                                    | Search visibility is in scope                                |
| `ClaudeBot`        | Potential Anthropic model-training collection                                      | Disallow                                 | Training permission is separate                              |
| `Claude-User`      | User-requested retrieval                                                           | Allow                                    | Supports user-directed access                                |
| `PerplexityBot`    | Perplexity search indexing, not foundation-model training                          | Allow                                    | Provider documents it as a search crawler                    |
| `Perplexity-User`  | User-requested retrieval                                                           | Provider says it may ignore robots rules | Treat as a request path, not a policy guarantee              |
| `Google-Extended`  | Controls certain Gemini training and grounding uses; does not affect Google Search | Disallow                                 | Google Search remains allowed through normal search controls |

These descriptions were checked on **24 August 2026** against [OpenAI](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq), [Anthropic](https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler), [Perplexity](https://docs.perplexity.ai/docs/resources/perplexity-crawlers) and [Google](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers). Recheck them before adopting the table: names and purposes can change.

The policy is not universal advice. A publisher, regulated firm or rights-sensitive archive may choose differently. The important practice is that the choice is explicit and per purpose.

## A defensible robots.txt pattern

The launch file for this site uses separate groups:

```text
User-agent: *
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: GPTBot
Disallow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: ClaudeBot
Disallow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Disallow: /
```

The general group allows ordinary search crawling. The named groups express separate choices for search, user retrieval and training-related collection. A CDN or bot-management system can still block allowed crawlers, so robots policy must be checked against actual response behavior.

## How do you verify crawler access?

**Logs before opinions.** Use the controls you actually own:

1. Request `robots.txt` from the public origin and confirm the deployed file is current.
2. Check that key pages return an appropriate success status without client-only rendering or authentication.
3. Review server or CDN logs for documented user-agent strings and request paths where those logs are available.
4. Verify provider IPs only when the provider publishes a current verification method. A user-agent string alone can be spoofed.
5. Record the test date, environment, requested URL, response status and body-readability result.
6. Keep access findings separate from later mention or citation observations.

Static hosting can limit server-log access. In that case, document the limitation rather than claiming verification you did not perform.

## What does llms.txt do?

The [llms.txt project](https://llmstxt.org/) describes a proposed Markdown file that gives agents an overview and links to useful material. It can be a compact, maintainable map of a documentation-heavy site.

It is not:

- a robots permission system;
- a replacement for semantic, accessible HTML;
- a standard required by major search engines;
- evidence that a page was fetched, indexed or cited;
- a placement signal you can measure by adding the file alone.

Google’s current [generative AI search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?hl=en) says Google Search does not use `llms.txt` files for its generative search features and that they neither help nor harm Google Search visibility. DataDecision publishes a small `llms.txt` because it is inexpensive to maintain as a navigation aid, while labeling the file experimental.

If you add one, set an acceptance criterion you can actually test: valid format, working links, accurate descriptions and a documented owner. Do not set “more AI citations” as the acceptance criterion unless you have a measurement design capable of testing that claim.

## Does schema make an AI engine cite you?

No special schema guarantees inclusion in generated answers. Structured data can still be useful when it accurately represents visible page content and supports conventional search features. Keep it factual, validate it and avoid markup for reviews, clients, products or credentials that are not visible and verified.

Readability work should begin with the human page:

- one clear H1;
- descriptive headings;
- direct definitions near the relevant question;
- tables whose headers identify the comparison;
- accessible links and forms;
- server-rendered core content;
- dates and update notes on volatile technical guidance.

That is good publishing practice even when no automated system consumes the page.

## Verification checklist

| Item                   | Evidence                            | Pass condition                            | Limitation                                  |
| ---------------------- | ----------------------------------- | ----------------------------------------- | ------------------------------------------- |
| Public robots file     | Live response body                  | Named policies match the approved matrix  | Compliance remains voluntary                |
| Key-page access        | Status and rendered text            | Anonymous request receives useful content | CDN behavior may differ by requester        |
| Bot request            | Verified log record where available | Documented user-agent/IP method matches   | No request does not prove permanent absence |
| Structured data        | Validator and visible page          | Markup matches visible facts              | Eligibility is not appearance               |
| llms.txt               | Valid file and link check           | Accurate map, no broken links             | Experimental; no ranking claim              |
| Visibility observation | Published sampling method           | Dated query frame and captured output     | Access does not prove citation              |

Download the [crawler-policy decision matrix](/downloads/crawler-policy-decision-matrix.csv) and adapt it to your own rights, search and product requirements.

## Decision rules

> **Cheap to publish, cheap to verify, never a guarantee.**

- Separate search, user retrieval and training controls.
- Write a reason beside every named rule.
- Verify the deployed response and access path.
- Treat `llms.txt` as an experimental map, not a control plane.
- Do not turn crawler access into a citation promise.
- Recheck provider documentation on every policy review date.
