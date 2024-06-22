import mongoose from "mongoose";

const chartSchema = new mongoose.Schema({
  graphType: {
    type: String,
    default: "Bar",
  },
  graphColor: {
    type: String,
    default: "blue",
  },
  graphTitle: {
    type: String,
  },
  graphLabel: {
    type: String,
  },
  data: {
    type: Object,
    default: {},
  },
});

const Chart = mongoose.model("Chart", chartSchema);

export default Chart;
