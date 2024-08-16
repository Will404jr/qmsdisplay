import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

function Ticket() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Dummy ticket data
    const dummyData = [
      { _id: "1", number: "1", ticket: "A123", counter: "1" },
      { _id: "2", number: "2", ticket: "B456", counter: "2" },
      { _id: "3", number: "3", ticket: "C789", counter: "3" },
      { _id: "4", number: "4", ticket: "D012", counter: "4" },
      { _id: "5", number: "5", ticket: "E345", counter: "5" },
    ];

    // Set the dummy data
    setTickets(dummyData);
  }, []);

  return (
    <Card className="h-full">
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {/* <TableHead>No.</TableHead> */}
              <TableHead>Ticket</TableHead>
              <TableHead>Counter</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets.map((ticket) => (
              <TableRow key={ticket._id}>
                {/* <TableCell>
                  <b>{ticket.number}</b>
                </TableCell> */}
                <TableCell>
                  <b>{ticket.ticket}</b>
                </TableCell>
                <TableCell>
                  <b>{ticket.counter}</b>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default Ticket;
