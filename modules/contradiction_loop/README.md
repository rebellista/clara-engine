# Contradiction Loop Detector

This module detects emotional dissonance and contradiction loops in livestream speech.

## Input
- Transcript segments from `sample_livestream.json`

## Output
- Annotations like:
```json
{
  "segment_id": "seg-001",
  "annotation_type": "contradiction_loop",
  "payload": {
    "pattern": "deny→deflect→sell",
    "evidence": ["I never said that", "People twist my words", "Focus on the merch"]
  },
  "confidence": 0.78
}
