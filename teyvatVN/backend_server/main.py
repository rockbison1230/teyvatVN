from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import os
import json

app = FastAPI()

# Allow frontend to access this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5137"],  # your React app
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define where chapter data is stored
DATA_DIR = os.path.join(os.path.dirname(__file__), "data")

# Pydantic model for chapter data
class ChapterData(BaseModel):
    title: str
    characters: list[str]
    backgrounds: list[str]
    setting_narration: str
    segments: list[dict]

# Helper: get path to output.json for a chapter
def get_chapter_path(username: str, chapter_id: str) -> str:
    folder = os.path.join(DATA_DIR, username, chapter_id)
    os.makedirs(folder, exist_ok=True)
    return os.path.join(folder, "output.json")

# API: Get chapter
@app.get("/api/chapter/{username}/{chapter_id}")
def get_chapter(username: str, chapter_id: str):
    path = get_chapter_path(username, chapter_id)
    if not os.path.exists(path):
        return {"message": "Chapter not found", "data": None}
    with open(path, "r", encoding="utf-8") as f:
        return {"message": "Loaded", "data": json.load(f)}

# API: Save chapter
@app.post("/api/chapter/{username}/{chapter_id}")
def save_chapter(username: str, chapter_id: str, chapter: ChapterData):
    path = get_chapter_path(username, chapter_id)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(chapter.dict(), f, indent=2, ensure_ascii=False)
    return {"message": f"Chapter saved to {username}/{chapter_id}/output.json"}

# Mount the /data directory for direct file access
app.mount("/data", StaticFiles(directory=DATA_DIR), name="data")


# ---- MAIN ENTRY ----
if __name__ == "__main__":
    import uvicorn
    # parent_drirectory = os.getcwd()

    # print(f"the parent directory is {parent_drirectory}")
    
    # sample_text = r"teyvatVN\backend_server\data\dawn\chapter1\prompt.txt"
    
    
    

    # # smaple_text = os.path.join(parent_drirectory, sample_path)
   
    # #print(f"text path is {sample_path}")
    # #print("the content is")
    # with open(sample_text, "w") as f:
    #         #content = file.read()  # Read the entire content of the file
    #         print("This is another line.", file=f)
    
    uvicorn.run("main:app", host="127.0.0.1", port=4000, reload=True)
