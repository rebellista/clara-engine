# Motif Mapper

This module tracks recurring phrases, props, and emotional beats across livestream segments.  
It reveals symbolic repetition, manipulation cycles, and mythic motifs that shape digital personas.

---

## 📥 Input  
- Transcript segments with `media_ref`

---

## 📤 Output  
Annotations like:

```json
{
  "motif": "limited drop",
  "frequency": 3,
  "timestamps": [25.0, 39.2, 58.1],
  "confidence": 0.91
}
