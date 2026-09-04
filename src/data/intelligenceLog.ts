/**
 * Data Decision Consulting Intelligence Log
 *
 * The dated, observable record of the Search Intelligence loop in action.
 * Two provenances live here so their different standards never blur:
 *
 *  - CHANGELOG (system): records which observable parts of the site changed,
 *    why, and which protected assets were deliberately left untouched.
 *  - EXPERIMENT (learning): records a change made with a metric, an owner, a
 *    baseline and a status. Only an experiment with a stated metric and a
 *    date is listed as implemented.
 *
 * Nothing here fabricates outcomes. An experiment without a closed result is
 * marked active or pending-review, never "won".
 */

export type LogKind = 'changelog' | 'experiment';
export type LogStatus = 'applied' | 'active' | 'pending-review' | 'left-unchanged';

export interface IntelligenceLogEntry {
  entryId: string;
  date: string; // ISO date
  kind: LogKind;
  status: LogStatus;
  title: string;
  body: string;
  /** For changelog entries, the protected assets that were deliberately untouched. */
  untouched?: string;
  /** For experiment entries, the metric that will judge the change. */
  metric?: string;
}

export const intelligenceLog: IntelligenceLogEntry[] = [
  {
    entryId: 'log-01',
    date: '2026-08-28',
    kind: 'changelog',
    status: 'applied',
    title: 'Search Intelligence Engine published',
    body: 'Added the observable scoring model: query intent taxonomy, weighted opportunity formula, striking-distance classes, three gap engines, AI-search signal layers and competitor view. All protected Insights left untouched.',
    untouched: 'All 40 protected Insight files: none modified.',
  },
  {
    entryId: 'log-02',
    date: '2026-08-28',
    kind: 'experiment',
    status: 'active',
    title: 'AI Citation Dependency: measure source concentration risk',
    body: 'Extending the AI Citation Index framework from a concept into a research-backed measurement treatment. Outcome is not yet closed; the claim remains framework-level until the measurement run completes.',
    metric:
      'Share of cited sources concentrated in fewer than 5 roots across a sampled surface set.',
  },
  {
    entryId: 'log-03',
    date: '2026-08-28',
    kind: 'changelog',
    status: 'applied',
    title: 'Intelligence Log opened',
    body: 'Created the dated record that separates the site changelog from the experiment ledger, so every observable decision and its status can be inspected.',
    untouched: 'No content assets changed by this entry.',
  },
  {
    entryId: 'log-04',
    date: '2026-08-28',
    kind: 'changelog',
    status: 'left-unchanged',
    title: 'Protected insights verified',
    body: 'Re-verified the complete Insight library before adding intelligence layers. No insight was rewritten, deleted, merged, redirected or renamed.',
    untouched: '40 protected insight .md files confirmed byte-identical in substance.',
  },
];

export const logSummary = {
  implemented:
    'Intelligence model, scoring logic, gap engines, query lab, competitor view, log page.',
  recommended:
    'Research-backed treatments for AI citation dependency and AI visibility scoring remain pending-open outcome.',
};
