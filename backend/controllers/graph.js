import Graph from "../models/graph.js";

// Fetch graph data
export const fetchGraphData = async (req, res) => {
  try {
    const graph = await Graph.findOne();
    if (!graph) {
      return res.status(404).json({});
    }
    res.status(200).json(graph);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Upload graph data
export const uploadGraphData = async (req, res) => {
  try {
    const { graphType, graphColor, graphTitle, graphLabel, data } = req.body;

    let graph = await Graph.findOne();
    if (!graph) {
      // Create a new graph if none exists
      graph = new Graph({
        graphType,
        graphColor,
        graphTitle,
        graphLabel,
        data,
      });
    } else {
      // Update the existing graph
      graph.graphType = graphType;
      graph.graphColor = graphColor;
      graph.graphTitle = graphTitle;
      graph.graphLabel = graphLabel;
      graph.data = data;
    }

    const updatedGraph = await graph.save();
    res.status(200).json(updatedGraph);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
