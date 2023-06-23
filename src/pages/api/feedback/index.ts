import type { NextApiRequest, NextApiResponse } from "next";
import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { Table } from "sst/node/table";

const dynamoDB = new DocumentClient({
  region: "eu-west-2",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log(req.body);

    const params = {
      TableName: Table.Feedback.tableName,
      Item: {
        ...req.body,
        createdAt: Date.now().toString(),
      },
    };

    await dynamoDB.put(params).promise();

    return res.status(200).json({ message: "Feedback submitted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
}
