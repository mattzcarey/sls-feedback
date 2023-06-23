import { SSTConfig } from "sst";
import { NextjsSite, Table } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "sls-feedback",
      region: "eu-west-2",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const table = new Table(stack, "Feedback", {
        fields: {
          event: "string",
          like: "string",
          change: "string",
          rating: "string",
          email: "string",
          createdAt: "string",
        },
        primaryIndex: { partitionKey: "event", sortKey: "rating" },
      });

      const site = new NextjsSite(stack, "Site", {
        bind: [table],
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
