// Imports the defined file
import dotenv from 'dotenv'

//  Load .env after importing
dotenv.config()

// Defines the Environment
export const NODE_ENV = process.env.NODE_ENV

// Sets the Port
export const PORT = process.env.PORT || 8000
