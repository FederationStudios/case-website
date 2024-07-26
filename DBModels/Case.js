const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema({
    case_id: {
      type: String,
      required: true,
      unique: true // Ensure this field is unique
    },
    submitter: String,
    offender: String,
    incident: String,
    violations: String,
    evidence: String,
    status: {
      type: String,
      default: "Pending"
    },
    guild_id: {
      type: String,
      required: true
    },
    submitted_date: {
        type: Date,
        default: Date.now
    }
  });  

const Case = mongoose.model("Case", caseSchema);

module.exports = Case;
