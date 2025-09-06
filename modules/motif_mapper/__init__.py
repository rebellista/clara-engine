#!/usr/bin/env python3
"""
Motif Mapper Module - Basic Implementation
"""

import re


def process_segment(transcript_segment):
    """
    Process a transcript segment for recurring motifs and patterns

    Args:
        transcript_segment (str): Text segment to analyze

    Returns:
        dict: Annotation result with required schema
    """

    # Common motif patterns
    commercial_motifs = [
        r"limited.{0,10}drop",
        r"exclusive.{0,10}merch",
        r"only.{0,10}available",
        r"special.{0,10}offer",
        r"limited.{0,10}time",
    ]

    emotional_motifs = [
        r"you.{0,10}know",
        r"honestly",
        r"literally",
        r"basically",
        r"trust.{0,10}me",
        r"believe.{0,10}me",
    ]

    deflection_motifs = [
        r"people.{0,10}say",
        r"they.{0,10}claim",
        r"everyone.{0,10}knows",
        r"out.{0,10}context",
        r"misunderstand",
    ]

    all_motifs = {
        "commercial": commercial_motifs,
        "emotional": emotional_motifs,
        "deflection": deflection_motifs,
    }

    detected_motifs = {}
    segment_lower = transcript_segment.lower()

    for category, patterns in all_motifs.items():
        for pattern in patterns:
            matches = re.findall(pattern, segment_lower)
            if matches:
                motif_key = pattern.replace(r".{0,10}", "_")
                detected_motifs[motif_key] = {
                    "category": category,
                    "frequency": len(matches),
                    "matches": matches,
                }

    # Calculate confidence based on number of detected motifs
    confidence = min(0.95, len(detected_motifs) * 0.25)

    return {
        "segment_id": f"seg-{hash(transcript_segment) % 1000:03d}",
        "annotation_type": "motif_mapper",
        "payload": {
            "detected_motifs": detected_motifs,
            "total_motifs": len(detected_motifs),
            "dominant_category": (
                max(
                    ["commercial", "emotional", "deflection"],
                    key=lambda cat: sum(
                        data["frequency"]
                        for data in detected_motifs.values()
                        if data["category"] == cat
                    ),
                )
                if detected_motifs
                else "none"
            ),
        },
        "confidence": confidence,
    }
