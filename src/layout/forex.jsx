import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import "./forex.css";

function Forex() {
  const [forexData, setForexData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForexData = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/rates/getCurrentRates"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch forex data");
        }
        const data = await response.json();
        setForexData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchForexData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Foreign Exchange</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Currency</TableHead>
              <TableHead>Buy</TableHead>
              <TableHead>Sell</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {forexData.map((forex) => (
              <TableRow key={forex.id}>
                <TableCell>
                  <img
                    src={forex.country_flag}
                    alt={`${forex.country_name} Flag`}
                    width="32"
                    height="20"
                  />
                </TableCell>
                <TableCell>
                  <b>{forex.currency_code}</b>
                </TableCell>
                <TableCell>
                  <b>{forex.buying_rate}</b>
                </TableCell>
                <TableCell>
                  <b>{forex.selling_rate}</b>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default Forex;
