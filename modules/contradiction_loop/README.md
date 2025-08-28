# Contradiction Loop Detector

This module detects emotional dissonance and contradiction loops in livestream speech.  
It identifies timestamped patterns like denial, deflection, and commercial pivoting—revealing emotional volatility and mythic fracture.

---

## 📥 Input  
- Transcript segments from `sample_livestream.json`

---

## 📤 Output  
Annotations like:

```json
{
  "segment_id": "seg-001",
  "annotation_type": "contradiction_loop",
  "payload": {
    "pattern": "deny→deflect→sell",
    "evidence": [
      "I never said that",
      "People twist my words",
      "Focus on the merch"
    ]
  },
  "confidence": 0.78
}

