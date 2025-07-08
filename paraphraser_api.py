from fastapi import FastAPI, Request
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
import torch

device = "cuda" if torch.cuda.is_available() else "cpu"

tokenizer = AutoTokenizer.from_pretrained("humarin/chatgpt_paraphraser_on_T5_base")
model = AutoModelForSeq2SeqLM.from_pretrained("humarin/chatgpt_paraphraser_on_T5_base").to(device)

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "FastAPI paraphrasing service is running!"}

@app.post("/paraphrase")
async def paraphrase_endpoint(request: Request):
    data = await request.json()
    question = data["text"]

    input_ids = tokenizer(
        f'paraphrase: {question}',
        return_tensors="pt", padding="longest",
        max_length=128,
        truncation=True,
    ).input_ids.to(device)

    outputs = model.generate(
        input_ids,
        temperature=0.7,
        repetition_penalty=10.0,
        num_return_sequences=3,
        no_repeat_ngram_size=2,
        num_beams=5,
        num_beam_groups=5,
        max_length=128,
        diversity_penalty=3.0,
    )

    res = tokenizer.batch_decode(outputs, skip_special_tokens=True)
    return {"paraphrases": res} 