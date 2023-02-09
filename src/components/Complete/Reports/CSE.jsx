import React from "react";
import "./report.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography } from "@mui/material";
import CNS from "./CSE/CNS";
import CC from "./CSE/CC";
import DM from "./CSE/DM";
import ET from "./CSE/ET";
import POM from "./CSE/POM";
import CC_LAB from "./CSE/CC_LAB";
import NS_LAB from "./CSE/NS_LAB";

const CSE = () => {
  return (
    <div>
      <Accordion className="accord">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="heading"
        >
          <Typography className="typo">7th Semester</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CNS />
          <CC />
          <DM />
          <ET />
          <POM/>
          <CC_LAB/>
          <NS_LAB/>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accord">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="heading"
        >
          <Typography className="typo">5th Semester</Typography>
        </AccordionSummary>
        <AccordionDetails>
          
        </AccordionDetails>
      </Accordion>

      <Accordion className="accord">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="heading"
        >
          <Typography className="typo">3rd Semester</Typography>
        </AccordionSummary>
        <AccordionDetails>
          
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CSE;
