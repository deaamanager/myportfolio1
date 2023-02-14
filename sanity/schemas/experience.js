export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: "jobTitle",
      title: "JobTitle",
      type: "string",
    },
    {
      name: "companyImage",
      title: "Company Image",
      type: "image",
        Options: { 
          hotspot: true,
       },
    },
    {
      name: "company",
      title: "Company",
      type: "text",
     
    },
    {
      name: "dateStarted",
      title: "DateStarted",
      type: "date",
    },
    {
      name: "dateEnded",
      title: "DateEnded",
      type: "date",
     
    },
    {
      name: "isCurrentLyWorkingHere",
      title: "IsCurrentLyWorkingHere",
      type: "boolean",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" }}],
    },
    
    {
      name: "points",
      title: "Points",
      type: "array",
      of: [{ type: "string" }],
    }, 

  ],
}
