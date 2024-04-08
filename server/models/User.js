// Import the Mongoose library
const mongoose = require("mongoose");
// Define the user schema using the Mongoose Schema constructor
const userSchema = new mongoose.Schema(
	{
		// Define the UserName field with type String, required, and trimmed
		UserName: {
			type: String,
			required: true,
			trim: true,
		},
		// Define the email field with type String, required, and trimmed
		Email: {
			type: String,
			required: true,
			trim: true,
		},
		// Define the password field with type String and required
		Password: {
			type: String,
			required: true,
		},
		// Define the ConfirmPassword field with type String and required
		ConfirmPassword: {
			type: String,
			required: true,
		},
		token: {
			type: String,
		},
		// Add timestamps for when the document is created and last modified
	},
	{ timestamps: true }
);

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("user", userSchema);