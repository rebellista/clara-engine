# Clara Engine - GitHub Copilot Instructions

**ALWAYS reference these instructions first and fallback to search or additional context gathering only when the information here is incomplete or found to be in error.**

Clara Engine is a mythic-grade forensic dashboard for livestream analysis, deception profiling, and persona mapping. It is a Python-based Streamlit application with a modular architecture for processing livestream data and generating timestamped annotations.

## Current Repository State

This repository now contains a **working implementation** with:
- Functional Streamlit dashboard (`app.py`)
- Two implemented modules (contradiction_loop, motif_mapper)
- Comprehensive test suite (`tests/test_modules.py`)
- Dependencies file (`requirements.txt`)
- All validation commands work and pass

## Working Effectively

### Initial Setup
- **ALWAYS** start with these exact commands in order:
  - `pip3 install streamlit pytest black ruff --quiet` (takes ~1-2 seconds, timeout: 30 seconds)
  - `python3 --version` (verify Python 3.12+ available)
  - `streamlit --version` (verify Streamlit installation)

### Project Architecture
- **Main application**: Streamlit dashboard for real-time annotation
- **Module system**: Located in `modules/` directory, each module processes transcript segments
- **Expected module structure**:
  ```python
  def process_segment(transcript_segment):
      return {
          "segment_id": "seg-001",
          "annotation_type": "module_name", 
          "payload": {...},
          "confidence": 0.0-1.0
      }
  ```

### Development Workflow
- **Create modules** in `modules/[module_name]/` directories
- **Main entry point**: Create `app.py` or similar for Streamlit dashboard
- **Testing**: Use pytest for all test files (pattern: `test_*.py`)
- **Linting**: ALWAYS run `ruff check .` and `black --check .` before committing

### Build and Run Commands
- **Run Streamlit app**: `streamlit run app.py --server.headless true --server.port 8501`
  - Takes ~3-5 seconds to start, timeout: 30 seconds
  - NEVER CANCEL: Wait for "You can now view your Streamlit app" message
  - Test locally at http://localhost:8501
  - **If port in use**: Use `--server.port 8502` or `--server.port 8503`
- **Run tests**: `python3 -m pytest -v` (takes ~0.02 seconds, timeout: 30 seconds)
- **Format code**: `black .` (takes ~0.1 seconds, timeout: 10 seconds)
- **Lint code**: `ruff check .` (takes ~0.1 seconds, timeout: 10 seconds)
- **Full CI chain**: `ruff check . && black --check . && python3 -m pytest -v` (takes ~0.4 seconds total)

### Testing Requirements
- **Unit tests**: Test each module's `process_segment()` function
- **Integration tests**: Test full annotation pipeline
- **Format validation**: Ensure all module outputs follow the JSON schema
- **MANUAL VALIDATION REQUIRED**: After any changes:
  1. Start Streamlit app: `streamlit run app.py`
  2. Load sample data or create test input
  3. Verify dashboard displays annotations correctly
  4. Test at least one complete annotation workflow
  5. Verify JSON output format matches expected schema

### File Structure
```
clara-engine/
├── README.md                    # Project overview
├── CONTRIBUTING.md             # Contributor guidelines  
├── app.py                     # Main Streamlit dashboard ✅ IMPLEMENTED
├── requirements.txt           # Python dependencies ✅ CREATED
├── modules/                   # Module implementations
│   ├── contradiction_loop/    # Deception detection ✅ IMPLEMENTED
│   │   └── __init__.py       # Module logic with process_segment()
│   └── motif_mapper/         # Pattern detection ✅ IMPLEMENTED
│       └── __init__.py       # Module logic with process_segment()
├── tests/                    # Test files ✅ IMPLEMENTED
│   └── test_modules.py       # Comprehensive module tests
└── .github/
    ├── copilot-instructions.md # This file ✅ CREATED
    └── workflows/
        └── blank.yml          # Basic CI (needs implementation)
```

## Validation Scenarios

**CRITICAL**: ALWAYS test these complete end-to-end scenarios after making changes:

### Scenario 1: Basic Module Function
1. Create or modify a module in `modules/[name]/`
2. Test the module: `python3 -c "from modules.[name] import process_segment; print(process_segment('test'))"`
3. Verify output has required fields: segment_id, annotation_type, payload, confidence

### Scenario 2: Streamlit Dashboard
1. Run `streamlit run app.py --server.headless true --server.port 8501`
2. NEVER CANCEL: Wait for "You can now view your Streamlit app" message (~5 seconds)
3. Dashboard displays Clara Engine title, capabilities, and module testing interface
4. Test with sample transcript: "I never said that. People twist my words. Check out the limited drop merch!"
5. Click "Analyze Segment" button and verify JSON annotations appear
6. Verify both contradiction_loop and motif_mapper results are displayed

### Scenario 3: Full Development Cycle
1. Install dependencies: `pip3 install streamlit pytest black ruff`
2. Create/modify code
3. Format: `black .`
4. Lint: `ruff check .` (must pass)
5. Test: `python3 -m pytest -v` (must pass)
6. Manual validation: Run app and test functionality
7. Ready for commit

## Common Tasks

### Creating a New Module
1. `mkdir modules/[module_name]`
2. Create `modules/[module_name]/__init__.py` with `process_segment()` function
3. Implement the required JSON schema output
4. Create corresponding test in `tests/test_[module_name].py`
5. Add module to main dashboard imports in `app.py`
6. Run `python3 -m pytest -v` to verify tests pass

### Dependencies Management
- **Core deps**: `streamlit pytest black ruff`
- **Install time**: ~1-2 seconds total
- **Install from file**: `pip3 install -r requirements.txt`
- **Update requirements**: `pip3 freeze | grep -E "(streamlit|pytest|black|ruff)" > requirements.txt`

### Running CI Locally
- **Lint check**: `ruff check . && echo "Lint passed"`
- **Format check**: `black --check . && echo "Format passed"` 
- **Test run**: `python3 -m pytest -v && echo "Tests passed"`
- **App test**: `streamlit run app.py` (manual verification required)

## Troubleshooting

### "No implementation code found"
- **Fixed**: Repository now has working implementation with app.py, modules, and tests
- **Action**: Run `streamlit run app.py` to see the dashboard in action

### "Streamlit port already in use"
- **Solution**: Use different port: `--server.port 8502` or `--server.port 8503`
- **Or**: Find and kill existing process: `lsof -ti:8501 | xargs kill -9`

### "Module import errors"
- **Ensure**: All module directories have `__init__.py` files
- **Check**: Python path includes modules directory
- **Verify**: Module structure matches expected format

### "Tests failing"
- **Run single test**: `python3 -m pytest tests/test_[name].py -v`
- **Debug mode**: `python3 -m pytest --pdb tests/test_[name].py`
- **Verify**: All modules return proper JSON schema format

## Module Specifications

### Existing Module Implementations
1. **contradiction_loop**: Detects deny→deflect→sell patterns and emotional dissonance
   - Status: ✅ **IMPLEMENTED** with full test coverage
2. **motif_mapper**: Tracks commercial, emotional, and deflection motifs with regex patterns
   - Status: ✅ **IMPLEMENTED** with full test coverage

### Required JSON Output Schema
```json
{
  "segment_id": "string",
  "annotation_type": "string", 
  "payload": {},
  "confidence": 0.0-1.0
}
```

## Key Files Reference

### README.md Summary
Clara Engine is a dashboard for livestream analysis with capabilities for deception profiling, persona mapping, motif tracking, and clip logging. Built for creators, journalists, educators, and analysts.

### CONTRIBUTING.md Summary  
Welcomes collaborators who build with emotional clarity and forensic rigor. Modules should feel like cinematic lenses and serve emotional clarity.

### Current Workflow (.github/workflows/blank.yml)
Basic GitHub Actions workflow that only echoes "Hello, world!" - needs implementation for actual CI/CD.

## CRITICAL REMINDERS
- **NEVER CANCEL** Streamlit startup - wait for "You can now view your Streamlit app" message (~5 seconds)
- **ALWAYS** run linting and formatting before committing: `ruff check . && black --check .`
- **MANUAL VALIDATION REQUIRED** - run the app and test functionality after any changes
- **WORKING IMPLEMENTATION** - repository now has functional code, build on existing structure
- **Test coverage maintained** - all modules have comprehensive tests that must pass