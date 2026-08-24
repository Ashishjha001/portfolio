# Deployment checklist

The current GitHub Pages workflow deploys only pushes to `master`. The rebuild branch is safe for review and must not be merged without explicit production approval.

## Before approval

- [ ] Complete every item in `FOUNDER_INPUT_REQUIRED.md` that affects public facts.
- [ ] Obtain founder/legal review of privacy, terms, cookie and accessibility drafts.
- [ ] Configure and test the production form endpoint.
- [ ] Decide whether analytics is required; implement consent and policy changes first.
- [ ] Run `npm run qa` from a clean install.
- [ ] Re-run desktop/mobile visual, keyboard and reduced-motion QA.
- [ ] Validate structured data, `robots.txt`, `sitemap.xml` and `llms.txt` from the built output.
- [ ] Confirm the current branch and commit SHA.
- [ ] Review the branch diff against `master`; resolve all P0/P1 findings.

## Production approval

- [ ] Receive explicit approval to merge/deploy.
- [ ] Merge through the approved GitHub workflow; do not push directly to `master` without approval.
- [ ] Confirm GitHub Pages build success.
- [ ] Verify `public/CNAME` still resolves to `datadecision.consulting`.
- [ ] Verify HTTPS certificate and canonical redirects without changing DNS unless separately authorized.
- [ ] Submit or revalidate the sitemap in the approved search-console accounts.
- [ ] Verify live form success/failure and privacy disclosures.
- [ ] Verify the live crawler policy and record the review date.

## After launch

- [ ] Capture the day-0 self-case observation.
- [ ] Schedule comparable day-30, day-60 and day-90 observations.
- [ ] Monitor broken links and form delivery.
- [ ] Review provider crawler documentation at each policy review.
- [ ] Add security headers at the delivery layer if the hosting platform supports them; GitHub Pages does not accept an application-level header configuration from this static build.
