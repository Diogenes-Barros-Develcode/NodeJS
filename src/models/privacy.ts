import mongoose from "mongoose";

const PrivacyConfigSchema = new mongoose.Schema({
    userID: {type: Number, required: true},
    allowSMS: {type: Boolean, require: true},
    allowEmail: {type: Boolean, require: true},
    allowCall: {type: Boolean, require: true},
});

const privacyConfig = mongoose.model("PrivacySchema", PrivacyConfigSchema);

export { privacyConfig };