from google import genai
from google.genai import types
import vertexai
from vertexai.generative_models import GenerativeModel, Part, SafetySetting
from vertexai.preview.prompts import Prompt
import base64
import os
import time
import json


def generate_beats(chapter_data):
    model = "gemini-2.5-flash-001"


    system_instructions = r"""
    You are a playwright tasked with writing a dramatic chapter in play format, give the story beats in a overview manner so that others can expand upon them with more in-depth dialogue actions and narration. 
    Your task:  
    Generate a high-level scene outline for this chapter. Structure it as a list of multiple numbered beats. Each beat should include the location (within the setting), which characters are involved, and what key event or tension occurs. There should be an entire chapter structure with a beginning, rising action and a clear end 
    Return in a list format that contains multiple beat jsons in the following structure:

    {
    location: "" ,
    Characters: [],
    Key_Event: ""
    }
    For locations, keep them simple, and if a location changes between beats, that in of itself is a beat, with a key_event labeled "transition"
    """
    

    if chapter_data is None:

        # these are dynamic variables to be added
        characters = ["Diluc", "Kaeya"]
        start_setting = "Angel's Share"
        story_direction = r"""
        The Windblume Festival has just ended and the city is winding down its celebrations. Diluc's employees have returned to the winery and the city's inhabitants are all tucking in for the night. Diluc is nursing a glass of red wine alone in the tavern, no one to cut him off. The silence feels almost too much after hours of shouts accompanying him. when the door swings open, hard enough to ricochet off the tavern wall, diluc doesnt look up. he already knows who it is. it's kaeya. his smile is arrogant, sharp, annoying as always. diluc can't look away.
        """
    else:
        characters = chapter_data["characters"]
        start_setting = chapter_data["start_setting"]
        story_direction = chapter_data["story_direction"]


    vertexai.init(
        project="primeval-span-452802-i9",
        location="us-east5",
        api_endpoint="us-east5-aiplatform.googleapis.com"
    )
    model = "gemini-2.5-flash-001"

    input_prompt = f"""
    {system_instructions}
    
    * **Characters:** {characters}
    * **Setting:** {start_setting}
    * **Initial Story Direction:**
    {story_direction}

    
    """

    generation_config = {
        "max_output_tokens": 2048,
        "temperature": 1,
        "top_p": 0.95,
        #"response_mime_type": "application/json",
        #"response_schema": {"type":"OBJECT","properties":{"5 Star Walk-In Review":{"type":"STRING"},"5 Star drive-In Review":{"type":"STRING"},"4 Star Walk-In Review":{"type":"STRING"},"4 Star drive-In Review":{"type":"STRING"}}},
    }

    safety_settings = [
        SafetySetting(
            category=SafetySetting.HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold=SafetySetting.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
        ),
        SafetySetting(
            category=SafetySetting.HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold=SafetySetting.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
        ),
        SafetySetting(
            category=SafetySetting.HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold=SafetySetting.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
        ),
        SafetySetting(
            category=SafetySetting.HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold=SafetySetting.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
        ),
    ]
    prompt = Prompt(
        prompt_data=[input_prompt],
        model_name="gemini-2.0-flash-001",
        generation_config=generation_config,
        safety_settings=safety_settings,
    )

    # Generate content using the assembled prompt. Change the index if you want
    # to use a different set in the variable value list.
    responses = prompt.generate_content(
        contents=prompt.assemble_contents(**prompt.variables[0]),
    )
    #print(responses.text)


    return responses.text