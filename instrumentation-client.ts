import posthog from "posthog-js";

posthog.init('phc_AtQPBMWBjgLhPQcqTeRTTNvntWbFezkEqZ28u2mqLRM', {
  api_host: "https://us.i.posthog.com",
  ui_host: "https://us.posthog.com",
  defaults: '2025-05-24',
  capture_exceptions: true,
});
