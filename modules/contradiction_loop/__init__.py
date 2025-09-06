#!/usr/bin/env python3
"""
Contradiction Loop Module - Basic Implementation
"""


def process_segment(transcript_segment):
    """
    Process a transcript segment for contradiction patterns

    Args:
        transcript_segment (str): Text segment to analyze

    Returns:
        dict: Annotation result with required schema
    """

    # Simple pattern detection (would be more sophisticated in real implementation)
    denial_words = ["never", "didn't", "wasn't", "not true"]
    deflection_words = ["people", "they", "twist", "misunderstood"]
    commercial_words = ["merch", "drop", "buy", "shop", "limited"]

    segment_lower = transcript_segment.lower()

    has_denial = any(word in segment_lower for word in denial_words)
    has_deflection = any(word in segment_lower for word in deflection_words)
    has_commercial = any(word in segment_lower for word in commercial_words)

    if has_denial and has_deflection and has_commercial:
        pattern = "deny→deflect→sell"
        confidence = 0.85
    elif has_denial and has_deflection:
        pattern = "deny→deflect"
        confidence = 0.70
    elif has_denial and has_commercial:
        pattern = "deny→sell"
        confidence = 0.65
    else:
        pattern = "no_contradiction_detected"
        confidence = 0.10

    return {
        "segment_id": f"seg-{hash(transcript_segment) % 1000:03d}",
        "annotation_type": "contradiction_loop",
        "payload": {
            "pattern": pattern,
            "evidence": transcript_segment.split()[:10],  # First 10 words as evidence
            "detected_elements": {
                "denial": has_denial,
                "deflection": has_deflection,
                "commercial": has_commercial,
            },
        },
        "confidence": confidence,
    }
