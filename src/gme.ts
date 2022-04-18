const completionSpec: Fig.Spec = {
  name: "gme",
  description: "Gloo Mesh Enterprise development CLI",
  subcommands: [
    {
      name: "run",
      description: "Run Gloo Mesh Enterprise",
      subcommands: [
        {
          name: "local",
          description: "Run Gloo Mesh Enterprise on local clusters",
        },
        {
          name: "ui",
          description: "Run Gloo Mesh Enterprise UI",
        },
        {
          name: "graph",
          description: "Run Gloo Mesh Enterprise with graph data",
        },
        {
          name: "cluster",
          description: "Run Gloo Mesh Enterprise on remote clusters",
          subcommands: [
            {
              name: "dev",
              description: "Run Gloo Mesh Enterprise on remote dev clusters",
            },
            {
              name: "demo",
              description: "Run Gloo mesh Enterprise on remote demo clusters",
            },
          ],
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for gme",
    },
  ],
  // Only uncomment if gme takes an argument
  // args: {}
};
export default completionSpec;
