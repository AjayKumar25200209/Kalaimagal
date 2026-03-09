from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from . import models, schemas, database
from .utils.email import send_notification_email

# Create database tables
models.Base.metadata.create_all(bind=database.engine)

app = FastAPI(title="Kalaimagal Computer Astrology API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, restrict this to frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

SERVICES_DATA = [
    {
        "id": "astrology-prediction",
        "titleKey": "services.prediction.title",
        "descriptionKey": "services.prediction.desc",
        "iconKey": "predict"
    },
    {
        "id": "horoscope-calculation",
        "titleKey": "services.horoscope.title",
        "descriptionKey": "services.horoscope.desc",
        "iconKey": "horoscope"
    },
    {
        "id": "kp-astrology",
        "titleKey": "services.kp.title",
        "descriptionKey": "services.kp.desc",
        "iconKey": "kp"
    },
    {
        "id": "marriage-matching",
        "titleKey": "services.marriage.title",
        "descriptionKey": "services.marriage.desc",
        "iconKey": "marriage"
    },
    {
        "id": "baby-names",
        "titleKey": "services.baby.title",
        "descriptionKey": "services.baby.desc",
        "iconKey": "baby"
    },
    {
        "id": "lucky-gemstone",
        "titleKey": "services.gemstone.title",
        "descriptionKey": "services.gemstone.desc",
        "iconKey": "gemstone"
    },
    {
        "id": "japa-malai",
        "titleKey": "services.japamalai.title",
        "descriptionKey": "services.japamalai.desc",
        "iconKey": "japamalai"
    },
    {
        "id": "metal-rings",
        "titleKey": "services.rings.title",
        "descriptionKey": "services.rings.desc",
        "iconKey": "rings"
    },
    {
        "id": "hebrew-name-fixing",
        "titleKey": "services.hebrew.title",
        "descriptionKey": "services.hebrew.desc",
        "iconKey": "hebrew"
    }
]

@app.get("/services", response_model=list[schemas.ServiceResponse])
def get_services():
    return SERVICES_DATA

@app.post("/contact", response_model=schemas.ContactResponse)
def create_contact(contact: schemas.ContactCreate, db: Session = Depends(database.get_db)):
    # Save to db
    db_contact = models.Contact(**contact.model_dump())
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    
    # Send email notification
    send_notification_email(
        name=contact.name,
        email=contact.email,
        phone=contact.phone,
        message=contact.message
    )
    
    return db_contact
