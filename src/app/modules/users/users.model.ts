import { Schema, model } from 'mongoose'
import {
  IUserDetails,
  IUsers,
  UserDetailsModel,
  UsersModel,
} from './users.interface'
import bcrypt from 'bcrypt'

// User Modal
const usersSchema = new Schema<IUsers, UsersModel>(
  {
    fullName: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

// Check user exists
usersSchema.statics.isUserExist = async function (
  userId: string,
): Promise<IUsers | null> {
  return await Users.findOne({ userId }, { userId: 1, password: 1, role: 1 })
}

// Check user password
usersSchema.statics.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string,
): Promise<boolean> {
  return await bcrypt.compare(givenPassword, savedPassword)
}

export const Users = model<IUsers, UsersModel>('users', usersSchema)

// User Details

const userDetailsSchema = new Schema<IUserDetails>({
  id: { type: String, required: true },
  firstName: {
    type: String,
  },
  userId: {
    type: String,
    required: true,
  },
  role: {
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
  bio: {
    type: String,
  },
  profileImage: {
    type: String,
  },
  zipCode: {
    type: String,
  },
  skills: [{ index: Number, title: String }],

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
          title: {
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
          title: {
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

export const UserDetails = model<IUserDetails, UserDetailsModel>(
  'user-details',
  userDetailsSchema,
)
