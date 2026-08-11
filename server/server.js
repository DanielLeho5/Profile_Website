require("dotenv").config()
const express = require("express")
const { transporter, mailOptions } = require("./utils/nodemailer")
const app = express()
const cors = require("cors")

const PORT = process.env.PORT

app.use(express.json())
app.use(cors())

const router = express.Router()
app.use(
    router.post("/api/mail", async (req, res) => {
        try {
            const {name, email, phone, text} = req.body || {}
            if (!name || !email || !text) {return res.status(400).json({success: false, message: "Name, email and text are mandatory!"})}

            await transporter.sendMail(mailOptions(
                email,
                "### Inquiry from profile website! ###",
                `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "- Not provided"}\n\n${text}`
            ))

            return res.status(200).json({success: true, message: "Email sent successfully!"})
        } catch (error) {
            console.log(error)
            return (res.status(500).json({success: false, message: "Something went wrong!", error: error.message}))
        }
    })
)

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server started on port ${PORT}!`);
})