import React from "react";
import DropDownPanel from "../../reusables/DropDownPanel";

const DropdownColumn = ({ columnSize }) => {
  // Devin + Faris
  // Create a column of 6 FAQ dropdowns (Refer to Figma)
  // It should be 600px or so wide (Not set)
  // Ensure that everything is working correctly

  return <div>  
    <DropDownPanel
      buttonText={"Volunteer Coordinators"}
      dropdownText={"The volunteer coordinators at SHIFA Clinic oversee the recruitment, scheduling, and support of volunteers, ensuring all operations run smoothly and efficiently."}
      size={columnSize}
    ></DropDownPanel>

    <DropDownPanel
      buttonText={"Assessment Process & Requirements"}
      dropdownText={"Volunteers are required to meet specific eligibility criteria and undergo an application process that includes an assessment of their skills, background, and commitment to serving the community."}
      size={columnSize}
    ></DropDownPanel>

    <DropDownPanel
      buttonText={"Training & Orientation"}
      dropdownText={"New volunteers participate in a structured training and orientation program where they learn essential healthcare skills such as history taking and obtaining vital signs under supervision."}
      size={columnSize}
    ></DropDownPanel>

    <DropDownPanel
      buttonText={"How the Volunteer Process Works"}
      dropdownText={"The volunteer process involves applying through a formal system, attending an orientation, completing training, and then actively participating in various healthcare-related tasks at the clinic."}
      size={columnSize}
    ></DropDownPanel>
    <DropDownPanel
      buttonText={"Roles & Responsibilities"}
      dropdownText={"Volunteers take on a variety of roles based on their skills and interests, ranging from clinical tasks like assisting healthcare providers to non-clinical support such as administrative work and marketing."}
      size={columnSize}
    ></DropDownPanel>
    <DropDownPanel
      buttonText={"Volunteer Commitment & Expectations"}
      dropdownText={"Volunteers can expect to commit 10-15 hours of work to Shifa Clinic on a weekly basis, assisting in basic administrative tasks, patient care, and vital analysis."}
      size={columnSize}
    ></DropDownPanel>
  </div>;
};

export default DropdownColumn;
