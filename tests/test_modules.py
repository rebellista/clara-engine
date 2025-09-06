#!/usr/bin/env python3
"""
Test suite for Clara Engine modules
"""

import sys
import os
import pytest

# Add modules directory to path
sys.path.append(os.path.join(os.path.dirname(__file__), "..", "modules"))

from contradiction_loop import process_segment as cl_process
from motif_mapper import process_segment as mm_process


class TestContradictionLoop:
    """Test cases for contradiction_loop module"""

    def test_basic_contradiction_pattern(self):
        """Test detection of deny->deflect->sell pattern"""
        test_input = "I never said that. People twist my words. Check out the limited drop merch!"
        result = cl_process(test_input)

        assert result["annotation_type"] == "contradiction_loop"
        assert "segment_id" in result
        assert "payload" in result
        assert result["confidence"] > 0.8
        assert result["payload"]["pattern"] == "deny→deflect→sell"

    def test_no_contradiction(self):
        """Test input with no contradiction patterns"""
        test_input = "Today I want to talk about my experience with streaming."
        result = cl_process(test_input)

        assert result["annotation_type"] == "contradiction_loop"
        assert result["confidence"] < 0.2
        assert result["payload"]["pattern"] == "no_contradiction_detected"

    def test_partial_contradiction(self):
        """Test partial contradiction patterns"""
        test_input = "I never said that, people just don't understand."
        result = cl_process(test_input)

        assert result["annotation_type"] == "contradiction_loop"
        assert result["payload"]["pattern"] == "deny→deflect"
        assert result["confidence"] >= 0.7


class TestMotifMapper:
    """Test cases for motif_mapper module"""

    def test_commercial_motifs(self):
        """Test detection of commercial motifs"""
        test_input = "This is a limited time offer for exclusive merch!"
        result = mm_process(test_input)

        assert result["annotation_type"] == "motif_mapper"
        assert result["payload"]["total_motifs"] > 0
        assert result["payload"]["dominant_category"] == "commercial"

    def test_emotional_motifs(self):
        """Test detection of emotional motifs"""
        test_input = "You know, honestly, trust me on this one, literally."
        result = mm_process(test_input)

        assert result["annotation_type"] == "motif_mapper"
        assert result["payload"]["total_motifs"] > 0
        assert result["confidence"] > 0.0

    def test_no_motifs(self):
        """Test input with no detectable motifs"""
        test_input = "Simple statement with no patterns."
        result = mm_process(test_input)

        assert result["annotation_type"] == "motif_mapper"
        assert result["payload"]["total_motifs"] == 0
        assert result["payload"]["dominant_category"] == "none"


class TestModuleSchema:
    """Test that all modules follow the required schema"""

    @pytest.mark.parametrize("process_func", [cl_process, mm_process])
    def test_required_schema_fields(self, process_func):
        """Test that all modules return required schema fields"""
        result = process_func("test input")

        # Required fields
        assert "segment_id" in result
        assert "annotation_type" in result
        assert "payload" in result
        assert "confidence" in result

        # Data types
        assert isinstance(result["segment_id"], str)
        assert isinstance(result["annotation_type"], str)
        assert isinstance(result["payload"], dict)
        assert isinstance(result["confidence"], (int, float))

        # Value ranges
        assert 0.0 <= result["confidence"] <= 1.0
