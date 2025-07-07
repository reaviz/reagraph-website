import posthog from "posthog-js";

posthog.init('phc_AtQPBMWBjgLhPQcqTeRTTNvntWbFezkEqZ28u2mqLRM', {
  api_host: "/ingest",
  ui_host: "https://us.posthog.com",
  defaults: '2025-05-24',
  capture_exceptions: true, // This enables capturing exceptions using Error Tracking, set to false if you don't want this
  // debug: process.env.NODE_ENV === "development",
});
