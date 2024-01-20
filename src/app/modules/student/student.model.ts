import { Schema, Types, model } from 'mongoose'
import { IStudent, StudentModel } from './student.Interface'

const studentsSchema = new Schema<IStudent>({
  id: { type: String, required: true },
  firstName: {
    type: String,
  },
  userId: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  birthDate: {
    type: String,
  },
  country: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  zipCode: {
    type: String,
  },
  socialProfile: [
    {
      facebook: {
        type: String,
      },
      instagram: {
        type: String,
      },
      linkedin: {
        type: String,
      },
      youtube: {
        type: String,
      },
      github: {
        type: String,
      },
    },
  ],
  career: [
    {
      aboutMe: [{ index: Number, title: String }],
      education: [
        {
          institution: {
            type: String,
          },
          location: {
            type: String,
          },
          startYear: {
            type: Number,
          },
          endYear: {
            type: Number,
          },
          result: {
            type: Number,
          },
          description: {
            type: String,
          },
        },
      ],
      experience: [
        {
          institution: {
            type: String,
          },
          location: {
            type: String,
          },
          startYear: {
            type: Number,
          },
          endYear: {
            type: Number,
          },
          result: {
            type: Number,
          },
          description: {
            type: String,
          },
        },
      ],
      skills: [{ index: Number, title: String }],
      certifications: [
        { index: Number, title: String, year: Number, credential: String },
      ],
    },
  ],
})

export const Students = model<IStudent, StudentModel>(
  'students',
  studentsSchema,
)
