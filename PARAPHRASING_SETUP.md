# Job Description Paraphrasing Setup

This setup adds AI-powered paraphrasing functionality to job descriptions in your Next.js application.

## Prerequisites

- Python 3.8 or higher
- Node.js and npm
- CUDA-compatible GPU (optional, for faster processing)

## Setup Instructions

### 1. Install Python Dependencies

```bash
pip install -r requirements.txt
```

### 2. Start the FastAPI Service

```bash
uvicorn paraphraser_api:app --reload --port 8000
```

The FastAPI service will be available at `http://localhost:8000`

### 3. Start Your Next.js Application

```bash
npm run dev
```

Your Next.js app will be available at `http://localhost:3000`

## How It Works

1. **FastAPI Service** (`paraphraser_api.py`):
   - Uses the `humarin/chatgpt_paraphraser_on_T5_base` model
   - Provides a `/paraphrase` endpoint that accepts text and returns 3 paraphrased versions
   - Runs on port 8000

2. **Next.js API Route** (`src/app/api/rephrase/route.ts`):
   - Acts as a bridge between your frontend and the FastAPI service
   - Handles error cases and provides a clean interface

3. **Frontend Integration** (`src/app/jobs/jobPageInner.tsx`):
   - Adds a "Rephrase Description" button to each job listing
   - Shows loading state while paraphrasing
   - Displays 3 alternative descriptions when ready

## Features

- **AI-Powered Paraphrasing**: Uses state-of-the-art T5 model for high-quality paraphrasing
- **Multiple Variations**: Generates 3 different paraphrased versions of each description
- **Loading States**: Shows feedback while processing
- **Error Handling**: Graceful fallback if the service is unavailable
- **Caching**: Once paraphrased, results are cached to avoid repeated API calls

## Usage

1. Navigate to the jobs page
2. Find any job listing
3. Click the "Rephrase Description" button (sparkles icon)
4. Wait for the AI to generate alternative descriptions
5. View the 3 different paraphrased versions below the original description

## Troubleshooting

- **Service not responding**: Make sure the FastAPI service is running on port 8000
- **Slow performance**: Consider using a GPU for faster processing
- **Memory issues**: The model requires significant RAM, ensure you have at least 4GB available

## Customization

You can modify the paraphrasing parameters in `paraphraser_api.py`:
- `temperature`: Controls randomness (0.0-1.0)
- `num_return_sequences`: Number of paraphrased versions
- `max_length`: Maximum length of output text 