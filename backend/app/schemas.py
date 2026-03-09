from pydantic import BaseModel, EmailStr
from datetime import datetime

class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    message: str

class ContactResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    phone: str
    message: str
    created_at: datetime

    class Config:
        from_attributes = True

class ServiceResponse(BaseModel):
    id: str
    titleKey: str
    descriptionKey: str
    iconKey: str
