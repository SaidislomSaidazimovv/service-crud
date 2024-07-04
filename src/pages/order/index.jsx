import * as React from "react";
import { Service } from "@modal";
import { Button } from "@mui/material";
import { ServiceTable } from "@ui";
import { useEffect, useState } from "react";
import { order } from "@service";

const Index = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await order.get();
      if (response.status === 200 && response?.data?.orderes) {
        setData(response.data.orderes);
      }
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Service open={open} handleClose={() => setOpen(false)} />
      <div className="flex flex-col gap-3">
        <div className="flex justify-end">
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(true)}
          >
            Add
          </Button>
        </div>

        <ServiceTable data={data} />
      </div>
    </>
  );
};

export default Index;
