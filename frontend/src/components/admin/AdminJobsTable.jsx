import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";

const AdminJobsTable = () => {
  const { allAdminJobs } = useSelector((store) => store.job);
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold text-md">Logo</TableHead>
            <TableHead className="font-bold text-md">Company Name</TableHead>
            <TableHead className="font-bold text-md">Role</TableHead>
            <TableHead className="font-bold text-md">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAdminJobs?.map((job) => (
            <tr key={job?._id}>
              <TableCell>
                <Button
                  className="p-6 border border-gray-300"
                  variant="outline"
                  size="icon"
                >
                  <Avatar>
                    <AvatarImage src={job?.logo} />
                  </Avatar>
                </Button>
              </TableCell>
              <TableCell>{job?.name}</TableCell>
              <TableCell>{job?.title}</TableCell>
              <TableCell>{job.createdAt.split("T")[0]}</TableCell>
            </tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobsTable;
